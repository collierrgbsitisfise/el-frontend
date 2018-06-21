import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import App from "./App";
// import registerServiceWorker from "./registerServiceWorker";  
import rootReducer from "./rootReducer";
import "./index.css";



const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <Route path={`${process.env.PUBLIC_URL}/`} component={App} />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);

// registerServiceWorker();