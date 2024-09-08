// import React from "react";

import ProgressCircleChart from "../../components/charts/CircleChart";

const gridBox = `flex flex-col justify-between items-start p-4 uppercase bg-white border border-gray-300 shadow-md`;
const gridBoxSpan = `font-semibold text-gray-400`;

const UserDashboard = () => {
  return (
    <div className="grid grid-cols-10 grid-rows-12 gap-8 h-full">
      <div className={`col-span-6 row-span-3 ${gridBox}`}>
        <h1 className="text-3xl">CURRENT STATUS</h1>
        <span className={gridBoxSpan}>check</span>
      </div>
      <div className={`col-span-4 row-span-6 ${gridBox}`}>
        <h1 className="text-3xl">Submission progress</h1>
        <ProgressCircleChart percentage={75} className="self-center" />
        <span className={`${gridBoxSpan} self-center`}>
          click here to know more
        </span>
      </div>
      <div className={`col-span-6 row-span-3 ${gridBox}`}>
        <h1 className="text-3xl">pending actions</h1>
        <span className={gridBoxSpan}>check</span>
      </div>
      <div className={`col-span-10 row-span-6 ${gridBox}`}>
        <div className="w-full flex justify-between">
          <h1 className="text-2xl">documents</h1>
          <button>Filter & Sort</button>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
