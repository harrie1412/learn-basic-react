import './LayoutDefault.scss';
import { Link, Outlet, NavLink } from 'react-router-dom';
function LayoutDefault(){
    return(
        <>
            <div className="layout-default">
                <header className="layout-default__header">
                    <div className="layout-default__logo">Logo</div>
                    <div className="layout-default__menu">
                        <ul>
                            <li>
                                <NavLink to="/">Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/about">About</NavLink>
                            </li>
                            <li>
                                <NavLink to="/blog">Blog</NavLink>
                                <ul className='layout-default__sub'>
                                    <li>
                                        <NavLink to="/blog/news">BlogNews</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/blog/related">BlogRelated</NavLink>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <NavLink to="/contact">Contact</NavLink>
                            </li>
                            <li>
                                <NavLink to="/info-user">InfoUser</NavLink>
                            </li>
                        </ul>
                    </div>
                </header>
                <main className="layout-default__main">
                    <Outlet />
                </main>
                <footer className="layout-default__footer">
                    Copyright @ 2025 by Ha
                </footer>
            </div>
        </>
    );
}
export default LayoutDefault;