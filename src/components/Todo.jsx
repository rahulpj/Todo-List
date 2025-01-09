import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, markAsCompleted, editTodo } from "../features/todoSlice";

function Todo({ todo }) {
  const [editable, setEditable] = useState(false);
  const [content, setContent] = useState(todo.todo);
  const dispatch = useDispatch();

  return (
    <div className="flex items-center justify-between bg-gray-100 rounded-lg p-4 shadow-sm mb-3">
      {/* Checkbox for marking completion */}
      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => dispatch(markAsCompleted({ id: todo.id }))}
          className="h-5 w-5 text-blue-600 rounded focus:ring focus:ring-blue-300"
        />

        {/* Todo text */}
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          readOnly={!editable}
          style={{ textDecoration: todo.completed ? "line-through" : "none" }}
          className="w-full bg-transparent border-none text-lg text-gray-800 resize-none focus:outline-none p-2 sm:w-[600px] md:w-[700px] lg:w-[800px]"
        />
      </div>

      {/* Action buttons */}
      <div className="flex gap-2">
        {/* Edit/Save button */}
        {!todo.completed &&
          (editable ? (
            <button
              onClick={() => {
                setEditable(false);
                dispatch(editTodo({ id: todo.id, newTodo: content }));
              }}
              className="bg-green-500 text-white px-3 py-1 rounded-lg hover:bg-green-600"
            >
              💾
            </button>
          ) : (
            <button
              onClick={() => setEditable(true)}
              className="bg-blue-500 text-white px-3 py-1 rounded-lg hover:bg-blue-600"
            >
              ✏️
            </button>
          ))}

        {/* Delete button */}
        <button
          onClick={() => dispatch(deleteTodo({ id: todo.id }))}
          className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600"
        >
          🗑️
        </button>
      </div>
    </div>
  );
}

export default Todo;
