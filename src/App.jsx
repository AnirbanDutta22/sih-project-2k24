// import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
//common layout
import DashboardLayout from "./layouts/DashboardLayout";
import Profile from "./layouts/Profile.jsx";
import Support from "./layouts/Support.jsx";
//pages
import {
  UserApplicationList,
  UserDashboard,
  UserList,
  GovtDashboard,
  AdminDashboard,
  Documents,
  AllApplicationList,
  PortalManagement,
  StartupApplicationList,
  ComplianceList,
  Reports,
  AllReports,
  Status,
} from "./pages/index.js";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/user" element={<DashboardLayout userType="user" />}>
          <Route index element={<UserDashboard />} />
          <Route path="applications" element={<UserApplicationList />} />
          <Route path="documents" element={<Documents />} />
          <Route path="status" element={<Status />} />
          <Route path="support" element={<Support />} />
          <Route path="profile" element={<Profile userType="user" />} />
        </Route>
        <Route exact path="/govt" element={<DashboardLayout userType="govt" />}>
          <Route index element={<GovtDashboard />} />
          <Route path="applications" element={<StartupApplicationList />} />
          <Route path="compliances" element={<ComplianceList />} />
          <Route path="reports-analytics" element={<Reports />} />
          <Route path="support" element={<Support />} />
          <Route path="profile" element={<Profile userType="govt" />} />
        </Route>
        <Route
          exact
          path="/admin"
          element={<DashboardLayout userType="admin" />}
        >
          <Route index element={<AdminDashboard />} />
          <Route path="users" element={<UserList />} />
          <Route path="applications" element={<AllApplicationList />} />
          <Route path="portal-settings" element={<PortalManagement />} />
          <Route path="reports-analytics" element={<AllReports />} />
          <Route path="profile" element={<Profile userType="admin" />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
