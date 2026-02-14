import { useState, useEffect } from "react";
import "./App.css";

const boardSize = 20;

function App() {
  const [snake, setSnake] = useState([[10, 10]]);
  const [food, setFood] = useState([5, 5]);
  const [direction, setDirection] = useState([0, 1]);
  const [gameOver, setGameOver] = useState(false);
  const [isRunning, setIsRunning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [score, setScore] = useState(0);
  const [speed, setSpeed] = useState(200);
  const [highScore, setHighScore] =
    useState(Number(localStorage.getItem("highScore")) || 0);

  useEffect(() => {
    const handleKey = (e) => {
      if (!isRunning) return;

      if (e.key === "ArrowUp") changeDirection([-1, 0]);
      if (e.key === "ArrowDown") changeDirection([1, 0]);
      if (e.key === "ArrowLeft") changeDirection([0, -1]);
      if (e.key === "ArrowRight") changeDirection([0, 1]);
      if (e.key === " ") setIsPaused((prev) => !prev);
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isRunning, direction]);

  useEffect(() => {
    if (!isRunning || gameOver || isPaused) return;

    const interval = setInterval(() => {
      moveSnake();
    }, Math.max(speed - snake.length * 3, 70));

    return () => clearInterval(interval);
  }, [isRunning, direction, gameOver, isPaused, snake]);

  const changeDirection = (newDir) => {
    if (
      direction[0] + newDir[0] === 0 &&
      direction[1] + newDir[1] === 0
    ) return;

    setDirection(newDir);
  };

  const moveSnake = () => {
    setSnake((prev) => {
      const newSnake = [...prev];
      const head = [
        newSnake[0][0] + direction[0],
        newSnake[0][1] + direction[1],
      ];

      if (
        head[0] < 0 ||
        head[0] >= boardSize ||
        head[1] < 0 ||
        head[1] >= boardSize ||
        newSnake.some(([r, c]) => r === head[0] && c === head[1])
      ) {
        endGame();
        return prev;
      }

      newSnake.unshift(head);

      if (head[0] === food[0] && head[1] === food[1]) {
        setScore((prev) => prev + 10);
        setFood([
          Math.floor(Math.random() * boardSize),
          Math.floor(Math.random() * boardSize),
        ]);
      } else {
        newSnake.pop();
      }

      return newSnake;
    });
  };

  const endGame = () => {
    setGameOver(true);
    setIsRunning(false);

    if (score > highScore) {
      localStorage.setItem("highScore", score);
      setHighScore(score);
    }
  };

  const startGame = () => {
    setSnake([[10, 10]]);
    setFood([5, 5]);
    setDirection([0, 1]);
    setGameOver(false);
    setIsPaused(false);
    setScore(0);
    setIsRunning(true);
  };

  return (
    <div className="container">
      <h1>🐍 Snake Game V2</h1>

      <div className="scoreboard">
        <span>Score: {score}</span>
        <span>High Score: {highScore}</span>
      </div>

      {!isRunning && !gameOver && (
        <button onClick={startGame}>Start Game</button>
      )}

      {gameOver && (
        <>
          <h2>Game Over!</h2>
          <button onClick={startGame}>Restart</button>
        </>
      )}

      {isRunning && (
        <button onClick={() => setIsPaused(!isPaused)}>
          {isPaused ? "Resume" : "Pause"}
        </button>
      )}

      {!isRunning && (
        <div style={{ marginTop: 10 }}>
          <button onClick={() => setSpeed(220)}>Easy</button>
          <button onClick={() => setSpeed(160)}>Medium</button>
          <button onClick={() => setSpeed(100)}>Hard</button>
        </div>
      )}

      <div
        className="board"
        style={{
          gridTemplateColumns: `repeat(${boardSize}, 1fr)`,
        }}
      >
        {[...Array(boardSize)].map((_, row) =>
          [...Array(boardSize)].map((_, col) => {
            const isSnake = snake.some(
              ([r, c]) => r === row && c === col
            );
            const isFood = food[0] === row && food[1] === col;

            return (
              <div
                key={`${row}-${col}`}
                className={
                  isSnake
                    ? "snake"
                    : isFood
                    ? "food"
                    : "cell"
                }
              />
            );
          })
        )}
      </div>

      <div className="controls">
        <button disabled={!isRunning} onClick={() => changeDirection([-1, 0])}>⬆️</button>
        <div>
          <button disabled={!isRunning} onClick={() => changeDirection([0, -1])}>⬅️</button>
          <button disabled={!isRunning} onClick={() => changeDirection([0, 1])}>➡️</button>
        </div>
        <button disabled={!isRunning} onClick={() => changeDirection([1, 0])}>⬇️</button>
      </div>

      <p>Arrow Keys | Space = Pause</p>
    </div>
  );
}

export default App;
