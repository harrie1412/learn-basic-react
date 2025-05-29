import { useEffect, useState } from "react";
import { getUser } from "../../service/UserService";
import { useNavigate } from "react-router-dom";
import Home from "../Home";
import { set, setCookie } from "../../hepler";
import { useDispatch } from "react-redux";
import { loginAction } from "../../action/isLog";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";
function Login() {
  const [data, setData] = useState([]);
  const [info, setInfo] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  console.log("pageLogin");
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInfo({
      ...info,
      [name]: value,
    });
  };
  // console.log(info);
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(info);
    const userData = data.filter(
      (item) => item.email === info.email && item.password === info.password
    );
    if (userData.length > 0) {
      setCookie("fullname", userData[0].fullname, 1);
      setCookie("token", userData[0].token, 1);
      setCookie("email", userData[0].email, 1);
      setCookie("id", userData[0].id, 1);
      dispatch(loginAction());
      setInfo({ email: "", password: "" });
      Swal.fire({
        title: "Đăng nhập thành công",
        text: "",
        icon: "success",
      });
      navigate("/");
    } else {
      alert("Dang nhap khong thanh cong");
    }
  };
  const fetchApi = async () => {
    const result = await getUser();
    setData(result);
    // console.log(result);
  };
  useEffect(() => {
    fetchApi();
  }, []);
  return (
    <>
      <div className="login">
        <h3 className="login__title">Login</h3>
        <form onSubmit={handleSubmit} className="login__form">
          <table>
            <tbody>
              <tr className="login__form-item">
                <td>Email</td>
                <td>
                  <input
                    className="login__input"
                    type="text"
                    placeholder="email"
                    name="email"
                    onChange={handleChange}
                    value={info.email}
                  />
                </td>
              </tr>
              <tr className="login__form-item">
                <td>Password</td>
                <td>
                  <input
                    className="login__input"
                    type="password"
                    placeholder="password"
                    name="password"
                    onChange={handleChange}
                    value={info.password}
                  />
                </td>
              </tr>
            </tbody>
          </table>
          <button type="submit" className="login__submit">
            Đăng nhập
          </button>
        </form>
      </div>
    </>
  );
}
export default Login;
