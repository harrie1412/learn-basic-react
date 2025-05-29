import { deleteCookie, getCookie } from "../hepler";
const initState = getCookie("token") ? true : false;
const isLoginReducer = (state = initState, action) => {
  switch (action.type) {
    case "LOGIN":
      return true;
    case "LOGOUT":
      deleteCookie("fullname");
      deleteCookie("id");
      deleteCookie("token");
      deleteCookie("email");
      return false;
    default:
      return state;
  }
};
export default isLoginReducer;
