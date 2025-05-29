import './App.css';
// import {Routes, Route} from "react-router-dom";
// import Home from './pages/Home';
// import About from './pages/About';
// import Contact from './pages/Contact';
// import Error404 from './pages/Error404';
// import LayoutDefault from './pages/Layout/LayoutDefault';
// import Blog from './pages/Blog';
// import BlogNews from './pages/BlogNews';
// import BlogRelated from './pages/BlogRelated';
// import BlogAll from './pages/BlogAll';
// import BlogDetail from './pages/BlogDetail';
// import Login from './pages/Login';
// import InfoUser from './pages/InfoUser';
// import PrivateRouter from './component/PrivateRouter';
import AllRoute from './component/AllRoute';
function App() {
  return (
    <>
      <AllRoute/>
      {/* <Routes>
        <Route path="/" element={<LayoutDefault />}>
          <Route path="/" element={<Home />}/>
          <Route path="about" element={<About/>}/>
          <Route path="blog" element={<Blog/>}>
              <Route index element={<BlogAll />}/>
              <Route path="news" element={<BlogNews />}/>
              <Route path="related" element={<BlogRelated />}/>
              <Route path=":id" element={<BlogDetail />}/>
          </Route>
          <Route path="contact" element={<Contact />}/>
          <Route path="*" element={<Error404 />}/>
          <Route path="login" element={<Login />}/>
          <Route element={<PrivateRouter/>}>
              <Route path="info-user" element={<InfoUser />}/>
          </Route>
        </Route>
      </Routes> */}
    </>
  );
}

export default App;
