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

  const dragStartHandler = (e, b, item) => {
    setCurrentBoard(b);
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
  const dropHandler = (e, b, item) => {
    e.preventDefault();
    const currentIndex = currentBoard.items.indexOf(currentItem);
    currentBoard.items.splice(currentIndex, 1);
    const dropIndex = b.items.indexOf(item);
    b.items.splice(dropIndex + 1, 0, currentItem);
    
    setBoard(
      board.map((bo) => {
        if (bo.id === b.id) {
          return bo;
        }
        if (bo.id === currentBoard.id) {
          return currentBoard;
        }
        return bo;
      })
      );
      e.target.style.boxShadow = "none";
  };

  return (
    <div className="App">
      {board.map((b) => (
        <div key={b.id} className="board">
          <div> {b.title} </div>
          {b.items.map((item) => (
            <div
              className="item"
              key={item.id}
              onDragOver={(e) => dragOverHandler(e)}
              onDragLeave={(e) => dragLeaveHandler(e)}
              onDragStart={(e) => dragStartHandler(e, b, item)}
              onDragEnd={(e) => dragEndHandler(e)}
              onDrop={(e) => dropHandler(e, b, item)}
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
