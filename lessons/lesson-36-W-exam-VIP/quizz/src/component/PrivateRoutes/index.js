import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import Login from "../../pages/Login";

function PrivateRouter(){
    const isLogin = useSelector(state => state.isLoginReducer);
    return(
        <>
        {isLogin ? <Outlet/> : <Login/>}
        </>
    );
}
export default PrivateRouter;
