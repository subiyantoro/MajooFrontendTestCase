import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import promise from "redux-promise-middleware";
import thunk from "redux-thunk";
import rootReducer from "../reducers";

const middleware = composeWithDevTools(applyMiddleware(promise, thunk))
const store = createStore(rootReducer, middleware)
export default store