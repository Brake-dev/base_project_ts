import React from "react";
import { Routes, BrowserRouter, Route } from "react-router";
import ScrollToTop from "@/Components/ScrollToTop";
import { TestView1, TestView2 } from "@/Views";

import "./variables.module.less";

const App = () => (
  <BrowserRouter>
    <ScrollToTop>
      <Routes>
        <Route path="/" element={<TestView1 />} />
        <Route path="/2" element={<TestView2 />} />
      </Routes>
    </ScrollToTop>
  </BrowserRouter>
);

export default App;
