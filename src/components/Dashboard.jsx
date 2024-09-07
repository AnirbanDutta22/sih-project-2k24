// import React from "react";
import FormWizard from "react-form-wizard-component";
import "react-form-wizard-component/dist/style.css";
import { useEffect, useState } from "react";
import { Steps } from "intro.js-react";
import "intro.js/introjs.css";
import { useTranslation } from "react-i18next";

import StepForm from "./form/StepForm";
import "./FormWizard.css";

const steps = [
  { stepno: "Step1", heading: "Basic Startup Information" },
  { stepno: "Step2", heading: "Founder Details" },
  { stepno: "Step3", heading: "Business Registration Details" },
  { stepno: "Step4", heading: "Document Upload" },
  { stepno: "Step5", heading: "AYUSH Compliance" },
  { stepno: "Step6", heading: "Financial Details (Optional)" },
];
const Dashboard = () => {
  const { t, i18n } = useTranslation("steps");

  const changeLanguage = (event, lng) => {
    event.preventDefault();
    i18n.changeLanguage(lng);
  };

  const handleComplete = () => {
    console.log("Form completed!");
  };
  const tabChanged = (prevIndex, nextIndex) => {
    console.log("prevIndex", prevIndex);
    console.log("nextIndex", nextIndex);
  };

  const stepsForTour = [
    {
      element: ".wizard-navigation ul span.active",
      intro: t("This is the Step Marker !"),
    },
    {
      element: ".step1",
      intro: t("Fill all the input fields !"),
    },
    {
      element: ".wizard-card-footer .wizard-btn",
      intro: t("Then click on the next button !"),
    },
  ];

  // Step state and initialization
  const [enabled, setEnabled] = useState(false);

  // const [isFirstLoad, setIsFirstLoad] = useState(true);

  // useEffect(() => {
  //   // Check if it's the first load
  //   if (isFirstLoad) {
  //     setEnabled(true); // Enable the tour on first load
  //     setIsFirstLoad(false); // Set the flag to false after the first load
  //   }
  // }, [isFirstLoad]);

  const startTour = () => {
    setEnabled(true);
  };

  return (
    <div>
      Dashboard
      <button
        onClick={startTour}
        className="px-3 py-2 bg-violet-400 rounded-md"
      >
        {t("Need Guide")}
      </button>
      <button
        onClick={(event) => changeLanguage(event, "hi")}
        className="ml-3 px-3 py-2 bg-violet-400 rounded-md"
      >
        हिन्दी
      </button>
      <button
        onClick={(event) => changeLanguage(event, "bn")}
        className="ml-3 px-3 py-2 bg-violet-400 rounded-md"
      >
        বাংলা
      </button>
      <div className="w-[70vw] mx-auto max-h-[80vh] p-7 bg-violet-100 rounded-lg">
        <FormWizard
          // inlineStep={true}
          startIndex={0}
          onComplete={handleComplete}
          onTabChange={tabChanged}
          layout="vertical"
        >
          {steps.map((stepno, i) => (
            <FormWizard.TabContent
              id={`#${stepno.stepno.toLowerCase()}`}
              title={t(stepno.stepno)}
              icon={i + 1}
              key={i}
            >
              <StepForm stepno={stepno.stepno} />
            </FormWizard.TabContent>
          ))}
        </FormWizard>
      </div>
      {/* add style */}
      <style>
        {`@import url("https://cdn.jsdelivr.net/gh/lykmapipo/themify-icons@0.1.2/css/themify-icons.css");`}
      </style>
      {/* Intro.js Steps Component */}
      <Steps
        enabled={enabled}
        steps={stepsForTour}
        initialStep={0}
        onExit={() => setEnabled(false)}
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

export default Dashboard;
