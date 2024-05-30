import React, {useState} from "react";
import AddIcon from '@mui/icons-material/Add';


function CreateNote(props) {
  const [inputText, setInputText] = useState("");

  function handleChange(event) {
    const newValue = event.target.value
    setInputText(newValue)
  }

    return(
        <div className="create-note">
            <header className="todo-header"> Create Todo</header>
            <div className="input-div">
              <input onChange={handleChange} type="text" value={inputText} />
              <button
                onClick={() => {
                  props.onAdd(inputText)
                  setInputText("")
                }}
              > <AddIcon /> </button>
            </div>
        </div>
    )
}

export default CreateNote;