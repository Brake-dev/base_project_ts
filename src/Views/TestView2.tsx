import React, { FC } from "react";
import { RouteComponentProps } from "react-router-dom";

const TestView2: FC<RouteComponentProps> = ({ history }) => (
  <div>
    <div>TestView2</div>
    <button type="button" onClick={() => history.push("/")}>
      Got to TestView1
    </button>
  </div>
);

export default TestView2;
