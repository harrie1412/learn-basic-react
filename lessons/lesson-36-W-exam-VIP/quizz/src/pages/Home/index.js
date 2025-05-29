import { NavLink } from "react-router-dom";
import { get, getCookie } from "../../hepler";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import './home.scss';
function Home() {
  const fullname = getCookie("fullname");
  const isLogin = useSelector((state) => state.isLoginReducer);
  // const isToken = getCookie("token");
  // console.log(isLogin);
  return (
    <>
      {isLogin ? (
        <>
          <div className="home">
            <p>Xin chào {fullname}</p>
            <p>Chúc mừng {fullname} đã đăng nhập thành công!</p>
            <ul>
              <li>
                <NavLink to="/topic">Danh sách chủ đề ôn luyện</NavLink>
              </li>
              <li>
                <NavLink to="/answer">Danh sách bài đã luyện tập</NavLink>
              </li>
            </ul>
            <hr />
            <p>
              Website trắc nghiệm online lập trình Frontend là một nền tảng trực
              tuyến cho phép các lập trình viên Frontend thực hiện các bài kiểm
              tra, đánh giá và đo đạc kiến thức của mình trong lĩnh vực lập
              trình Frontend.
            </p>
            <p>
              Đối với các lập trình viên Frontend, website trắc nghiệm online
              cung cấp các bài kiểm tra để giúp họ nâng cao kiến thức và kỹ năng
              trong nghề và công cụ lập trình như HTML, CSS, JavaScript, jQuery,
              Bootstrap, Angular, React, Vue,...
            </p>
          </div>
        </>
      ) : (
        <>
          <div className="home">
            <div>
              Website trắc nghiệm online lập trình Frontend là một nền tảng trực
              tuyến cho phép các lập trình viên Frontend thực hiện các bài kiểm
              tra, đánh giá và đo đạc kiến thức của mình trong lĩnh vực lập
              trình Frontend.
            </div>
            <div>
              Đối với các lập trình viên Frontend, website trắc nghiệm online
              cung cấp các bài kiểm tra để giúp họ nâng cao kiến thức và kỹ năng
              trong nghề và công cụ lập trình như HTML, CSS, JavaScript, jQuery,
              Bootstrap, Angular, React, Vue,...
            </div>
          </div>
        </>
      )}
    </>
  );
}
export default Home;
