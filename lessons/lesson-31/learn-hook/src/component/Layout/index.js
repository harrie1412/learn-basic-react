import Header from '../Header';
import {createContext} from "react";
export const MenuContext = createContext();
function Layout(){
    const menus=[
        "Trang chủ",
        "Tin tức",
        "Giới thiệu",
        "Liên hệ"
    ];
    const number = 123456;
    return (
        <>
            <MenuContext.Provider value={{menus, number}}>
                <Header />
            </MenuContext.Provider>
            <div>Main</div>
            <div>Footer</div>
        </>
    );
}
export default Layout;