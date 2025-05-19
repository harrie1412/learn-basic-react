import { useContext } from "react";
import { MenuContext } from "../Layout";
function Menu(){
    //như lấy props khi nhiều value
    const {menus, number} = useContext(MenuContext);
    console.log(menus);
    return (
        <>
        <ul>
            {menus.map((item,index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
            <div>{number}</div>
        </>
    );
}
export default Menu;