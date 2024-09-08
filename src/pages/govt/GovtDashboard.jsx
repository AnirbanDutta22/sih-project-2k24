import React, { useState } from "react";
import { Link } from "react-router-dom";
import ProgressCircleChart from "../../components/charts/CircleChart";

const gridBox = `flex flex-col justify-between gap-y-3 items-start p-4 uppercase bg-white border border-gray-300 shadow-md`;
const gridBoxSpan = `font-semibold text-gray-400 cursor-pointer`;
const statusBar = `flex flex-col justify-between px-6 w-full h-auto bg-gray-100 text-red-500 font-semibold shadow`;
const appText = `text-lg font-medium`; 
const statusText = `text-xs font-medium`; 
const statusContainer = `flex items-center border border-gray-300 rounded-md px-2 py-1`; 
const sliderWrapper = `flex items-center ml-auto`; 

const GovtDashboard = () => {
  const [applications, setApplications] = useState([
    { id: 1, name: "ABC Applications", status: "Pending" },
    { id: 2, name: "ABC Applications", status: "Reviewed" },
  ]);

  const handleStatusChange = (id) => {
    setApplications(applications.map(app =>
      app.id === id ? { ...app, status: app.status === "Pending" ? "Reviewed" : "Pending" } : app
    ));
  };

  return (
    <div className="h-full">
      <h1 className="text-3xl uppercase font-semibold">
        Welcome to Government Dashboard!
      </h1>
      <div className="grid grid-cols-10 grid-rows-12 gap-8 h-full mt-6">
        
        <div className={`col-span-6 row-span-3 ${gridBox}`}>
          <h1 className="text-2xl">Application Manager</h1>
          
          <div className={statusBar}>
            <div className="flex items-center w-full mb-2">
              <div className="flex-grow flex items-center">
                <span className={`text-black ${appText}`}>ABC Applications</span>
                <span className="ml-2">
                  <div className={`text-xs ${statusText} ${statusContainer} ${applications[0].status === "Pending" ? "text-yellow-500 border-yellow-500" : "text-green-500 border-green-500"}`}>
                    {applications[0].status}
                  </div>
                </span>
              </div>
              <div className={sliderWrapper}>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={applications[0].status === "Reviewed"}
                    onChange={() => handleStatusChange(applications[0].id)}
                    className="sr-only"
                  />
                  <div className="w-10 h-6 bg-gray-200 rounded-full"></div>
                  <div className="absolute w-4 h-4 bg-white rounded-full shadow-md transform transition-transform duration-300 ease-in-out"
                    style={{
                      transform: `translateX(${applications[0].status === "Reviewed" ? "1.5rem" : "0"})`,
                      backgroundColor: applications[0].status === "Reviewed" ? "green" : "yellow",
                    }}
                  ></div>
                </label>
              </div>
            </div>
          </div>

          <div className={statusBar}>
            <div className="flex items-center w-full mb-2">
              <div className="flex-grow flex items-center">
                <span className={`text-black ${appText}`}>XYZ Applications</span>
                <span className="ml-2">
                  <div className={`text-xs ${statusText} ${statusContainer} ${applications[1].status === "Pending" ? "text-yellow-500 border-yellow-500" : "text-green-500 border-green-500"}`}>
                    {applications[1].status}
                  </div>
                </span>
              </div>
              <div className={sliderWrapper}>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={applications[1].status === "Reviewed"}
                    onChange={() => handleStatusChange(applications[1].id)}
                    className="sr-only"
                  />
                  <div className="w-10 h-6 bg-gray-200 rounded-full"></div>
                  <div className="absolute w-4 h-4 bg-white rounded-full shadow-md transform transition-transform duration-300 ease-in-out"
                    style={{
                      transform: `translateX(${applications[1].status === "Reviewed" ? "1.5rem" : "0"})`,
                      backgroundColor: applications[1].status === "Reviewed" ? "green" : "yellow",
                    }}
                  ></div>
                </label>
              </div>
            </div>
          </div>

          <Link to="applications" className={gridBoxSpan}>
            Manage Applications
          </Link>
        </div>
        
        <div className={`col-span-4 row-span-6 ${gridBox}`}>
          <h1 className="text-2xl">Compliance</h1>
          <Link to="compliances" className={`${gridBoxSpan} self-center`}>
            Click here for more details
          </Link>
        </div>
        
        <div className={`col-span-6 row-span-3 ${gridBox}`}>
          <h1 className="text-2xl">Reports</h1>
          <Link to="reports-analytics" className={gridBoxSpan}>
            View Reports
          </Link>
        </div>
        

      </div>
    </div>
  );
};

export default GovtDashboard;
