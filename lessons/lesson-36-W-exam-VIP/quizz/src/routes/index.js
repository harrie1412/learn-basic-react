import ResultItem from "../component/ResultItem";
import LayoutDefault from "../Layout/LayoutDefault";
import Answer from "../pages/Answer";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Result from "../pages/Result";
import Topic from "../pages/Topic";
import TopicItem from "../pages/Topic/TopicItem";
import PrivateRoutes from "../component/PrivateRoutes";
export const routes = [
  {
    path: "/",
    element: <LayoutDefault />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        element: <PrivateRoutes />,
        children: [
          {
            path: "topic",
            element: <Topic />,
          },
          {
            path: "/topic/:id",
            element: <TopicItem />,
          },
          {
            path: "answer",
            element: <Answer />,
          },
          {
            path: "result",
            element: <Result />,
            children: [
              {
                path: ":id",
                element: <ResultItem />,
              },
            ],
          },
        ],
      },
    ],
  },
];
