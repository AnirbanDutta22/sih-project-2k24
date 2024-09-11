// import React from "react";
import { Link } from "react-router-dom";
import Collapse from "../../components/Collapse";
import ProgressTracker from "../../components/ProgressTracker";
import formData from "../../../public/data/formData.json";
import Guide from "../../components/Guide";

const UserApplicationList = () => {
  const applications = [
    {
      id: "01apl",
      startup_name: "Innovate Health",
      sub_date: "12/03/2024",
      status: "pending",
    },
  ];

  const notifications = [
    {
      text: "Edit your information in a swipe Sint occaecat cupidatat nonproident, sunt in culpa qui officia deserunt mollit anim.",
      date: "12 May, 2025",
    },
    {
      text: "Edit your information in a swipe Sint occaecat cupidatat nonproident, sunt in culpa qui officia deserunt mollit anim.",
      date: "12 May, 2025",
    },
    {
      text: "Edit your information in a swipe Sint occaecat cupidatat nonproident, sunt in culpa qui officia deserunt mollit anim.",
      date: "12 May, 2025",
    },
    {
      text: "Edit your information in a swipe Sint occaecat cupidatat nonproident, sunt in culpa qui officia deserunt mollit anim.",
      date: "12 May, 2025",
    },
  ];

  const steps = [
    { stepno: "Step 1", details: "drafted", status: "done" },
    { stepno: "Step 2", details: "submitted", status: "done" },
    { stepno: "Step 3", details: "reviewed", status: "" },
    { stepno: "Step 4", details: "approved", status: "" },
  ];

  return (
    <div className="h-full">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="welcomeText">my applications</h1>
          <p className="welcomeSubText">all applications and their details</p>
        </div>
        <Link to="new-application" className="btn-primary">
          new application
        </Link>
      </div>
      <Guide />
      <div className="mt-6 z-10">
        {/* application list */}
        <div className="dashboard-box h-auto">
          <h1 className="text-2xl">APPLICATION LIST</h1>
          <div className="w-full relative overflow-x-auto flex-1">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500">
              <thead className="text-sm text-gray-500 uppercase border-b">
                <tr>
                  <th scope="col" className="px-3 py-3">
                    Application ID
                  </th>
                  <th scope="col" className="px-3 py-3">
                    Startup Name
                  </th>
                  <th scope="col" className="px-3 py-3">
                    Submission date
                  </th>
                  <th scope="col" className="px-3 py-3">
                    Status
                  </th>
                  <th scope="col" className="px-3 py-3">
                    actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {applications.map((appl, index) => (
                  <tr className="bg-white border-b" key={index}>
                    <td className="px-3 py-4">{appl.id}</td>
                    <td className="px-3 py-4">{appl.startup_name}</td>
                    <td className="px-3 py-4">{appl.sub_date}</td>
                    <td className="px-3 py-4">
                      <Link
                        to="#"
                        className={
                          appl.status === "approved"
                            ? "greenSign"
                            : appl.status === "pending"
                            ? "yellowSign"
                            : "redSign"
                        }
                      >
                        {appl.status}
                      </Link>
                    </td>
                    <td className="px-3 py-4 flex gap-x-3 text-violet-500 underline">
                      <Link to="#">Edit</Link>
                      <Link to="#">view</Link>
                      <Link to="#">withdraw</Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="grid grid-cols-2 grid-rows-5 gap-8 h-[30rem] mt-8">
          {/* details*/}
          <div className="dashboard-box col-span-1 row-span-5">
            <h1 className="text-2xl">DETAILS</h1>
            {/* details collapse */}
            <div className="w-full overflow-y-scroll scrollbar">
              <div className="flex justify-start items-center gap-x-5 text-lg uppercase border-b border-gray-200">
                <span className="capitalize font-semibold">
                  application ID :{" "}
                </span>
                {applications[0].id}
                <span className="capitalize font-semibold">
                  startup name :{" "}
                </span>
                {applications[0].startup_name}
              </div>
              <div className="">
                {formData.map((form, index) => (
                  <Collapse
                    key={index}
                    collapseText={form.data[0].heading}
                    className="mt-3"
                    document={form.document}
                  >
                    {form.data.map((field, index) => (
                      <div
                        key={index}
                        className={`flex justify-between items-center border-b border-violet-200 px-4 py-2`}
                      >
                        <span className="font-medium">{field.label}</span>
                        <span className="normal-case">{field.value}</span>
                      </div>
                    ))}
                  </Collapse>
                ))}
              </div>
            </div>
          </div>
          {/* application progress overview */}
          <div className="dashboard-box w-full row-span-2">
            <h1 className="text-2xl">progress overview</h1>
            <ProgressTracker steps={steps} />
            <Link to="../status" className="gridBoxLink self-end">
              see details
            </Link>
          </div>
          {/* documents upload status */}
          <div className="dashboard-box w-full row-span-3">
            <h1 className="text-2xl">document status</h1>
            <div className="w-full">
              <div className="py-2 flex justify-between items-center border-b border-gray-200">
                <p>
                  <span className="font-medium">Business details file</span>{" "}
                  missing
                </p>
                <label
                  htmlFor="document"
                  className="bg-gray-200 hover:bg-gray-200/70 cursor-pointer rounded border border-black px-1 py-[0.15rem]"
                >
                  Upload
                </label>
                <input id="document" type="file" className="hidden" />
              </div>
            </div>
          </div>
        </div>
        {/* messages and reviews */}
        <div className="dashboard-box mt-8">
          <h1 className="text-2xl">Messages and reviews</h1>
          <ul className="flex w-full h-auto flex-col overflow-y-auto">
            {notifications.map((msg, index) => (
              <li key={index}>
                <Link
                  className="flex flex-col gap-2.5 border-t border-stroke px-4 py-3 hover:bg-gray-100"
                  to="#"
                >
                  <p className="text-lg capitalize">{msg.text}</p>

                  <p className="text-xs">{msg.date}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UserApplicationList;
