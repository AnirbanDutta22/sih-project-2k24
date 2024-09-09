// import React from "react";
import { Link } from "react-router-dom";

const UserApplicationList = () => {
  const applications = [
    {
      id: "01apl",
      startup_name: "Yoga King",
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

  return (
    <div className="h-full">
      <div className="flex justify-between items-center">
        <h1 className="welcomeText">my applications</h1>
        <Link to="new-application" className="btn-primary">
          start new application
        </Link>
      </div>
      <div className="grid grid-cols-3 gap-8 mt-6">
        <div className="gridBox col-span-2 h-fit">
          <h1 className="text-2xl">APPLICATION LIST</h1>
          <div className="w-full relative overflow-x-auto flex-1">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500">
              <thead className="text-sm text-gray-500 uppercase border-b">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Application ID
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Startup Name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Submission date
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Status
                  </th>
                  <th scope="col" className="px-6 py-3">
                    actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {applications.map((appl, index) => (
                  <tr className="bg-white border-b" key={index}>
                    <td className="px-6 py-4">{appl.id}</td>
                    <td className="px-6 py-4">{appl.startup_name}</td>
                    <td className="px-6 py-4">{appl.sub_date}</td>
                    <td className="px-6 py-4">
                      <Link
                        to="#"
                        className={`font-medium ${
                          appl.status === "approved"
                            ? "bg-green-200 text-green-500"
                            : appl.status === "pending"
                            ? "bg-yellow-100 text-yellow-500"
                            : "bg-gray-200 text-red-500"
                        } px-2 py-1`}
                      >
                        {appl.status}
                      </Link>
                    </td>
                    <td className="px-6 py-4 flex gap-x-3 text-violet-500 underline">
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
        <div className="gridBox col-span-1">
          <h1 className="text-2xl">NOTIFICATIONS</h1>
          <ul className="flex h-auto flex-col overflow-y-auto">
            {notifications.map((msg, index) => (
              <li key={index}>
                <Link
                  className="flex flex-col gap-2.5 border-t border-stroke px-4 py-3 hover:bg-gray-100"
                  to="#"
                >
                  <p className="text-md capitalize">{msg.text}</p>

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
