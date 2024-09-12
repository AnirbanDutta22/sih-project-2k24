import React, { useState } from "react";
import { Link } from "react-router-dom";

const applications = [
  { id: "12345", startupName: "Startup A", submissionDate: "2024-09-02", reviewDate: "-", sector: "Ayurveda", summary: "Application for new product development in Ayurveda.", comments: "-", status: "Pending" },
  { id: "12346", startupName: "Startup B", submissionDate: "2024-09-02", reviewDate: "-", sector: "Yoga", summary: "Application for yoga training center establishment.", comments: "-", status: "Pending" },
  { id: "12347", startupName: "Startup C", submissionDate: "2024-09-02", reviewDate: "-", sector: "Naturopathy", summary: "Application for naturopathy wellness clinic.", comments: "-", status: "Pending" },
  { id: "12345", startupName: "Startup A", submissionDate: "2024-09-02", reviewDate: "2024-09-05", sector: "Ayurveda", summary: "Application for new product development in Ayurveda.", comments: "", status: "Pending" },
  { id: "54321", startupName: "Startup D", submissionDate: "2024-09-02", reviewDate: "2024-09-05", sector: "Unani", status: "Approved", summary: "Application for naturopathy wellness clinic.", comments: "Approved with minor suggestions for improvement." },
  { id: "54322", startupName: "Startup E", submissionDate: "2024-09-02", reviewDate: "2024-09-05", sector: "Siddha", status: "Approved", summary: "Application for naturopathy wellness clinic.", comments: "Approved with minor suggestions for improvement." },
  { id: "54323", startupName: "Startup F", submissionDate: "2024-09-02", reviewDate: "2024-09-05", sector: "Homoeopathy", status: "Approved", summary: "Application for naturopathy wellness clinic.", comments: "Approved. Meets all regulatory standards." },
  { id: "54322", startupName: "Startup E", submissionDate: "2024-09-02", reviewDate: "2024-09-05", sector: "Siddha", status: "Approved", summary: "Application for naturopathy wellness clinic.", comments: "Approved with minor suggestions for improvement." },
  { id: "12346", startupName: "Startup B", submissionDate: "2024-09-02", reviewDate: "-", sector: "Yoga", summary: "Application for yoga training center establishment.", comments: "", status: "Pending" },
  { id: "12347", startupName: "Startup C", submissionDate: "2024-09-02", reviewDate: "-", sector: "Naturopathy", summary: "Application for naturopathy wellness clinic.", comments: "", status: "Pending" },
  { id: "54321", startupName: "Startup D", submissionDate: "2024-09-02", reviewDate: "2024-09-05", sector: "Unani", status: "Approved", summary: "Application for naturopathy wellness clinic.", comments: "Approved with minor suggestions for improvement." },
  { id: "54322", startupName: "Startup E", submissionDate: "2024-09-02", reviewDate: "2024-09-05", sector: "Siddha", status: "Approved", summary: "Application for naturopathy wellness clinic.", comments: "Approved with minor suggestions for improvement." },
  { id: "54321", startupName: "Startup D", submissionDate: "2024-09-02", reviewDate: "2024-09-05", sector: "Unani", status: "Approved", summary: "Application for naturopathy wellness clinic.", comments: "Approved with minor suggestions for improvement." },
];

const calculateMetrics = (applications) => {
  const totalApplications = applications.length;
  const pendingApplications = applications.filter(app => app.status === "Pending").length;
  const approvedApplications = applications.filter(app => app.status === "Approved").length;

  const processingTimes = applications
    .filter(app => app.status === "Approved")
    .map(app => {
      const submissionDate = new Date(app.submissionDate);
      const reviewDate = new Date(app.reviewDate);
      return (reviewDate - submissionDate) / (1000 * 60 * 60 * 24); // days
    });

  const averageProcessingTime = processingTimes.length > 0
    ? (processingTimes.reduce((a, b) => a + b, 0) / processingTimes.length).toFixed(2)
    : "N/A";

  return {
    totalApplications,
    pendingApplications,
    approvedApplications,
    averageProcessingTime,
  };
};

