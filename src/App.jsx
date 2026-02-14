import { useState, useEffect } from "react";
import "./App.css";

const boardSize = 20;

function App() {
  const [snake, setSnake] = useState([[10, 10]]);
  const [food, setFood] = useState([5, 5]);
  const [direction, setDirection] = useState([0, 1]);
  const [gameOver, setGameOver] = useState(false);
  const [isRunning, setIsRunning] = useState(false);

  // คีย์บอร์ด (คอม)
  useEffect(() => {
    const handleKey = (e) => {
      if (!isRunning) return;

      if (e.key === "ArrowUp") changeDirection([-1, 0]);
      if (e.key === "ArrowDown") changeDirection([1, 0]);
      if (e.key === "ArrowLeft") changeDirection([0, -1]);
      if (e.key === "ArrowRight") changeDirection([0, 1]);
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isRunning]);

  // game loop
  useEffect(() => {
    if (!isRunning || gameOver) return;

    const interval = setInterval(() => {
      moveSnake();
    }, 200);

    return () => clearInterval(interval);
  }, [isRunning, direction, gameOver]);

  const changeDirection = (newDir) => {
    setDirection(newDir);
  };

  const moveSnake = () => {
    setSnake((prev) => {
      const newSnake = [...prev];
      const head = [
        newSnake[0][0] + direction[0],
        newSnake[0][1] + direction[1],
      ];

      // ชนขอบ
      if (
        head[0] < 0 ||
        head[0] >= boardSize ||
        head[1] < 0 ||
        head[1] >= boardSize
      ) {
        setGameOver(true);
        setIsRunning(false);
        return prev;
      }

      newSnake.unshift(head);

      // กินอาหาร
      if (head[0] === food[0] && head[1] === food[1]) {
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

  const startGame = () => {
    setSnake([[10, 10]]);
    setFood([5, 5]);
    setDirection([0, 1]);
    setGameOver(false);
    setIsRunning(true);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Snake Game 🐍</h1>

      {!isRunning && !gameOver && (
        <button onClick={startGame}>Start Game</button>
      )}

      {gameOver && (
        <>
          <h2>Game Over!</h2>
          <button onClick={startGame}>Restart</button>
        </>
      )}

      {/* กระดาน */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${boardSize}, 18px)`,
          width: "fit-content",
          margin: "20px auto",
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
                style={{
                  width: 18,
                  height: 18,
                  backgroundColor: isSnake
                    ? "green"
                    : isFood
                    ? "red"
                    : "#eee",
                  border: "1px solid #ccc",
                }}
              />
            );
          })
        )}
      </div>

      {/* ปุ่มมือถือ */}
      <div style={{ marginTop: 20 }}>
        <button onClick={() => changeDirection([-1, 0])}>⬆️</button>
        <div>
          <button onClick={() => changeDirection([0, -1])}>⬅️</button>
          <button onClick={() => changeDirection([0, 1])}>➡️</button>
        </div>
        <button onClick={() => changeDirection([1, 0])}>⬇️</button>
      </div>

      <p>Use Arrow Keys or Touch Buttons</p>
    </div>
  );
}

export default App;
