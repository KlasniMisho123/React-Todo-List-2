import React, { useState } from "react";
import CreateNote from "./CreateNote";
import TodoArea from "./TodoArea";

function CreateArea() {
  const [items, setItems] = useState([]);
  const [fetchIndex, setFetchIndex] = useState(0);

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
      <CreateNote
       onAdd={addItem} 
       handleAdd = {() => {
        setFetchIndex(fetchIndex + 1)
       }}
      />
      <TodoArea
        fetchIndex={fetchIndex}
        items={items}
        delItem={delItem}
      />
    </div>
  );
}

export default CreateArea;
