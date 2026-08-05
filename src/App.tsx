import { useState } from "react";
import questions from "./data/questions";
import "./App.css";

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const question = questions[currentQuestion];

  return (
    <div className="container">
      <div className="quiz-card">
        <h1>Quiz App</h1>

        <p>
          Question {currentQuestion + 1} of {questions.length}
        </p>

        <h2>{question.question}</h2>

        <div className="options">
          {question.options.map((option, index) => (
            <button key={index} className="option-btn">
              {option}
            </button>
          ))}
        </div>

        <button
          className="next-btn"
          onClick={() => setCurrentQuestion(currentQuestion + 1)}
          disabled={currentQuestion === questions.length - 1}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default App;