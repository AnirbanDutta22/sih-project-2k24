/* eslint-disable react/prop-types */
// import React from "react";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import Header from "../components/Header/Header";

const DashboardLayout = ({ userType }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    // common dashboard layout
    <div className="">
      <div className="flex h-screen overflow-hidden">
        {/* Sidebar  */}
        <Sidebar
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
          userType={userType}
        />

        {/* Content Area */}
        <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
          {/* Header */}
          <Header
            sidebarOpen={sidebarOpen}
            setSidebarOpen={setSidebarOpen}
            userType={userType}
          />

          {/* Main Content*/}
          <main className="bg-blue-50 h-full">
            <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
              <Outlet />
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
