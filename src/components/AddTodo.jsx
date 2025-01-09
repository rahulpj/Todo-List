import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todoSlice";

function AddTodo() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = () => {
    if (input.length > 0) {
      dispatch(addTodo({ todo: input }));
      setInput("");
    }
  };
  return (
    <div>
      <input
        className="border-2 border-black border-solid "
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />{" "}
      <button onClick={handleSubmit}>Add Todo</button>
    </div>
  );
}

export default AddTodo;
