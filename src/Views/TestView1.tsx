import React, { FC } from "react";
import { RouteComponentProps } from "react-router-dom";

const TestView1: FC<RouteComponentProps> = ({ history }) => (
  <div>
    <div>TestView1</div>
    <button type="button" onClick={() => history.push("/2")}>
      Got to TestView2
    </button>
  </div>
);

export default TestView1;
