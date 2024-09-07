/* eslint-disable react/prop-types */
// import React from "react";
// import { Steps, Hints } from "intro.js-react";
import "intro.js/introjs.css";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const step1 = [
  {
    heading: "Basic Startup Information",
    label: "Startup Name",
    type: "text",
    id: "startupName",
    placeholder: "Enter your startup's name",
  },
  {
    label: "Date of Establishment",
    type: "date",
    id: "dateOfEstablishment",
    placeholder: "",
  },
  {
    label: "Startup Category",
    type: "select",
    id: "startupCategory",
    values: ["Ayurveda", "Yoga", "Unani", "Sidha", "Homeopathy"],
    placeholder: "Select your startup category",
  },
  {
    label: "Startup Description",
    type: "textarea",
    id: "startupDescription",
    placeholder: "Briefly describe your startup",
  },
  {
    label: "Sector/Field of Work",
    type: "text",
    id: "sectorField",
    placeholder: "Enter your field within AYUSH",
  },
];

const step2 = [
  {
    heading: "Founder Details",
    label: "Founder/Co-Founder Name",
    type: "text",
    id: "founderName",
    placeholder: "Enter founder's full name",
  },
  {
    label: "Designation",
    type: "text",
    id: "designation",
    placeholder: "Enter designation (e.g., CEO)",
  },
  {
    label: "Contact Details",
    type: "email",
    id: "contactDetails",
    placeholder: "Enter contact email",
  },
  {
    label: "LinkedIn Profile",
    type: "url",
    id: "linkedInProfile",
    placeholder: "Enter LinkedIn profile URL",
  },
];

const step3 = [
  {
    heading: "Business Registration Details",
    label: "Registration Type",
    type: "select",
    id: "registrationType",
    placeholder: "Select registration type",
  },
  {
    label: "Registration Number",
    type: "text",
    id: "registrationNumber",
    placeholder: "Enter registration number",
  },
  {
    label: "Registered Address",
    type: "text",
    id: "registeredAddress",
    placeholder: "Enter full registered address",
  },
  {
    label: "Business PAN",
    type: "text",
    id: "businessPan",
    placeholder: "Enter business PAN",
  },
];

const step4 = [
  {
    heading: "Document Upload",
    label: "Business Registration Certificate",
    type: "file",
    id: "registrationCertificate",
    placeholder: "",
  },
  {
    label: "Founder ID Proofs",
    type: "file",
    id: "founderIdProofs",
    placeholder: "",
  },
  {
    label: "Startup Pitch Deck/Presentation",
    type: "file",
    id: "pitchDeck",
    placeholder: "",
  },
  {
    label: "AYUSH Sector Specific Licenses",
    type: "file",
    id: "ayushLicenses",
    placeholder: "",
  },
  {
    label: "Other Supporting Documents",
    type: "file",
    id: "supportingDocuments",
    placeholder: "",
  },
];

const step5 = [
  {
    heading: "AYUSH Compliance",
    label: "AYUSH Approval Status",
    type: "select",
    id: "ayushApprovalStatus",
    placeholder: "Select approval status",
  },
  {
    label: "Compliance Certifications",
    type: "file",
    id: "complianceCertifications",
    placeholder: "",
  },
  {
    label: "Regulatory Compliance Checklist",
    type: "checkbox",
    id: "regulatoryChecklist",
    placeholder: "",
  },
];

const step6 = [
  {
    heading: "Financial Details (Optional)",
    label: "Investment Raised",
    type: "number",
    id: "investmentRaised",
    placeholder: "Enter amount raised",
  },
  {
    label: "Annual Turnover",
    type: "number",
    id: "annualTurnover",
    placeholder: "Enter last financial year turnover",
  },
  {
    label: "Bank Account Details",
    type: "text",
    id: "bankDetails",
    placeholder: "Enter basic bank details",
  },
];

const formHeading = `text-left text-3xl font-semibold`;
const formSubHeading = `text-left text-base font-normal mb-10`;
const mandatory = `text-red-600 text-lg ml-1`;

