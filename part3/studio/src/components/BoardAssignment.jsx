import { useState } from "react";

export default function BoardAssignment() {
  const boards = [
    {
      label: "Dinner",
      value: "Dinner",
    },
    {
      label: "Weekend Meal",
      value: "Weekend Meal",
    },
    {
      label: "Italian Night",
      value: "Italian Night",
    },
  ];

  const [boardName, setName] = useState("no boards yet!");

  const handleChange = (event) => {
    setName(event.target.value);
  };

  return (
    <div style={{ paddingTop: "50px" }}>
      <label>Save to Board: </label>
      <select value={boardName} onChange={handleChange}>
        {boards.map((board, index) => (
          <option key={index} value={board.value}>
            {board.label}
          </option>
        ))}
      </select>

      <p>Saved to {boardName}!</p>
    </div>
  );
}
