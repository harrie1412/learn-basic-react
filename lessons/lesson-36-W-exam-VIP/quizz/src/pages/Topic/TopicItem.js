import { useEffect, useState } from "react";
import { getQuestion } from "../../service/QuestionService";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getTopic } from "../../service/TopicService";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";
import { getAnswerByUserId, postAnswer } from "../../service/AnswerService";
import { getCookie } from "../../hepler";
import "./Topic.scss";
function TopicItem() {
  const [allQuestion, setAllQuestion] = useState([]);
  const [quizTopic, setQuizTopic] = useState({});
  const param = useParams();
  const [allAnswer, setAllAnswer] = useState([]);
  const [countQuestion, setCountQuestion] = useState(0);
  const [questionTopic, setQuestionTopic] = useState([]);
  const navigate = useNavigate();
  const loadQuiz = async () => {
    const questions = await getQuestion();
    const topics = await getTopic();
    setAllQuestion(questions);
    const topicItem = topics.find((item) => item.id == param.id);
    setQuizTopic(topicItem);
    const currentQuestionTopic = questions.filter(
      (item) => item.topicId == param.id
    );
    setQuestionTopic(currentQuestionTopic);
    setCountQuestion(currentQuestionTopic.length);
    const initAnswer = currentQuestionTopic.map((questionItem) => {
      return {
        questionId: questionItem.id,
        answer: null,
      };
    });
    setAllAnswer(initAnswer);
    const userId = getCookie("id");
  };
  const getLastIdAnswer = async () => {
    const res = await getAnswerByUserId();
    navigate(`/result/${res.reverse()[0].id}`);
  };
  const handlePostAnswer = async (option) => {
    const res = await postAnswer(option);
    if (res) {
      Swal.fire({
        title: "Đã nộp",
        text: "",
        icon: "success",
        confirmButtonText: "Xem kết quả",
      }).then((result) => {
        if (result.isConfirmed) {
          getLastIdAnswer();
        } else {
          navigate("/answer");
        }
      });
    }
  };
  useEffect(() => {
    loadQuiz();
  }, []);
  const openConfirmAlert = async () => {
    const currentAnswer = allAnswer.filter((item) => item.answer != null);
    const postInfoAnswer = {
      userId: getCookie("id"),
      topicId: quizTopic.id,
      answers: allAnswer,
    };
    if (currentAnswer.length != countQuestion) {
      Swal.fire({
        title: "Bạn chắc chắn nộp chứ?",
        text: `Bạn còn ${
          countQuestion - currentAnswer.length
        } câu chưa hoàn thành`,
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3185d6",
        cancelButtonColor: "#e40",
        confirmButtonText: "Vâng!",
        cancelButtonText: "Không, tôi cần hoàn thành nó!",
      }).then((result) => {
        if (result.isConfirmed) {
          handlePostAnswer(postInfoAnswer);
        }
      });
    } else {
      handlePostAnswer(postInfoAnswer);
    }
  };
  const handleAddAnswer = (e) => {
    const questionId = e.target.name;
    const answer = e.target.dataset.index;
    allAnswer.find((item) => item.questionId == questionId)
      ? setAllAnswer(
          allAnswer.map((item) =>
            item.questionId == questionId
              ? { questionId: questionId, answer: answer }
              : item
          )
        )
      : setAllAnswer([
          ...allAnswer,
          {
            questionId: questionId,
            answer: answer,
          },
        ]);
  };
  return (
    <>
      <div className="question">
        <h3 className="question__header">Bài Quiz chủ đề: {quizTopic.name}</h3>
        <div className="question__list">
          {questionTopic.map((questionItem) => (
            <div className="question__item" key={questionItem.id}>
              <>
                <p>
                  Câu {questionItem.id}: {questionItem.question}
                </p>
                <div className="question__answers">
                  {questionItem.answers.map((answerItem, index) => (
                    <div
                      className="question__answers-item"
                      key={`${index}-${questionItem.id}`}
                    >
                      <input
                        type="radio"
                        name={questionItem.id}
                        data-index={index}
                        id={`${index}-${questionItem.id}`}
                        onChange={handleAddAnswer}
                      />
                      <label htmlFor={`${index}-${questionItem.id}`}>
                        {answerItem}
                      </label>
                    </div>
                  ))}
                </div>
              </>
            </div>
          ))}
        </div>
        <div className="question__submit">
          <button onClick={openConfirmAlert}>Nộp bài</button>
        </div>
      </div>
    </>
  );
}
export default TopicItem;
