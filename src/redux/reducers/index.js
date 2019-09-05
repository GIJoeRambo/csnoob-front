import { combineReducers } from "redux";
import ThreadCommentIsPosted from "./ThreadCommentIsPostedReducer";
import sidebarReducer from "./sidebarReducer";

export default combineReducers({
  ThreadCommentIsPosted,
  sidebarReducer
});
