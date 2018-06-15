import { combineReducers } from "redux";

import user from "./reducers/user";
import books from "./reducers/books";
import link from "./reducers/link";

export default combineReducers({
  user,
  books,
  link
});
