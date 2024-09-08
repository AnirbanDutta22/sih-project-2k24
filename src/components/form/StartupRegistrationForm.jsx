// import React from "react";
import FormWizard from "react-form-wizard-component";
import "react-form-wizard-component/dist/style.css";
import { useState } from "react";
import { Steps } from "intro.js-react";
import "intro.js/introjs.css";
import { useTranslation } from "react-i18next";

import StepForm from "./StepForm";
import "./FormWizard.css";

const steps = [
  { stepno: "Step1", heading: "Basic Startup Information" },
  { stepno: "Step2", heading: "Founder Details" },
  { stepno: "Step3", heading: "Business Registration Details" },
  { stepno: "Step4", heading: "Document Upload" },
  { stepno: "Step5", heading: "AYUSH Compliance" },
  { stepno: "Step6", heading: "Financial Details (Optional)" },
];

const formButton = `h-9 text-sm text-white capitalize font-semibold px-12 py-1.5 bg-violet-500/70 hover:bg-violet-500 rounded-[0.250rem]`;

const StartupRegistrationForm = () => {
  const { t } = useTranslation("steps");

  const stepsForTour = [
    {
      element: ".wizard-navigation ul span.active",
      intro: t("This is the Step Marker !"),
      position: "top",
    },
    {
      element: ".step1",
      intro: t("Fill all the input fields !"),
    },
    {
      element: ".base-button",
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

  const [formValues, setFormValues] = useState({
    step1: {
      startupName: "",
      dateOfEstablishment: null,
      startupCategory: "",
      startupDescription: "",
      sectorField: "",
    },
    step2: {
      founderName: "",
    },
    step3: {
      s: "",
    },
    step4: {
      f: "",
    },
    step5: {
      s: "",
    },
    step6: {
      f: "",
    },
  });

  // Generic handleChange for nested form state
  const handleChange = (step, field) => (event) => {
    const { value } = event.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [step]: {
        ...prevValues[step],
        [field]: value,
      },
    }));
  };

  // Handle form submission
  const handleSubmit = () => {
    // Validation logic here
    const errors = validateForm(formValues);
    if (Object.keys(errors).length === 0) {
      console.log("Form submitted successfully:", formValues);
    } else {
      console.log("Form errors:", errors);
    }
  };

  // Basic validation function
  const validateForm = (values) => {
    const errors = {};
    // Example validation rules
    if (!values.step1.startupName)
      errors.startupName = "Startup Name is required";
    return errors;
  };

  return (
    <div>
      <button
        onClick={startTour}
        className="px-3 py-2 bg-violet-400 rounded-md"
      >
        {t("Need Guide")}
      </button>
      {/* multi-step form */}
      <div className="w-[70vw] mx-auto max-h-[80vh] p-7 bg-violet-200 rounded-lg">
        <FormWizard
          startIndex={0}
          layout="vertical"
          backButtonTemplate={(handlePrevious) => (
            <button
              className={`back-button mr-5 ${formButton}`}
              onClick={handlePrevious}
            >
              back
            </button>
          )}
          nextButtonTemplate={() => (
            <button
              className={`base-button ${formButton}`}
              type="submit"
              onClick={handleSubmit}
            >
              next
            </button>
          )}
          finishButtonTemplate={(handleComplete) => (
            <button
              className={`finish-button ${formButton} !bg-violet-500`}
              onClick={handleComplete}
            >
              finish
            </button>
          )}
        >
          {steps.map((stepno, i) => (
            <FormWizard.TabContent
              id={`#${stepno.stepno.toLowerCase()}`}
              title={t(stepno.stepno)}
              icon={i + 1}
              key={i}
            >
              <StepForm
                stepno={stepno.stepno}
                onChange={handleChange}
                values={formValues}
              />
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

export default StartupRegistrationForm;
