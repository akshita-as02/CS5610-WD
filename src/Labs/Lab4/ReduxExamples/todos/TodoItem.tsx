import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, setTodo } from "./todosReducer";

export default function TodoItem({
  todo,
}: {
  todo: { id: string; title: string };
  deleteTodo: (id: string) => void;
  setTodo: (todo: { id: string; title: string }) => void;
}) {
    const dispatch = useDispatch();
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <span className="todo-text">{todo.title}</span>
      <div className="button-group">
        <button onClick={() => dispatch(deleteTodo(todo.id))} id="wd-delete-todo-click">
          Delete
        </button>
        <button onClick={() => dispatch(setTodo(todo))} id="wd-set-todo-click">
          Edit
        </button>
      </div>
    </li>
  );
}
