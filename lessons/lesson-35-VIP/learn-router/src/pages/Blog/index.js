import { Outlet } from "react-router-dom";

function Blog(){
    return(
        <>
        <h2>Trang Blog</h2>
        <Outlet />
        </>
    );
}
export default Blog;