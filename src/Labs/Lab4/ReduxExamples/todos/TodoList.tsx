import React from "react";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";
export default function TodoList() {
  const { todos } = useSelector((state: any) => state.todosReducer);
  return (
    <div id="wd-todo-list-redux">
      <h2>Todo List</h2>
      <ul className="list-group">
        <TodoForm />
        {todos.map((todo: any) => (
          <TodoItem todo={todo} deleteTodo={function (id: string): void {
                throw new Error("Function not implemented.");
            } } setTodo={function (todo: { id: string; title: string; }): void {
                throw new Error("Function not implemented.");
            } } />
        ))}
      </ul>
      <hr/>
    </div>
);}
