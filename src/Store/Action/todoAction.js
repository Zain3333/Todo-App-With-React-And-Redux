//  import All Constant from 'todoConst.js' File 
import {
  ADD_TODO,
  DELETE_ALL_TODO,
  DELETE_TODO,
  UPDATE_TODO,
} from "../Constant/todoConst";

//  Add Todo Action
export function addTodoAction(todo) {
  return (dispatch) => {
    dispatch({
      type: ADD_TODO,
      payload: todo,
    });
  };
}

//  Delete Todo Action
export function deleteTodoAction(todoIndex) {
  return (dispatch) => {
    dispatch({
      type: DELETE_TODO,
      payload: todoIndex,
    });
  };
}

//  Update Todo Action
export function editTodoAction(todoObj) {
  return (dispatch) => {
    dispatch({
      type: UPDATE_TODO,
      payload: todoObj,
    });
  };
}

//  Delete All Todo Action
export function deleteAllTodosAction() {
  return (dispatch) => {
    dispatch({ type: DELETE_ALL_TODO });
  };
}
