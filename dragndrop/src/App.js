import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [board, setBoard] = useState([
    {
      id: 1,
      title: "Todo",
      items: [
        { id: 1, order: 2, text: "Card Number 2" },
        { id: 2, order: 1, text: "Card Number 1" },
        { id: 3, order: 3, text: "Card Number 3" },
      ],
    },
    {
      id: 2,
      title: "Review",
      items: [
        { id: 4, order: 4, text: "Card Number 4" },
        { id: 5, order: 5, text: "Card Number 5" },
        { id: 6, order: 6, text: "Card Number 6" },
      ],
    },
    {
      id: 3,
      title: "Done",
      items: [
        { id: 7, order: 7, text: "Card Number 7" },
        { id: 8, order: 8, text: "Card Number 8" },
        { id: 9, order: 9, text: "Card Number 9" },
      ],
    },
  ]);

  const [currentBoard, setCurrentBoard] = useState(null);
  const [currentItem, setCurrentItem] = useState(null);

  const dragStartHandler = (e, board, item) => {
    setCurrentBoard(board);
    setCurrentItem(item);
  };
  const dragLeaveHandler = (e) => {
    e.target.style.boxShadow = "none";
  };

  const dragEndHandler = (e) => {
    e.target.style.boxShadow = "none";
  };
  const dragOverHandler = (e) => {
    e.preventDefault();
    if (e.target.className === "item") {
      e.target.style.boxShadow = "0 4px 3px gray";
    }
  };
  const dropHandler = (e, board, item) => {
    e.preventDefault();
    const currentIndex = currentBoard.items.indexOf(currentItem);
    currentBoard.items.splice(currentIndex, 1);
    const dropIndex = board.items.indexOf(item);
    board.items.splice(dropIndex + 1, 0, currentItem);

    setBoard(
      board.map((b) => {
        if (b.id === board.id) {
          return board;
        }
        if (b.id === currentBoard.id) {
          return currentBoard;
        }
        return b;
      })
    );
  };

  return (
    <div className="App">
      {board.map((board) => (
        <div key={board.id} className="board">
          <div> {board.title} </div>
          {board.items.map((item) => (
            <div
              className="item"
              key={item.id}
              onDragStart={(e) => dragStartHandler(e, board, item)}
              onDragLeave={(e) => dragLeaveHandler(e)}
              onDragEnd={(e) => dragEndHandler(e)}
              onDragOver={(e) => dragOverHandler(e)}
              onDrop={(e) => dropHandler(e, board, item)}
              draggable={true}
            >
              {item.text}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default App;
