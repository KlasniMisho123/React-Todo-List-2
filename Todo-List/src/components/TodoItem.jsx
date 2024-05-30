import React from "react";

function TodoItem (props) {
    return(
        <div className="note-item">
            <li>{props.text}</li>
        </div>
    )
}

export default TodoItem;