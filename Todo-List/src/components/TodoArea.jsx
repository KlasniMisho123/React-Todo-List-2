import React, {useEffect, useState} from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import axios from "axios";

function TodoArea({ fetchIndex, items, delItem }) {
  const [backEndData, setBackEndData] = useState([]);

  const axali = async () => {
    try {
      const response = await axios.get("http://localhost:4000/home");

      setBackEndData(response.data);
    } catch (err) {
      console.error("Error fetching data:", err);
    }
  };

  const handleDel = async (event, title) => {
    event.preventDefault();
    try {
      const response = await axios.delete("http://localhost:4000/home", {
        data: {
          del_title: title
        }
      });
      console.log(`Deleted item with title: ${title}`);
      axali();
    } catch (err) {
      console.error("Error deleting item:", err);
    }
  }
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
            <form >
            <button 
              onClick={(event) => handleDel(event, item)}
              className="del-btn" 
            >
              <DeleteIcon />
            </button>
            </form>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoArea;
