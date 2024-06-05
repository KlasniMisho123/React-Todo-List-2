import React, {useEffect, useState} from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import axios from "axios";

function TodoArea({ fetchIndex, items, delItem }) {
  const [backEndData, setBackEndData] = useState([]);

  const axali = async() => {
    const response = await axios.get("http://localhost:4000/home");
    console.log("R", response.data);
    setBackEndData(response.data);
  };

  useEffect(() => {
    axali();
  }, []);

  useEffect(() => {
    axali();
  }, [fetchIndex]);

  return (
    <div className="todo-area">
      <ul>
        {backEndData.map((item, index) => (
          <li key={index}>
            {item.name ? item.name : item}
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
