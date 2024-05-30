import React, { useState } from "react";
import CreateNote from "./CreateNote";
import TodoArea from "./TodoArea";

function CreateArea() {
  const [items, setItems] = useState([]);

  function addItem(inputText) {
    setItems((prevItems) => {
      return [...prevItems, inputText]
    })
  }

  function delItem(id) {
    setItems((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="main-content">
      <CreateNote onAdd={addItem} />
      <TodoArea
        items={items}
        delItem={delItem}
      />
    </div>
  );
}

export default CreateArea;
