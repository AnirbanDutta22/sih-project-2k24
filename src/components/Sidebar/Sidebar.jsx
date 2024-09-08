/* eslint-disable react/prop-types */
import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { NavLink, useLocation } from "react-router-dom";
import AYUSH from "../../assets/AYUSH.png";

const Sidebar = ({ sidebarOpen, setSidebarOpen, userType }) => {
  const { t } = useTranslation("common");
  const location = useLocation(); // Get the current location

  const trigger = useRef(null);
  const sidebar = useRef(null);

  const storedSidebarExpanded = localStorage.getItem("sidebar-expanded");
  const [sidebarExpanded, setSidebarExpanded] = useState(
    storedSidebarExpanded === null ? false : storedSidebarExpanded === "true"
  );

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!sidebar.current || !trigger.current) return;
      if (
        !sidebarOpen ||
        sidebar.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setSidebarOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!sidebarOpen || keyCode !== 27) return;
      setSidebarOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  useEffect(() => {
    localStorage.setItem("sidebar-expanded", sidebarExpanded.toString());
    if (sidebarExpanded) {
      document.querySelector("body")?.classList.add("sidebar-expanded");
    } else {
      document.querySelector("body")?.classList.remove("sidebar-expanded");
    }
  }, [sidebarExpanded]);

  const menuText = `group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-xl duration-300 ease-in-out`;

  const userSidebar = [
    { menuItem: t("Dashboard"), link: "" },
    { menuItem: t("Application"), link: "applications" },
    { menuItem: t("Status"), link: "status" },
    { menuItem: t("Documents"), link: "documents" },
    { menuItem: t("Support"), link: "support" },
    { menuItem: t("Profile"), link: "profile" },
  ];

  const govtSidebar = [
    { menuItem: "Dashboard", link: "" },
    { menuItem: "Application", link: "applications" },
    { menuItem: "Compliance", link: "compliances" },
    { menuItem: "Reports & Analytics", link: "reports-analytics" },
    { menuItem: "Support", link: "support" },
    { menuItem: "Profile", link: "profile" },
  ];

  const adminSidebar = [
    { menuItem: "Dashboard", link: "" },
    { menuItem: "Users", link: "users" },
    { menuItem: "Application", link: "applications" },
    { menuItem: "Portal Setting", link: "portal-settings" },
    { menuItem: "Reports & Analytics", link: "reports-analytics" },
    { menuItem: "Profile", link: "profile" },
  ];

  const renderSidebarMenu = (sidebarItems) => {
    return sidebarItems.map((item, index) => {
      // Generate the path for comparison
      const path = `/${item.link}`;

      return (
        <li
          key={index}
          className={`border-l-4 ${location.pathname === path ? "border-violet-500 bg-gradient-to-r from-violet-50" : ""}`}
        >
          <NavLink
            to={item.link}
            className={({ isActive }) => `${menuText} ${isActive ? "text-violet-600" : ""}`}
          >
            {/* Add appropriate icon here */}
            <svg
              className="fill-current"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* SVG paths */}
            </svg>
            {item.menuItem}
          </NavLink>
        </li>
      );
    });
  };

  return (
    <aside
      ref={sidebar}
      className={`absolute left-0 top-0 z-9999 flex h-screen w-[18rem] flex-col overflow-y-hidden bg-white duration-300 ease-linear lg:static lg:translate-x-0 ${
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      } shadow-[8px_0px_15px_-4px_rgba(0,0,0,0.3)`}
    >
      <div className="flex items-center justify-between gap-2 px-16 py-5.5 lg:py-6.5">
        <NavLink to="/">
          <img src={AYUSH} alt="Logo" />
        </NavLink>

        <button
          ref={trigger}
          onClick={() => setSidebarOpen(!sidebarOpen)}
          aria-controls="sidebar"
          aria-expanded={sidebarOpen}
          className="block lg:hidden"
        >
          <svg
            className="fill-current"
            width="20"
            height="18"
            viewBox="0 0 20 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19 8.175H2.98748L9.36248 1.6875C9.69998 1.35 9.69998 0.825 9.36248 0.4875C9.02498 0.15 8.49998 0.15 8.16248 0.4875L0.399976 8.3625C0.0624756 8.7 0.0624756 9.225 0.399976 9.5625L8.16248 17.4375C8.31248 17.5875 8.53748 17.7 8.76248 17.7C8.98748 17.7 9.17498 17.625 9.36248 17.475C9.69998 17.1375 9.69998 16.6125 9.36248 16.275L3.02498 9.8625H19C19.45 9.8625 19.825 9.4875 19.825 9.0375C19.825 8.55 19.45 8.175 19 8.175Z"
              fill=""
            />
          </svg>
        </button>
      </div>

      <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
        <nav className="mt-5 py-4 lg:mt-9">
          <div>
            <ul className="mb-6 flex flex-col gap-5">
              {userType === "user" && renderSidebarMenu(userSidebar)}
              {userType === "govt" && renderSidebarMenu(govtSidebar)}
              {userType === "admin" && renderSidebarMenu(adminSidebar)}
            </ul>
          </div>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
