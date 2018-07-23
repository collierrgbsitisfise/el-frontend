import { combineReducers } from "redux";

import link from "./reducers/link";
import proxy from "./reducers/proxy";

export default combineReducers({
  link,
  proxy
});
