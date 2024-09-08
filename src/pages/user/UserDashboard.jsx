// import React from "react";

import { Link } from "react-router-dom";
import ProgressCircleChart from "../../components/charts/CircleChart";

const gridBox = `flex flex-col justify-between gap-y-3 items-start p-4 uppercase bg-white border border-gray-300 shadow-md`;
const gridBoxSpan = `font-semibold text-gray-400 cursor-pointer`;
const statusBar = `flex justify-between items-center px-6 w-full h-[3rem] bg-gray-100 text-red-500 font-semibold shadow`;

const UserDashboard = () => {
  return (
    <div className="h-full">
      <h1 className="text-3xl uppercase font-semibold">
        welcome to user dashboard !
      </h1>
      <div className="grid grid-cols-10 grid-rows-12 gap-8 h-full mt-6">
        <div className={`col-span-6 row-span-3 ${gridBox}`}>
          <h1 className="text-2xl">CURRENT STATUS</h1>
          <div className={statusBar}>
            <span className="text-black">ministry of AYUSH</span>
            <span className="text-black">Date : 12/04/2024</span>
            <span className="text-green-500">Checking</span>
          </div>
          <Link to="status" className={gridBoxSpan}>
            check
          </Link>
        </div>
        <div className={`col-span-4 row-span-6 ${gridBox}`}>
          <h1 className="text-2xl">Submission progress</h1>
          <ProgressCircleChart percentage={100} className="self-center" />
          <Link to="applications" className={`${gridBoxSpan} self-center`}>
            click here to know more
          </Link>
        </div>
        <div className={`col-span-6 row-span-3 ${gridBox}`}>
          <h1 className="text-2xl">pending actions</h1>
          <div className={statusBar}>
            <span>no pending actions</span>
          </div>
          <Link to="applications" className={gridBoxSpan}>
            check
          </Link>
        </div>
        <div className={`col-span-10 row-span-6 ${gridBox}`}>
          <div className="w-full flex justify-between">
            <h1 className="text-2xl">documents</h1>
            <button>Filter & Sort</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
