import { createStore } from "redux";
import reducer from "./reducers/index";
// import logger from "redux-logger";

export default createStore(reducer);
