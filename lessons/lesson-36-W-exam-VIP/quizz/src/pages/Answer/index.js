import { useEffect, useState } from "react";
import { getAnswerByUserId } from "../../service/AnswerService";
import { Link, useParams } from "react-router-dom";
import { getTopic } from "../../service/TopicService";
import "./Answer.scss";
function Answer() {
  const [allAnswer, setAllAnswer] = useState([]);
  useEffect(() => {
    const fetchApi = async () => {
      const topics = await getTopic();
      const answers = await getAnswerByUserId();
      var currentAnswer = [];
      for(let i = 0; i< answers.length;i++){
        currentAnswer.push({
          ...topics.find((topicItem)=>topicItem.id == answers[i].topicId),
          ...answers[i]//dùng ... spread để trải các phần tử trog answer rồi cùng với trải của topic tạo thành 1 object chung
        });
      }
      // getCurrentAnswer();
      setAllAnswer(currentAnswer.reverse());
    };
    fetchApi();
  }, []);
  // console.log(allAnswer);
  return (
    <>
      <div className="answer">
        <h2 className="answer__header">Danh sách bài đã ôn luyện</h2>
        <div className="answer__list">
          <table>
            <thead className="answer__head">
              <tr>
                <th>Id</th>
                <th>Tên chủ đề</th>
                <th></th>
              </tr>
            </thead>
            {allAnswer != [] && (
              <tbody className="answer__body">
                {allAnswer.map((answerItem) => (
                  <tr className="answer__item" key={answerItem.id}>
                    <td>{answerItem.id}</td>
                    <td>{answerItem.name}</td>
                    <td>
                      <button>
                        <Link to={`/result/${answerItem.id}`}>
                          <b>Xem chi tiết</b>
                        </Link>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            )}
          </table>
        </div>
      </div>
    </>
  );
}
export default Answer;
