import { Outlet, Navigate } from "react-router-dom";

function PrivateRouter(){
    const isLogin = false;
    return (
        <>
            {isLogin ? (<Outlet />) : (<Navigate to="/login" />)}
        </>
    );
}
export default PrivateRouter;