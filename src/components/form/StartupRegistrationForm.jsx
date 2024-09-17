/* eslint-disable react/prop-types */
// import React from "react";
import FormWizard from "react-form-wizard-component";
import "react-form-wizard-component/dist/style.css";
import { useState } from "react";
import { Steps } from "intro.js-react";
import "intro.js/introjs.css";
import { useTranslation } from "react-i18next";

import StepForm from "./StepForm";
import "./FormWizard.css";
import useTour from "../../hooks/useTour";

const steps = [
  { stepno: "Step1", heading: "Basic Startup Information" },
  { stepno: "Step2", heading: "Founder Details" },
  { stepno: "Step3", heading: "Business Registration Details" },
  { stepno: "Step4", heading: "Document Upload" },
  { stepno: "Step5", heading: "AYUSH Compliance" },
  { stepno: "Step6", heading: "Financial Details (Optional)" },
];

const formButton = `h-9 text-sm text-white capitalize font-semibold px-12 py-1.5 bg-violet-500/70 hover:bg-violet-500 rounded-[0.250rem]`;

const StartupRegistrationForm = ({ onModalClose }) => {
  const { t } = useTranslation("steps");
  const [enabled, setEnabled, handleExit] = useTour("formTour");

  const [currentStep, setCurrentStep] = useState(1);
  const [errors, setErrors] = useState({});

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
      designation: "",
      contactDetails: "",
      linkedInProfile: "",
    },
    step3: {
      registrationType: "",
      registrationNumber: "",
      registeredAddress: "",
      businessPan: "",
    },
    step4: {
      registrationCertificate: "",
      founderIdProofs: "",
      pitchDeck: "",
      ayushLicenses: "",
      supportingDocuments: "",
    },
    step5: {
      ayushApprovalStatus: "",
      complianceCertifications: "",
      regulatoryChecklist: "",
    },
    step6: {
      investmentRaised: "",
      annualTurnover: "",
      bankDetails: "",
    },
  });

  const stepsForTour = [
    {
      element: ".wizard-navigation ul span.active",
      intro: t("This is the Step Marker !"),
      position: "top",
      tooltipClass: "customTourTooltip",
    },
    {
      element: ".step1",
      intro: t("Fill all the input fields !"),
      tooltipClass: "customTourTooltip",
    },
    {
      element: ".base-button",
      intro: t("Then click on the next button !"),
      position: "top",
      tooltipClass: "customTourTooltip",
    },
  ];

  const startTour = () => {
    setEnabled(true);
  };

  // Generic handleChange for nested form state
  const handleChange = (step, field, event) => {
    const { value } = event.target;
    console.log(value);
    console.log(step);
    console.log(field);
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
    console.log(formValues);
    console.log(Object.keys(formValues.step1).length);
    // Validation logic here
    const errors = validateForm(formValues);
    if (Object.keys(errors).length) {
      console.log("Form errors:", errors);
      return false;
    } else {
      console.log("Form submitted successfully:", formValues);
      // setCurrentStep((prev) => prev + 1);
      return true;
    }
  };

  // Basic validation function
  const validateForm = (values) => {
    const currentStepValues = values[`step${currentStep}`];
    const errors = {};
    // Example validation rules
    Object.keys(currentStepValues).forEach((key) => {
      if (!currentStepValues[key]) {
        errors[key] = `${key} is required`;
      }
    });

    setErrors(errors);
    return errors;
  };

  return (
    <div>
      {/* multi-step form */}
      <div className="w-[70vw] mx-auto h-[90vh] p-7 bg-violet-200 rounded-lg">
        <FormWizard
          startIndex={0}
          layout="vertical"
          backButtonTemplate={(handlePrevious) => (
            <button
              className={`back-button mr-5 ${formButton} px-4`}
              onClick={() => {
                handlePrevious();
                setCurrentStep((prev) => prev - 1);
              }}
            >
              {t("back")}
            </button>
          )}
          nextButtonTemplate={(handleNext) => (
            <button
              className={`base-button ${formButton} px-4`}
              type="submit"
              onClick={() => {
                if (handleSubmit()) handleNext();
              }}
            >
              {t("save & next")}
            </button>
          )}
          finishButtonTemplate={(handleComplete) => (
            <button
              className={`finish-button ${formButton} !bg-violet-500`}
              onClick={handleComplete}
            >
              {t("finish")}
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
                formValues={formValues}
                onTourClick={startTour}
                onClose={onModalClose}
                errors={errors}
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

export default StartupRegistrationForm;
