import { Link, NavLink, Outlet } from "react-router-dom";
import "./LayoutDefault.scss";
import { useDispatch, useSelector } from "react-redux";
import { loginAction, logoutAction } from "../../action/isLog";
import { useEffect, useState } from "react";
import { getCookie } from "../../hepler";
function LayoutDefault() {
  const dispatch = useDispatch();
  const isLogin = useSelector((state) => state.isLoginReducer);
  // console.log(isLogin);
  // console.log("isLogin");

  const handleLogout = () => {
    dispatch(logoutAction());
  };

  // const dispatch = useDispatch();
  // const isToken = getCookie("token"); //unde
  // const isLogin = useSelector((state) => state.isLoginReducer);
  // console.log(isLogin);
  // console.log(isToken);
  // const handleLogout = () => {
  //   dispatch(logoutAction());
  //   console.log(isLogin);
  // };
  return (
    <div className="layout-default">
      <header className="header">
        <div className="header__logo"> <Link to="/">Quizz</Link></div>
        {isLogin && (
          <ul className="header__menu">
            <li className="header__item">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="header__item">
              <NavLink to="/topic">Topic</NavLink>
            </li>
            <li className="header__item">
              <NavLink to="/answer">Answer</NavLink>
            </li>
          </ul>
        )}

        <ul className="header__login">
          {isLogin ? (
            <li className="header__item " onClick={handleLogout}>
              <NavLink to="/">Logout</NavLink>
            </li>
          ) : (
            <>
              <li className="header__item">
                <NavLink to="/login">Login</NavLink>
              </li>
              <li className="header__item">
                <NavLink to="/register">Register</NavLink>
              </li>
            </>
          )}
        </ul>
      </header>
      <main className="main">
        <Outlet />
      </main>
      <footer className="footer">
        <div>Copyright @ 2025 by Harrie</div>
      </footer>
    </div>
  );
}
export default LayoutDefault;