const StepForm = ({ stepno }) => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (event, lng) => {
    event.preventDefault();
    i18n.changeLanguage(lng);
  };

  return (
    <form className="">
      {stepno === "Step1" && (
        <>
          <button onClick={(event) => changeLanguage(event, "hi")}>
            Hindi
          </button>
          <h1 className={formHeading}>{t(step1[0].heading)}</h1>
          <p className={formSubHeading}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic eos,
            ullam.
          </p>
          {step1.map((data, index) => (
            <div key={index} className="step1 mb-5">
              <label
                htmlFor={data.id}
                className="block mb-2 text-left text-sm font-medium text-gray-900"
              >
                {t(data.label)}
                <span className={mandatory}>*</span>
              </label>
              {data.type === "select" ? (
                <select
                  id="countries"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                >
                  <option selected>{t(data.placeholder)}</option>
                  {data.values.map((value, i) => (
                    <option key={i} value={value}>
                      {t(value)}
                    </option>
                  ))}
                </select>
              ) : (
                <input
                  type={data.type}
                  id={data.id}
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                  placeholder={t(data.placeholder)}
                />
              )}
            </div>
          ))}
        </>
      )}
      {stepno === "Step2" && (
        <>
          <h1 className={formHeading}>{step2[0].heading}</h1>
          <p className={formSubHeading}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic eos,
            ullam.
          </p>
          {step2.map((data, index) => (
            <div key={index} className="step1 mb-5">
              <label
                htmlFor={data.label}
                className="block mb-2 text-left text-sm font-medium text-gray-900"
              >
                {data.label}
              </label>
              <input
                type={data.type}
                id={data.id}
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder={data.placeholder}
                required
              />
            </div>
          ))}
        </>
      )}
      {stepno === "Step3" && (
        <>
          <h1 className={formHeading}>{step3[0].heading}</h1>
          <p className={formSubHeading}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic eos,
            ullam.
          </p>
          {step3.map((data, index) => (
            <div key={index} className="step1 mb-5">
              <label
                htmlFor={data.label}
                className="block mb-2 text-left text-sm font-medium text-gray-900"
              >
                {data.label}
              </label>
              <input
                type={data.type}
                id={data.id}
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder={data.placeholder}
                required
              />
            </div>
          ))}
        </>
      )}
      {stepno === "Step4" && (
        <>
          <h1 className={formHeading}>{step4[0].heading}</h1>
          <p className={formSubHeading}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic eos,
            ullam.
          </p>
          {step4.map((data, index) => (
            <div key={index} className="step1 mb-5">
              <label
                htmlFor={data.label}
                className="block mb-2 text-left text-sm font-medium text-gray-900"
              >
                {data.label}
              </label>
              <input
                type={data.type}
                id={data.id}
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder={data.placeholder}
                required
              />
            </div>
          ))}
        </>
      )}
      {stepno === "Step5" && (
        <>
          <h1 className={formHeading}>{step5[0].heading}</h1>
          <p className={formSubHeading}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic eos,
            ullam.
          </p>
          {step5.map((data, index) => (
            <div key={index} className="step1 mb-5">
              <label
                htmlFor={data.label}
                className="block mb-2 text-left text-sm font-medium text-gray-900"
              >
                {data.label}
              </label>
              <input
                type={data.type}
                id={data.id}
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder={data.placeholder}
                required
              />
            </div>
          ))}
        </>
      )}
      {stepno === "Step6" && (
        <>
          <h1 className={formHeading}>{step6[0].heading}</h1>
          <p className={formSubHeading}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic eos,
            ullam.
          </p>
          {step6.map((data, index) => (
            <div key={index} className="step1 mb-5">
              <label
                htmlFor={data.label}
                className="block mb-2 text-left text-sm font-medium text-gray-900"
              >
                {data.label}
              </label>
              <input
                type={data.type}
                id={data.id}
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder={data.placeholder}
                required
              />
            </div>
          ))}
        </>
      )}
    </form>
  );
};

export default StepForm;
