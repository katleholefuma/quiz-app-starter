import { useState } from "react";
import questions from "./data/questions";
import "./App.css";

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);

  const question = questions[currentQuestion];

  const nextQuestion = () => {
    if (
      currentQuestion < questions.length - 1 &&
      selectedAnswer !== null
    ) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
    }
  };

  const getButtonClass = (index: number) => {
    if (selectedAnswer === null) return "option-btn";

    if (index === question.correctAnswer) {
      return "option-btn correct";
    }

    if (
      index === selectedAnswer &&
      selectedAnswer !== question.correctAnswer
    ) {
      return "option-btn wrong";
    }

    return "option-btn";
  };

  return (
    <div className="container">
      <div className="quiz-card">

        <h1>ACA Quiz App</h1>

        <p className="progress">
          Question {currentQuestion + 1} of {questions.length}
        </p>

        <h2>{question.question}</h2>

        <div className="options">
          {question.options.map((option, index) => (
            <button
              key={index}
              className={getButtonClass(index)}
              onClick={() => {
                if (selectedAnswer === null) {
                  setSelectedAnswer(index);
                }
              }}
              disabled={selectedAnswer !== null}
            >
              {option}
            </button>
          ))}
        </div>

        {selectedAnswer !== null && (
          <div className="feedback">

            {selectedAnswer === question.correctAnswer ? (
              <p className="correct-text">
                Correct!
              </p>
            ) : (
              <p className="wrong-text">
                Incorrect
              </p>
            )}

            <p className="explanation">
              {question.explanation}
            </p>

          </div>
        )}

        <button
          className="next-btn"
          onClick={nextQuestion}
          disabled={selectedAnswer === null}
        >
          Next
        </button>

      </div>
    </div>
  );
}

export default App;