/* eslint-disable react/prop-types */
// import React from "react";
import { GrDownload } from "react-icons/gr";
import { IoEyeOutline } from "react-icons/io5";
import { MdDeleteOutline } from "react-icons/md";

const icons = `btn-primary px-2 font-bold text-xl cursor-pointer`;

const ReportCard = ({ report_type, startup_type, id, name, date }) => {
  return (
    <div className="dashboard-box flex flex-col gap-y-3">
      <h1 className="text-xl">Lorem ipsum dolor sit amet.</h1>
      <span className="text-violet-500 font-medium">{report_type}</span>
      <span>{startup_type}</span>
      <p className="text-md">
        Application ID : <span className="font-medium">{id}</span> Startup Name
        : <span className="font-medium">{name}</span>
      </p>
      <div className="w-full flex items-center gap-x-5 border-t border-gray-200 py-3 cursor-pointer">
        <span className="flex-1 text-sm">{date}</span>
        <button className={icons}>
          <IoEyeOutline />
        </button>
        <button className={icons}>
          <GrDownload />
        </button>
        <button className={icons}>
          <MdDeleteOutline />
        </button>
      </div>
    </div>
  );
};

export default ReportCard;
