import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";
import DashBoard from "./components/dashboard/page";
import Login from "./components/login/page";
import "./components/ui/global.css";
import ProductsPage from "./components/ui/dashboard/products/products";
import UsersPage from "./components/ui/dashboard/users/page";
import Layout from "./components/dashboard/layout";
import AddProductsPage from "./components/dashboard/products/add/page";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route
          path="/dashboard/*"
          element={
            <Layout>
              <Routes>
                <Route path="/" element={<DashBoard />}></Route>
                <Route path="/products" element={<ProductsPage />}></Route>
                <Route
                  path="/products/add"
                  element={<AddProductsPage />}
                ></Route>
                <Route path="/users" element={<UsersPage />}></Route>
              </Routes>
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
