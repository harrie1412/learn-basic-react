import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getAnswerById } from "../../service/AnswerService";
import { getQuestionByTopicId } from "../../service/QuestionService";
import "./ResultItem.scss";
function ResultItem() {
  const param = useParams();
  const navigate = useNavigate();
  const [currentResult, setCurrentResult] = useState();
  const [currentTopic, setCurrentTopic] = useState(0);
  const [appreciate, setAppreciate] = useState({
    trueQuantity: 0,
    falseQuantity: 0,
    quantity: 0,
    trueRate: 0,
  });
  useEffect(() => {
    const fetchApi = async () => {
      const currentAnswer = await getAnswerById(param.id);
      const currentQuestion = await getQuestionByTopicId(
        currentAnswer[0].topicId
      );
      setCurrentTopic(currentAnswer[0].topicId);
      // console.log(currentAnswer);
      var data = [];
      for (let i = 0; i < currentQuestion.length; i++) {
        data.push({
          ...currentAnswer[0].answers[i],
          ...currentQuestion[i],
        });
      }
      setCurrentResult(data);
      var trueQ = data.reduce((total, item) => {
        // console.log("item: ",item,"- total: ",total);
        if (item.answer != null && item.answer == item.correctAnswer)
          return total + 1;
        else return total;
      }, 0);
      const falseQ = data.length - trueQ;
      const trueRate = 100 * (trueQ / data.length).toFixed(2);
      // console.log(data);
      // console.log(trueQ);
      setAppreciate({
        trueQuantity: trueQ,
        falseQuantity: falseQ,
        quantity: data.length,
        trueRate: trueRate,
      });
    };
    fetchApi();
  }, []);
  // console.log(appreciate);
  const reQuizz = () => {
    navigate(`/topic/${currentTopic}`);
  };
  return (
    <>
      <div className="result">
        <h3 className="result__title">Kết quả chủ đề: React JS</h3>
        <p>
          Đúng: {appreciate.trueQuantity} | Sai: {appreciate.falseQuantity} |
          Tổng số câu: {appreciate.quantity} | Tỷ lệ đúng: {appreciate.trueRate}
          %
        </p>
        {currentResult && (
          <div className="result__list">
            {currentResult.map((resultItem, index) => (
              <div className="result__item" key={resultItem.id}>
                <div className="result__header">
                  <span>
                    Câu {index + 1}: {resultItem.question}
                  </span>
                  {resultItem.answer === resultItem.correctAnswer ? (
                    <span className="resutl__tager result__target--true">
                      Đúng
                    </span>
                  ) : (
                    <span className="resutl__tager result__target--false">
                      Sai
                    </span>
                  )}
                </div>
                <div className="result__answer">
                  {resultItem.answers.map((answerItem, index) => {
                    let checked = false;
                    let className = "";
                    if (resultItem.answer == index) {
                      checked = true;
                      className += "result__label--checked";
                    }
                    if (resultItem.correctAnswer == index) {
                      className += " result__label--result";
                    }
                    return (
                      <div
                        className="result__answer-item"
                        key={`${index}-${resultItem.questionId}`}
                      >
                        <input type="radio" checked={checked} disabled />
                        <label className={className}>{answerItem}</label>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        )}
        <div className="result__submit">
          <button onClick={reQuizz}>Làm lại</button>
        </div>
      </div>
    </>
  );
}
export default ResultItem;
