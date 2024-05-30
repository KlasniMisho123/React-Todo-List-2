import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';

function TodoArea({ items, delItem }) {
  return (
    <div className="todo-area">
      <ul>
        {items.map((item, index) => (
          <li key={index}>
          {item}
          <button className="del-btn" onClick={() => delItem(index)}>
            <DeleteIcon />
          </button>
        </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoArea;
