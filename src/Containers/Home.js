import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./home.css";
import {
  addTodoAction,
  deleteAllTodosAction,
  deleteTodoAction,
  editTodoAction,
} from "../Store/Action/todoAction";

let todoID; // global variable for get index of current todo for update

export default function Home() {
  const [todo, setTodo] = useState("");
  const [isEdit, setIsEdit] = useState(false);
  const todos = useSelector(({ todos }) => todos.todoArray);
  const dispatch = useDispatch();

  //  Add Todo Button...
  const addTodo = () => {
    if (todo) {
      dispatch(addTodoAction(todo));
      setTodo("");
    }
  };

  //  Delete Todo Button...
  const deleteTodo = (todoIndex) => {
    console.log(todoIndex);
    setIsEdit(false);
    setTodo("");
    dispatch(deleteTodoAction(todoIndex));
  };

  //  Edit Todo Button...
  const editTodo = (todoValue, todoIndex) => {
    setIsEdit(true);
    setTodo(todoValue);
    todoID = todoIndex;
  };

  //  Save Changes Todo Button...
  const saveTodo = () => {
    if (todo) {
      setIsEdit(false);
      setTodo("");
      dispatch(editTodoAction({ todoValue: todo, todoIndex: todoID }));
    } else {
      alert("Please! Enter the Updated Value");
    }
  };

  //  Delete All Todo Button...
  const deleteAllTodos = () => {
    setIsEdit(false);
    setTodo("");
    dispatch(deleteAllTodosAction());
  };
  return (
    <div id="mainDiv">
      <input value={todo} onChange={(e) => setTodo(e.target.value)} />
      {isEdit ? (
        <button style={{ backgroundColor: "green" }} onClick={saveTodo}>
          SAVE CHANGES
        </button>
      ) : (
        <button style={{ backgroundColor: "#6200ee" }} onClick={addTodo}>
          ADD TODO
        </button>
      )}
      <br />
      <br />
      <button style={{ backgroundColor: "#be0b0b" }} onClick={deleteAllTodos}>Delete All Todo</button>
      <ul>
        {todos && todos.length > 0 ? (
          todos.map((todo, index) => {
            return (
              <li key={index}>
                {todo}
                <br />
                <button
                  style={{ backgroundColor: "#0078c9" }}
                  onClick={editTodo.bind(this, todo, index)}
                >
                  Update
                </button>
                <button
                  style={{ backgroundColor: "#be0b0b", marginLeft: 5 }}
                  onClick={deleteTodo.bind(this, index)}
                >
                  Delete
                </button>
              </li>
            );
          })
        ) : (
          <h1>There is no todo !</h1>
        )}
      </ul>
    </div>
  );
}
