// import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
//common layout
import DashboardLayout from "./layouts/DashboardLayout";
import Profile from "./layouts/Profile.jsx";
import Support from "./layouts/Support.jsx";
import Notification from "./layouts/Notification.jsx";
import ApplicationList from "./layouts/ApplicationList.jsx";
//pages
import {
  UserApplicationList,
  UserDashboard,
  UserManagement,
  GovtDashboard,
  AdminDashboard,
  Documents,
  PortalManagement,
  ComplianceList,
  GovtReports,
  AdminReports,
  Status,
} from "./pages/index.js";
import StartupRegistrationForm from "./components/form/StartupRegistrationForm.jsx";

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
          <Route
            path="notifications"
            element={<Notification userType="user" />}
          />
          <Route path="profile" element={<Profile userType="user" />} />
          <Route
            path="applications/new-application"
            element={<StartupRegistrationForm />}
          />
        </Route>
        <Route exact path="/govt" element={<DashboardLayout userType="govt" />}>
          <Route index element={<GovtDashboard />} />
          <Route
            path="applications"
            element={<ApplicationList userType="govt" />}
          />
          <Route path="compliances" element={<ComplianceList />} />
          <Route path="reports-analytics" element={<GovtReports />} />
          <Route path="support" element={<Support />} />
          <Route
            path="notifications"
            element={<Notification userType="govt" />}
          />
          <Route path="profile" element={<Profile userType="govt" />} />
        </Route>
        <Route
          exact
          path="/admin"
          element={<DashboardLayout userType="admin" />}
        >
          <Route index element={<AdminDashboard />} />
          <Route path="users" element={<UserManagement />} />
          <Route
            path="applications"
            element={<ApplicationList userType="admin" />}
          />
          <Route path="portal-settings" element={<PortalManagement />} />
          <Route path="reports-analytics" element={<AdminReports />} />
          <Route
            path="notifications"
            element={<Notification userType="admin" />}
          />
          <Route path="profile" element={<Profile userType="admin" />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
