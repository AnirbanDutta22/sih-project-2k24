// src/App.js
// import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import UserLayout from "./layouts/UserLayout";
import AdminLayout from "./layouts/AdminLayout";
import Dashboard from "./components/Dashboard";
// import AdminClient from "./components/Admin/AdminClient/AdminClient";
// import Report from "./components/Admin/Reports/Report";
// import AddCategoryPage from "./pages/Admin/AddCategoryPage";
// import AdminLayout from "./layout/AdminLayout";

// import UserLayout from "./layout/UserLayout";
// import UserDashboard from "./pages/User/UserDashboard";
// import Analytics from "./pages/User/Analytics";
// import Product from "./pages/User/Product";
// import Client from "./pages/User/Client";
// import Users from "./pages/User/Users";
// import LoginPage from "./pages/Login/LoginPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/user" element={<UserLayout />}>
          <Route index element={<Dashboard />} />
        </Route>
        <Route exact path="/admin" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
