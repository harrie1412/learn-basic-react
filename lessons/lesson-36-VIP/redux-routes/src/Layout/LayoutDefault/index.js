import { Outlet, Link } from 'react-router-dom';
import  './LayoutDefault.scss';
import CartMini from '../../component/CartMini';
function LayoutDefault(){
    return(
        <>
            <div className="layout-default">
                <header className="layout-default__header">
                    <div className="layout-default__logo">
                        <Link to="/">Logo</Link>
                    </div>
                    <div className='layout-default__cart'>
                        <CartMini/>
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