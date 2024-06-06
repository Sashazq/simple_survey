import { useEffect, useState } from "react";
import "./App.css";
import { getQuestions } from "./config/questions";

const QUESTION_LIST = getQuestions();
function App() {
  const [questionList, setQuestionList] = useState(QUESTION_LIST);
  const [question, setQuestion] = useState(QUESTION_LIST[0]);
  const [currentIndex, setIndex] = useState(-1);
  const [selectedQuestionIndex, setQuestionIndex] = useState(0);
  useEffect(() => {
    setQuestionList(QUESTION_LIST);
  }, []);

  const nextQuestion = () => {
    const newIndex = selectedQuestionIndex + 1;
    if (questionList[newIndex]) {
      setIndex(-1);
      setQuestionIndex(newIndex);
      setQuestion(questionList[newIndex]);
    }
  };

  const prevQuestion = () => {
    const newIndex = selectedQuestionIndex - 1;
    if (questionList[newIndex]) {
      setIndex(-1);
      setQuestionIndex(newIndex);
      setQuestion(questionList[newIndex]);
    }
  };
  const clickAnswer = (index: number) => {
    return function () {
      setIndex(index);
    };
  };

  return (
    <>
      <div className="questionWrapper">
        <h1>{question.question}</h1>
        <div className="answers">
          {question.options.map((item, index) => (
            <div
              onClick={clickAnswer(index)}
              className={`answer ${
                currentIndex >= 0
                  ? question?.options[index].isAnswer
                    ? "correct"
                    : "incorrect"
                  : ""
              }`}
              key={index}
            >
              {item.text}
            </div>
          ))}
        </div>
      </div>
      <div className="controls">
        <button onClick={prevQuestion}>Previous question</button>
        <button onClick={nextQuestion}>Next question</button>
      </div>
    </>
  );
}

export default App;
