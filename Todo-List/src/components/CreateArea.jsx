import React, { useState } from "react";
import CreateNote from "./CreateNote";
import TodoArea from "./TodoArea";

function CreateArea() {
  const [items, setItems] = useState([]);
  const [fetchIndex, setFetchIndex] = useState(0);


  return (
    <div className="main-content">
      <CreateNote
       handleAdd = {() => {
        setFetchIndex(fetchIndex + 1)
       }}
      />
      <TodoArea
        fetchIndex={fetchIndex}
        items={items}
      />
    </div>
  );
}

export default CreateArea;
