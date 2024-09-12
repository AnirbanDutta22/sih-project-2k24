import React from "react";
import { Link } from "react-router-dom";

const applications = [
  // Pending Applications
  {
    id: "12345",
    startupName: "Startup A",
    submissionDate: "2024-09-02",
    reviewDate: "-",
    sector: "Ayurveda",
    summary: "Application for new product development in Ayurveda.",
    comments: "-",
    status: "Pending",
  },
  {
    id: "12346",
    startupName: "Startup B",
    submissionDate: "2024-09-02",
    reviewDate: "-",
    sector: "Yoga",
    summary: "Application for yoga training center establishment.",
    comments: "-",
    status: "Pending",
  },
  {
    id: "12347",
    startupName: "Startup C",
    submissionDate: "2024-09-02",
    reviewDate: "-",
    sector: "Naturopathy",
    summary: "Application for naturopathy wellness clinic.",
    comments: "-",
    status: "Pending",
  },
  {
    id: "12345",
    startupName: "Startup A",
    submissionDate: "2024-09-02",
    reviewDate: "2024-09-05",
    sector: "Ayurveda",
    summary: "Application for new product development in Ayurveda.",
    comments: "",
    status: "Pending",
  },
  {
    id: "54321",
    startupName: "Startup D",
    submissionDate: "2024-09-02",
    reviewDate: "2024-09-05",
    sector: "Unani",
    status: "Approved",
    summary: "Application for naturopathy wellness clinic.",
    comments: "Approved with minor suggestions for improvement.",
  },
  {
    id: "54322",
    startupName: "Startup E",
    submissionDate: "2024-09-02",
    reviewDate: "2024-09-05",
    sector: "Siddha",
    status: "Approved",
    summary: "Application for naturopathy wellness clinic.",
    comments: "Approved with minor suggestions for improvement.",
  },
  {
    id: "54323",
    startupName: "Startup F",
    submissionDate: "2024-09-02",
    reviewDate: "2024-09-05",
    sector: "Homoeopathy",
    status: "Approved",
    summary: "Application for naturopathy wellness clinic.",
    comments: "Approved. Meets all regulatory standards.",
  },
  {
    id: "54322",
    startupName: "Startup E",
    submissionDate: "2024-09-02",
    reviewDate: "2024-09-05",
    sector: "Siddha",
    status: "Approved",
    summary: "Application for naturopathy wellness clinic.",
    comments: "Approved with minor suggestions for improvement.",
  },
  {
    id: "12346",
    startupName: "Startup B",
    submissionDate: "2024-09-02",
    reviewDate: "-",
    sector: "Yoga",
    summary: "Application for yoga training center establishment.",
    comments: "",
    status: "Pending",
  },
  {
    id: "12347",
    startupName: "Startup C",
    submissionDate: "2024-09-02",
    reviewDate: "-",
    sector: "Naturopathy",
    summary: "Application for naturopathy wellness clinic.",
    comments: "",
    status: "Pending",
  },
  // Approved Applications
  {
    id: "54321",
    startupName: "Startup D",
    submissionDate: "2024-09-02",
    reviewDate: "2024-09-05",
    sector: "Unani",
    status: "Approved",
    summary: "Application for naturopathy wellness clinic.",
    comments: "Approved with minor suggestions for improvement.",
  },
  {
    id: "54322",
    startupName: "Startup E",
    submissionDate: "2024-09-02",
    reviewDate: "2024-09-05",
    sector: "Siddha",
    status: "Approved",
    summary: "Application for naturopathy wellness clinic.",
    comments: "Approved with minor suggestions for improvement.",
  },
  {
    id: "54321",
    startupName: "Startup D",
    submissionDate: "2024-09-02",
    reviewDate: "2024-09-05",
    sector: "Unani",
    status: "Approved",
    summary: "Application for naturopathy wellness clinic.",
    comments: "Approved with minor suggestions for improvement.",
  },
];

const StartupApplicationList = () => {
  return (
    <div>
      <h1 className="welcomeText">application list</h1>
      <div className={`gridBox mt-6 h-[80vh]`}>
        <div className="w-full flex items-center">
          <h1 className="text-2xl flex-1">All</h1>
          <div className="hidden sm:block">
            <form action="https://formbold.com/s/unique_form_id" method="POST">
              <div className="relative">
                <button className="absolute left-0 top-1/2 -translate-y-1/2">
                  <svg
                    className="fill-body fill-gray-500"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M9.16666 3.33332C5.945 3.33332 3.33332 5.945 3.33332 9.16666C3.33332 12.3883 5.945 15 9.16666 15C12.3883 15 15 12.3883 15 9.16666C15 5.945 12.3883 3.33332 9.16666 3.33332ZM1.66666 9.16666C1.66666 5.02452 5.02452 1.66666 9.16666 1.66666C13.3088 1.66666 16.6667 5.02452 16.6667 9.16666C16.6667 13.3088 13.3088 16.6667 9.16666 16.6667C5.02452 16.6667 1.66666 13.3088 1.66666 9.16666Z"
                      fill=""
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M13.2857 13.2857C13.6112 12.9603 14.1388 12.9603 14.4642 13.2857L18.0892 16.9107C18.4147 17.2362 18.4147 17.7638 18.0892 18.0892C17.7638 18.4147 17.2362 18.4147 16.9107 18.0892L13.2857 14.4642C12.9603 14.1388 12.9603 13.6112 13.2857 13.2857Z"
                      fill=""
                    />
                  </svg>
                </button>

                <input
                  type="text"
                  placeholder="Type to search..."
                  className="w-full bg-transparent pl-9 pr-4 text-black focus:outline-none"
                />
              </div>
            </form>
          </div>
          <button className="btn-primary">filter & sort</button>
        </div>
        {/* table */}
        <div className="w-full relative overflow-x-auto overflow-y-auto flex-1 scrollbar">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500">
            <thead className="text-sm text-gray-500 uppercase border-b whitespace-nowrap">
              <tr>
                <th scope="col" className="px-3 py-3">
                  Application ID
                </th>
                <th scope="col" className="px-3 py-3">
                  Startup name
                </th>
                <th scope="col" className="px-3 py-3">
                  Description
                </th>
                <th scope="col" className="px-3 py-3">
                  Sector
                </th>
                <th scope="col" className="px-3 py-3">
                  Submission date
                </th>
                <th scope="col" className="px-3 py-3">
                  Status
                </th>
                <th scope="col" className="px-3 py-3">
                  Review date
                </th>
                <th scope="col" className="px-3 py-3">
                  Comments
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
                  <td className="px-3 py-4">{appl.startupName}</td>
                  <td className="px-3 py-4 capitalize">{appl.summary}</td>
                  <td className="px-3 py-4">{appl.sector}</td>
                  <td className="px-3 py-4">{appl.submissionDate}</td>
                  <td className={`px-2 py-2`}>
                    <span
                      className={`${
                        appl.status === "Approved"
                          ? "greenSign"
                          : appl.status === "Pending"
                          ? "yellowSign"
                          : "redSign"
                      }`}
                    >
                      {appl.status}
                    </span>
                  </td>
                  <td className="px-3 py-4">{appl.reviewDate}</td>
                  <td className="px-3 py-4 capitalize">{appl.comments}</td>
                  <td className="px-3 py-4">
                    <Link to="#" className="text-violet-500 underline">
                      view
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default StartupApplicationList;
