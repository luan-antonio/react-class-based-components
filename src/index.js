import ReactDOM from "react-dom";
import { Fragment } from "react";

import * as S from "./globalStyle";
import App from "./App";

ReactDOM.render(
  <Fragment>
    <S.GlobalStyle />
    <App />
  </Fragment>,
  document.getElementById("root")
);
