import React from "react";
import { Routes, BrowserRouter } from "react-router-dom";
import { Route } from "react-router-dom";
import ScrollToTop from "@/Components/ScrollToTop";
import { TestView1, TestView2 } from "@/Views";

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
