import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DashBoard from "./dashboard/page";
import Login from "./login/page";
import React from "react";
import "./ui/global.css";
const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/dashboard/*" element={<DashBoard />}></Route>
        <Route path="/login/*" element={<Login />}></Route>
      </Routes>
    </Router>
  );
};

export default App;
