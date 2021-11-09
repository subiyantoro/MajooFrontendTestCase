import { combineReducers } from "redux";
import todo from "./todo";

const reducers = {
    todoStore: todo
}

const rootReducer = combineReducers(reducers)
export default rootReducer