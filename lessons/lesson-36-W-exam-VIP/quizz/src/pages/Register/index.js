import { useEffect, useState } from "react";
import { getUser, postUser } from "../../service/UserService";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";
import { useNavigate } from "react-router-dom";
function Register() {
  const navigate = useNavigate();
  const [info, setInfo] = useState({
    username: "",
    password: "",
    email: "",
    token: "abc",
  });
  const [allUser, setAllUser] = useState([]);
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInfo({
      ...info,
      [name]: value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(e);
    const allUser = await getUser();
    const exsitUser = allUser.filter(
      (item) => item.email == info.email && item.password == info.password
    );
    console.log(exsitUser);
    if (!exsitUser) {
      const result = await postUser(info);
      if (result) {
        Swal.fire({
          title: "Tạo đăng kí thành công",
          text: "",
          icon: "success",
          confirmButtonText: "Đăng nhập",
        }).then((result) => {
          if (result.isConfirmed) {
            navigate("/login");
          }
        });
      }
    }
    else{
      alert("Email này đã được đăng kí!");
    }
  };
  useEffect(() => {
    const fetchApi = async () => {
      const result = await getUser();
      setAllUser(result);
    };
    fetchApi();
  }, []);
  return (
    <>
      <div className="register">
        <h3 className="register__title">Register Account</h3>
        <form className="register__form" onSubmit={handleSubmit}>
          <table>
            <tbody>
              <tr className="register__form-item">
                <td>Họ và tên</td>
                <td>
                  <input
                    className="register__input"
                    type="text"
                    placeholder="Họ và tên"
                    name="username"
                    onChange={handleChange}
                  />
                </td>
              </tr>
              <tr className="register__form-item">
                <td>Email</td>
                <td>
                  <input
                    className="register__input"
                    type="text"
                    placeholder="email"
                    name="email"
                    onChange={handleChange}
                  />
                </td>
              </tr>
              <tr className="register__form-item">
                <td>Password</td>
                <td>
                  <input
                    className="lregister__input"
                    type="password"
                    placeholder="password"
                    name="password"
                    onChange={handleChange}
                  />
                </td>
              </tr>
            </tbody>
          </table>
          <button type="submit" className="register__submit">
            Đăng ký
          </button>
        </form>
      </div>
    </>
  );
}
export default Register;
