import React, {useState} from "react";
import AddIcon from '@mui/icons-material/Add';
import axios from "axios";


function CreateNote(props) {
  const [inputText, setInputText] = useState("");

  function handleChange(event) {
    const newValue = event.target.value
    setInputText(newValue)
  }
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:4000/home", { title: inputText });
      console.log("Response data:", response.data);
      setInputText("");
    } catch(err) {
      console.error("Error adding item:", err);
    }
  };

    return(
        <div className="create-note">
          <header className="todo-header"> Create Todo</header>
            <form className="input-div" onSubmit={handleSubmit}>
              <input
              onChange={handleChange}
              type="text"
              value={inputText}
              placeholder="Enter item name"
              />
              
              <button type="submit">
                <AddIcon />
              </button>
            </form>
        </div>
    )
};

export default CreateNote;


