import { Children } from "react";
import Home from "../Home";
import LayoutDefault from "../Layout/LayoutDefault";
import About from "../About";
import Blog from "../Blog";
import BlogAll from "../BlogAll";
import BlogNews from "../BlogNews";
import BlogRelated from "../BlogRelated";
import BlogDetail from "../BlogDetail";
import Error404 from "../Error404";
import Contact from "../Contact";
import Login from "../Login";
import PrivateRouter from "../../component/PrivateRouter";
import InfoUser from "../InfoUser";

export const routes = [
    {
        path: "/",
        element: <LayoutDefault/>,
        children: [
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "about",
                element: <About/>
            },
            {
                path: "blog",
                element: <Blog/>,
                children:[
                    {
                        index: true,
                        element: <BlogAll/>
                    },
                    {
                        path: "news",
                        element: <BlogNews/>
                    },
                    {
                        path: "related",
                        element: <BlogRelated/>
                    },
                    {
                        path: ":id",
                    element: <BlogDetail/>
                    }
                ]
            },
            {
                path: "*",
                element: <Error404/>
            },
            {
                path: "contact",
                element: <Contact/>
            },
            {
                path: "login",
                element: <Login/>
            },
            {
                element: <PrivateRouter/>,
                children: [
                    {
                        path:"info-user",
                        element: <InfoUser/>
                    }
                ]
            }
        ]
    }
];
