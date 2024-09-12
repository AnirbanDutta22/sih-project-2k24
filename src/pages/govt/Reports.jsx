import React from "react";
import { FaChartLine } from "react-icons/fa";
import { GrCompliance, GrDocumentPerformance } from "react-icons/gr";
import { HiOutlineDocumentCheck } from "react-icons/hi2";
import ReportCard from "../../components/govt/ReportCard";
import {
  SectorGrowthPatternChart,
  SectorPerformanceChart,
} from "../../components/charts/GovtChart";

const analytics = [
  {
    id: "totalApplications",
    category: "Application Metrics",
    metricName: "Total Applications",
    description: "The total count of all applications submitted on the portal.",
    dataType: "number",
    unit: "50",
    icon: "document-check",
  },
  {
    id: "approvalRates",
    category: "Application Metrics",
    metricName: "Approval Rates",
    description:
      "Percentage of applications that have been approved out of the total submitted.",
    dataType: "percentage",
    unit: "35%",
    icon: "approval",
  },
  {
    id: "processingTimes",
    category: "Application Metrics",
    metricName: "Processing Times",
    description:
      "Average time taken to process an application from submission to approval or rejection.",
    dataType: "time",
    unit: "10 days",
    icon: "time-clock",
  },

  // Compliance Metrics
  {
    id: "compliancePercentage",
    category: "Compliance Metrics",
    metricName: "Compliance Meet",
    description:
      "The percentage of startups that meet the compliance requirements set by AYUSH regulations.",
    dataType: "percentage",
    unit: "25%",
    icon: "compliance-check",
  },
  // Sector Insights
  {
    id: "sectorPerformance",
    category: "Sector Insights",
    metricName: "Performance",
    description:
      "Detailed performance metrics categorized by AYUSH sectors like Ayurveda, Yoga, Naturopathy, etc.",
    dataType: "metrics",
    unit: <SectorPerformanceChart />,
    icon: "performance-chart",
  },
  {
    id: "sectorGrowthPatterns",
    category: "Sector Insights",
    metricName: "Growth Patterns",
    description:
      "Analysis of growth patterns in each AYUSH sector over time, highlighting key drivers of growth.",
    dataType: "growth",
    unit: <SectorGrowthPatternChart />,
    icon: "growth-graph",
  },
];

const analytics_category = [
  {
    id: "sector",
    name: "sector",
    options: ["ayurveda", "yoga", "unnai", "siddha", "homeopathy"],
  },
  {
    id: "status",
    name: "status",
    options: ["approved", "rejected", "pending", "fake"],
  },
  {
    id: "region",
    name: "region",
    options: [
      "delhi",
      "tamilnadu",
      "telengana",
      "kerala",
      "uttrakhand",
      "himachal",
      "west bengal",
    ],
  },
];

const report_category = [
  {
    icon: <HiOutlineDocumentCheck />,
    title: "Application Status Report",
    count: 10,
  },
  {
    icon: <GrCompliance />,
    title: "Compliance Adherence Report",
    count: 5,
  },

  {
    icon: <GrDocumentPerformance />,
    title: "Sector Performance Report",
    count: 9,
  },
  {
    icon: <FaChartLine />,
    title: "Custom report",
    count: 0,
  },
];

const reports = [
  {
    id: "01apl",
    name: "innovate health",
    startup_type: "ayurveda",
    report_type: "application status report",
    date: "12/04/2024",
  },
  {
    id: "01apl",
    name: "innovate health",
    startup_type: "ayurveda",
    report_type: "application status report",
    date: "12/04/2024",
  },
  {
    id: "01apl",
    name: "innovate health",
    startup_type: "ayurveda",
    report_type: "application status report",
    date: "12/04/2024",
  },
  {
    id: "01apl",
    name: "innovate health",
    startup_type: "ayurveda",
    report_type: "application status report",
    date: "12/04/2024",
  },
  {
    id: "01apl",
    name: "innovate health",
    startup_type: "ayurveda",
    report_type: "application status report",
    date: "12/04/2024",
  },
  {
    id: "01apl",
    name: "innovate health",
    startup_type: "ayurveda",
    report_type: "application status report",
    date: "12/04/2024",
  },
  {
    id: "01apl",
    name: "innovate health",
    startup_type: "ayurveda",
    report_type: "application status report",
    date: "12/04/2024",
  },
];

const Reports = () => {
  return (
    <div>
      {/* analytics section */}
      <h1 className="welcomeText">analytics</h1>
      <div className="mt-4">
        <form className="flex justify-start items-center gap-x-6">
          {analytics_category.map((cat, index) => (
            <div key={index}>
              <label
                htmlFor={cat.id}
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Select {cat.name}
              </label>
              <select
                id={cat.id}
                className="px-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:violet-blue-500 focus:border-violet-500 block w-full p-2.5"
              >
                <option selected>Choose a {cat.name}</option>
                {cat.options.map((opt, index) => (
                  <option key={index} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>
          ))}
        </form>
        <div className="grid grid-cols-4 gap-6 mt-4">
          {analytics.map((analy, index) => (
            <div className="gridBox" key={index}>
              <h1 className="text-lg font-semibold">{analy.metricName}</h1>
              <span className="text-3xl">{analy.unit}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-4 gap-8 mt-6"></div>
      {/* reports section */}
      <h1 className="welcomeText">reports</h1>
      <div className="grid grid-cols-4 gap-8 mt-6">
        {report_category.map((cat, index) => (
          <div className="gridBox" key={index}>
            <div className="w-full flex justify-between items-center bg-green-200 px-4 py-3">
              <span className="text-[4.5rem]">{cat.icon}</span>
              <span className="text-2xl">{cat.count}</span>
            </div>
            <div className="w-full text-sm font-semibold flex justify-between items-center">
              {cat.title}
              <button className="btn-primary px-3">create</button>
            </div>
          </div>
        ))}
        <div className="py-6 col-span-4">
          {/* header */}
          <div className="flex flex-row justify-between items-center bg-white shadow-md px-6 py-3">
            <h1 className="text-3xl flex-1">ALL REPORTS</h1>
            <div className="hidden sm:block">
              <form
                action="https://formbold.com/s/unique_form_id"
                method="POST"
              >
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
          {/* reports list */}
          <div className="grid grid-cols-4 gap-6 mt-6">
            {reports.map((report, index) => (
              <ReportCard
                key={index}
                startup_type={report.startup_type}
                report_type={report.report_type}
                id={report.id}
                name={report.name}
                date={report.date}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reports;
