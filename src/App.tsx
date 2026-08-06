import { useState } from "react";
import questions from "./data/questions";
import "./App.css";

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);
  const [answers, setAnswers] = useState<(number | null)[]>(
  Array(questions.length).fill(null)
);

  const question = questions[currentQuestion];

const handleAnswerClick = (index: number) => {
    if (selectedAnswer !== null) return;

    setSelectedAnswer(index);

    const updatedAnswers = [...answers];
    updatedAnswers[currentQuestion] = index;
    setAnswers(updatedAnswers);

    if (index === question.correctAnswer) {
      setScore((prev) => prev + 1);
    }
  };

  const nextQuestion = () => {
    if (selectedAnswer === null) return;

    if (currentQuestion === questions.length - 1) {
      setQuizFinished(true);
    } else {
  const next = currentQuestion + 1;

  setCurrentQuestion(next);
  setSelectedAnswer(answers[next]);
    }
  };

  const previousQuestion = () => {
    if (currentQuestion > 0) {
      const previous = currentQuestion - 1;

      setCurrentQuestion(previous);
      setSelectedAnswer(answers[previous]);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setScore(0);
    setQuizFinished(false);
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

  if (quizFinished) {

    const percentage = Math.round(
      (score / questions.length) * 100
    );

    const message =
      percentage >= 90
        ? "🏆 Excellent!"
        : percentage >= 70
        ? "👏 Great Job!"
        : percentage >= 50
        ? " Good Effort!"
        : " Keep Practicing!";

    return (
      <div className="container">
        <div className="quiz-card">

          <h1>Quiz Complete 🎉</h1>

          <h2>
            {score} / {questions.length}
          </h2>

          <h3>{percentage}%</h3>

          <p className="result-message">
            {message}
          </p>

          <button
            className="next-btn"
            onClick={restartQuiz}
          >
            Restart Quiz
          </button>

        </div>
      </div>
    );

  }

  return (
    <div className="container">
      <div className="quiz-card">

        <h1>ACA Quiz App</h1>

        <div className="header">
          <p className="progress">
            Question {currentQuestion + 1} of {questions.length}
          </p>

          <p className="score">
            Score: {score}
          </p>
        </div>

        <h2>{question.question}</h2>

        <div className="options">
          {question.options.map((option, index) => (
            <button
              key={index}
              className={getButtonClass(index)}
              onClick={() => handleAnswerClick(index)}
              disabled={selectedAnswer !== null}
            >
              {option}
            </button>
          ))}
        </div>

        {selectedAnswer !== null && (
          <div className="feedback">

            {selectedAnswer === question.correctAnswer ? (
              <h3 className="correct-text">
                ✅ Correct!
              </h3>
            ) : (
              <h3 className="wrong-text">
                ❌ Incorrect!
              </h3>
            )}

            <p>
              <strong>Correct Answer:</strong>{" "}
              {question.options[question.correctAnswer]}
            </p>

            <p className="explanation">
              <strong>Explanation:</strong><br />
              {question.explanation}
            </p>

          </div>
        )}

        <button
          className="back-btn"
          onClick={previousQuestion}
          disabled={currentQuestion === 0}
        >
          Back
        </button>

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