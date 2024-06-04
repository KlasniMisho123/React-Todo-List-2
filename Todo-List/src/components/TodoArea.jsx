import React, {useEffect, useState} from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import axios from "axios";



function TodoArea({ items, delItem }) {
  const [backEndData, setBackEndData] = useState([{}])

  const axali = async() => {
    const response = await axios.get("http://localhost:4000/home")
    console.log("R", response.data)
    setBackEndData(response.data)
    //26backEndData
  }

  useEffect(() => {
    axali()
  }, [])



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
