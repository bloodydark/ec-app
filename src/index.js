import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import createStore from "./reduxs/store/store";
// import { ConnectedRouter } from "connected-react-router";
// import { useHistory } from "react-router-dom";
import "./index.css";
import App from "./App";

export const store = createStore();
// const history = useHistory();

ReactDOM.render(
  <Provider store={store}>
    {/* <ConnectedRouter history={history}> */}
    <App />
    {/* </ConnectedRouter> */}
  </Provider>,
  document.getElementById("root")
);