const StartupApplicationList = () => {
  const [filter, setFilter] = useState({ status: "", sector: "" });
  const [sort, setSort] = useState("submissionDate");

  const filteredApplications = applications
    .filter((app) => {
      return (
        (filter.status ? app.status === filter.status : true) &&
        (filter.sector ? app.sector === filter.sector : true)
      );
    })
    .sort((a, b) => {
      if (sort === "submissionDate") {
        return new Date(a.submissionDate) - new Date(b.submissionDate);
      } else if (sort === "reviewDate") {
        return new Date(a.reviewDate || "9999-12-31") - new Date(b.reviewDate || "9999-12-31");
      } else {
        return 0;
      }
    });

  const metrics = calculateMetrics(filteredApplications);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Application List</h1>

      <div className="mb-6">
        <div className="flex items-center mb-4">
          <h2 className="text-xl font-semibold flex-1">All Applications</h2>
          <div className="flex items-center gap-4">
            <form action="https://formbold.com/s/unique_form_id" method="POST" className="relative hidden sm:block">
              <button className="absolute left-0 top-1/2 transform -translate-y-1/2">
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
            </form>
            <button className="btn-primary">Filter & Sort</button>
          </div>
        </div>

        <div className="mb-6 flex items-center gap-4">
          <div>
            <label htmlFor="status-filter" className="mr-2">Filter by Status:</label>
            <select
              id="status-filter"
              value={filter.status}
              onChange={(e) => setFilter(prev => ({ ...prev, status: e.target.value }))}
              className="border rounded p-2"
            >
              <option value="">All</option>
              <option value="Pending">Pending</option>
              <option value="Approved">Approved</option>
            </select>
          </div>
          <div>
            <label htmlFor="sector-filter" className="mr-2">Filter by Sector:</label>
            <select
              id="sector-filter"
              value={filter.sector}
              onChange={(e) => setFilter(prev => ({ ...prev, sector: e.target.value }))}
              className="border rounded p-2"
            >
              <option value="">All</option>
              <option value="Ayurveda">Ayurveda</option>
              <option value="Yoga">Yoga</option>
              <option value="Naturopathy">Naturopathy</option>
              <option value="Unani">Unani</option>
              <option value="Siddha">Siddha</option>
              <option value="Homoeopathy">Homoeopathy</option>
            </select>
          </div>
          <div>
            <label htmlFor="sort" className="mr-2">Sort by:</label>
            <select
              id="sort"
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="border rounded p-2"
            >
              <option value="submissionDate">Submission Date</option>
              <option value="reviewDate">Review Date</option>
            </select>
          </div>
        </div>

        <div className="w-full relative overflow-x-auto flex-1 scrollbar">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500">
            <thead className="text-sm text-gray-500 uppercase border-b whitespace-nowrap">
              <tr>
                <th scope="col" className="px-3 py-3">Application ID</th>
                <th scope="col" className="px-3 py-3">Startup Name</th>
                <th scope="col" className="px-3 py-3">Description</th>
                <th scope="col" className="px-3 py-3">Sector</th>
                <th scope="col" className="px-3 py-3">Submission Date</th>
                <th scope="col" className="px-3 py-3">Status</th>
                <th scope="col" className="px-3 py-3">Review Date</th>
                <th scope="col" className="px-3 py-3">Comments</th>
                <th scope="col" className="px-3 py-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredApplications.map((appl, index) => (
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
                    <Link to="#" className="text-violet-500 underline">View</Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="mt-8 p-4 border rounded-lg bg-gray-50">
        <h2 className="text-xl font-semibold mb-4">Application Metrics</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-4 bg-white rounded shadow">
            <h3 className="text-lg font-semibold">Total Applications</h3>
            <p className="text-2xl font-bold">{metrics.totalApplications}</p>
          </div>
          <div className="p-4 bg-white rounded shadow">
            <h3 className="text-lg font-semibold">Pending Applications</h3>
            <p className="text-2xl font-bold">{metrics.pendingApplications}</p>
          </div>
          <div className="p-4 bg-white rounded shadow">
            <h3 className="text-lg font-semibold">Approved Applications</h3>
            <p className="text-2xl font-bold">{metrics.approvedApplications}</p>
          </div>
          <div className="p-4 bg-white rounded shadow">
            <h3 className="text-lg font-semibold">Average Processing Time</h3>
            <p className="text-2xl font-bold">{metrics.averageProcessingTime} days</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartupApplicationList;
