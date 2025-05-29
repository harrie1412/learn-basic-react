import { useEffect, useState } from "react";
import { getTopic } from "../../service/TopicService";
import { Link, Outlet } from "react-router-dom";
import "./Topic.scss";
function Topic() {
  const [allTopic, setAllTopic] = useState([]);
  const fetchApi = async () => {
    const topics = await getTopic();
    setAllTopic(topics);
  };
  useEffect(() => {
    fetchApi();
  }, []);
  // console.log(allTopic);
  return (
    <>
      <h2>Danh sách chủ đề ôn luyện</h2>
      <div className="topic">
        <table>
          <thead className="topic__head">
            <tr>
              <th>Id</th>
              <th>Tên chủ đề</th>
              <th></th>
            </tr>
          </thead>
          <tbody className="topic__body">
            {allTopic.map((item) => (
              <tr key={item.id}>
                <td className="topic__id">{item.id}</td>
                <td className="topic__title">{item.name}</td>
                <td>
                  <button>
                    <Link
                      to={`/topic/${item.id}`}
                      className="topic__button-exam"
                    >
                      <b>Làm bài</b>
                    </Link>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
export default Topic;
