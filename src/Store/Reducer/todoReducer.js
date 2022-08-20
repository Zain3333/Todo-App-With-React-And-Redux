//  import All Constant from 'todoConst.js' File
import {
  ADD_TODO,
  UPDATE_TODO,
  DELETE_TODO,
  DELETE_ALL_TODO,
} from "../Constant/todoConst";

//  this is initial state for todos list array
const INIT_STATE = {
  todoArray: [],
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    //  Add todo From array list...
    case ADD_TODO:
      const todoArrClone = state.todoArray;
      todoArrClone.push(action.payload);
      console.log(todoArrClone);
      return {
        ...state,
        todoArray: todoArrClone,
      };

    //  Delete todo From array list...
    case DELETE_TODO:
      const todoArrClone2 = state.todoArray.slice(0);
      todoArrClone2.splice(action.payload, 1);
      return {
        ...state,
        todoArray: todoArrClone2,
      };

    //  Update todo From array list...
    case UPDATE_TODO:
      const todoArrClone3 = state.todoArray.slice(0);
      console.log(action.payload.todoIndex, action.payload.todoValue);
      todoArrClone3.splice(
        action.payload.todoIndex,
        1,
        action.payload.todoValue
      );
      return {
        ...state,
        todoArray: todoArrClone3,
      };

    //  Delete All Todos From array list...
    case DELETE_ALL_TODO:
      const todoArrClone4 = state.todoArray.slice(0);
      todoArrClone4.splice(0, todoArrClone4.length);
      return {
        ...state,
        todoArray: todoArrClone4,
      };
    default:
      return state;
  }
};
