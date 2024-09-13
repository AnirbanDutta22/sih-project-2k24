// import React from "react";

import { Link } from "react-router-dom";
import ProgressCircleChart from "../../components/charts/CircleChart";
import Guide from "../../components/Guide";
import useTour from "../../hooks/useTour";
import { Steps } from "intro.js-react";
import "intro.js/introjs.css";
import { useTranslation } from "react-i18next";

const UserDashboard = () => {
  const { t } = useTranslation();
  const [enabled, setEnabled, handleExit] = useTour("dashboardTour");

  const documents = [
    {
      name: "GST File",
      appl_id: "01apl",
      appl_name: "Innovate Health",
      upload: "12/03/2024",
      status: "uploaded",
    },
    {
      name: "Founder ID proof",
      appl_id: "01apl",
      appl_name: "Innovate Health",
      upload: "13/03/2024",
      status: "uploaded",
    },
    {
      name: "Business details File",
      appl_id: "01apl",
      appl_name: "Innovate Health",
      upload: "-",
      status: "missing",
    },
  ];

  const stepsForTour = [
    {
      element: "#currentStatus",
      intro: "Here you can check current status of your latest application",
      position: "right",
      tooltipClass: "customTourTooltip",
    },
    {
      element: "#pendingAction",
      intro: "Here you can check pending actions from your latest application",
      position: "bottom",
      tooltipClass: "customTourTooltip",
    },
    {
      element: "#submissionProgress",
      intro:
        "Here you can check submission progress from your latest application",
      tooltipClass: "customTourTooltip",
    },
    {
      element: "#row0",
      intro: "Here you can check your documents from your latest application",
      tooltipClass: "customTourTooltip",
    },
  ];

  //start video tutorial
  const startVideo = () => {
    console.log("video started");
  };
  //start tour
  const startTour = () => {
    setEnabled(true);
  };
  //start video tutorial
  const openDocs = () => {
    console.log("docs opened");
  };

  return (
    <div className="h-full">
      <h1 className="welcomeText">welcome to user dashboard !</h1>
      <p className="welcomeSubText">
        all systems are running smoothly ! You have{" "}
        <span className="text-violet-500">
          <Link to="notifications">3 unread notifications !</Link>
        </span>
      </p>
      <Guide
        onDocsClick={openDocs}
        onTourClick={startTour}
        onVideoClick={startVideo}
      />
      <div className="grid grid-cols-10 grid-rows-12 gap-8 h-full mt-6 mb-6">
        {/* current status */}
        <div className={`col-span-6 row-span-3 gridBox`}>
          <h1 className="text-2xl">CURRENT STATUS</h1>
          <div className="statusBar" id="currentStatus">
            <span className="text-black">ministry of AYUSH</span>
            <span className="text-black">Date : 12/04/2024</span>
            <span className="yellowSign">under review</span>
          </div>
          <Link to="status" className="gridBoxLink">
            check
          </Link>
        </div>
        {/* progress chart */}
        <div
          className={`col-span-4 row-span-6 gridBox`}
          id="submissionProgress"
        >
          <h1 className="text-2xl">Submission progress</h1>
          <span className="bg-violet-100 text-violet-500 text-sm font-medium me-2 px-2.5 py-0.5 rounded">
            Latest
          </span>
          <ProgressCircleChart percentage={100} className="self-center" />
          <Link to="applications" className={`gridBoxLink self-center`}>
            click here to know more
          </Link>
        </div>
        {/* pending actions */}
        <div className={`col-span-6 row-span-3 gridBox`}>
          <h1 className="text-2xl">pending actions</h1>
          <div className="statusBar" id="pendingAction">
            <span>no pending actions</span>
          </div>
          <Link to="applications" className="gridBoxLink">
            check
          </Link>
        </div>
        {/* documents table */}
        <div className={`col-span-10 row-span-6 gridBox`}>
          <div className="w-full flex justify-between">
            <h1 className="text-2xl">documents</h1>
            <button className="btn-primary">Filter & Sort</button>
          </div>
          {/* table */}
          <div className="w-full relative overflow-x-auto flex-1">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500">
              <thead className="text-sm text-gray-500 uppercase border-b">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Document
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Application ID
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Startup name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Upload date
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
                {documents.map((doc, index) => (
                  <tr
                    className="bg-white border-b"
                    key={index}
                    id={`row` + index}
                  >
                    <th scope="row" className="px-6 py-4 whitespace-nowrap">
                      <Link
                        to="/document.pdf" // Replace with the path to your document
                        target="_blank" // Opens in a new tab
                        rel="noopener noreferrer" // Security best practice
                        className="w-fit block bg-gray-300 hover:bg-gray-400/70 px-6 py-1 text-black font-medium rounded capitalize"
                      >
                        {doc.name}
                      </Link>
                    </th>
                    <td className="px-6 py-4">{doc.appl_id}</td>
                    <td className="px-6 py-4">{doc.appl_name}</td>
                    <td className="px-6 py-4">{doc.upload}</td>
                    <td className="px-6 py-4">
                      <Link
                        to="#"
                        className={`font-medium ${
                          doc.status === "uploaded"
                            ? "bg-green-200 text-green-500"
                            : "bg-gray-200 text-red-500"
                        } px-2 py-1`}
                      >
                        {doc.status}
                      </Link>
                    </td>
                    <td className="px-6 py-4 text-violet-500 underline">
                      {doc.status === "uploaded" ? (
                        <Link to="#">view</Link>
                      ) : (
                        <Link to="#">upload</Link>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {/* Intro.js Steps Component */}
      <Steps
        enabled={enabled}
        steps={stepsForTour}
        initialStep={0}
        onExit={handleExit}
        options={{
          nextLabel: t("Next"),
          prevLabel: t("Back"),
          skipLabel: t("Skip"),
          doneLabel: t("Finish"),
          showBullets: true,
        }}
      />
    </div>
  );
};

export default UserDashboard;
