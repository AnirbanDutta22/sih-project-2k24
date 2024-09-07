/* eslint-disable react/prop-types */
// import React from "react";
import { useTranslation } from "react-i18next";

const formHeading = `text-left text-3xl font-semibold`;
const formSubHeading = `text-left text-base font-normal mb-10`;
const mandatory = `text-red-600 text-lg ml-1`;

const StepForm = ({ stepno }) => {
  const { t } = useTranslation("formTranslation");

  const step1 = [
    {
      heading: t("Basic Startup Information"),
      label: t("Startup Name"),
      type: "text",
      id: "startupName",
      placeholder: t("Enter your startup's name"),
    },
    {
      label: t("Date of Establishment"),
      type: "date",
      id: "dateOfEstablishment",
      placeholder: "",
    },
    {
      label: t("Startup Category"),
      type: "select",
      id: "startupCategory",
      values: ["Ayurveda", "Yoga", "Unani", "Sidha", "Homeopathy"],
      placeholder: t("Select your startup category"),
    },
    {
      label: t("Startup Description"),
      type: "textarea",
      id: "startupDescription",
      placeholder: t("Briefly describe your startup"),
    },
    {
      label: t("Sector/Field of Work"),
      type: "text",
      id: "sectorField",
      placeholder: t("Enter your field within AYUSH"),
    },
  ];

  const step2 = [
    {
      heading: t("Founder Details"),
      label: t("Founder/Co-Founder Name"),
      type: "text",
      id: "founderName",
      placeholder: t("Enter founder's full name"),
    },
    {
      label: t("Designation"),
      type: "text",
      id: "designation",
      placeholder: t("Enter designation (e.g., CEO)"),
    },
    {
      label: t("Contact Details"),
      type: "email",
      id: "contactDetails",
      placeholder: t("Enter contact email"),
    },
    {
      label: t("LinkedIn Profile"),
      type: "url",
      id: "linkedInProfile",
      placeholder: t("Enter LinkedIn profile URL"),
    },
  ];

  const step3 = [
    {
      heading: t("Business Registration Details"),
      label: t("Registration Type"),
      type: "select",
      id: "registrationType",
      placeholder: t("Select registration type"),
    },
    {
      label: t("Registration Number"),
      type: "text",
      id: "registrationNumber",
      placeholder: t("Enter registration number"),
    },
    {
      label: t("Registered Address"),
      type: "text",
      id: "registeredAddress",
      placeholder: t("Enter full registered address"),
    },
    {
      label: t("Business PAN"),
      type: "text",
      id: "businessPan",
      placeholder: t("Enter business PAN"),
    },
  ];

  const step4 = [
    {
      heading: t("Document Upload"),
      label: t("Business Registration Certificate"),
      type: "file",
      id: "registrationCertificate",
      placeholder: "",
    },
    {
      label: t("Founder ID Proofs"),
      type: "file",
      id: "founderIdProofs",
      placeholder: "",
    },
    {
      label: t("Startup Pitch Deck/Presentation"),
      type: "file",
      id: "pitchDeck",
      placeholder: "",
    },
    {
      label: t("AYUSH Sector Specific Licenses"),
      type: "file",
      id: "ayushLicenses",
      placeholder: "",
    },
    {
      label: t("Other Supporting Documents"),
      type: "file",
      id: "supportingDocuments",
      placeholder: "",
    },
  ];

  const step5 = [
    {
      heading: t("AYUSH Compliance"),
      label: t("AYUSH Approval Status"),
      type: "select",
      id: "ayushApprovalStatus",
      placeholder: t("Select approval status"),
    },
    {
      label: t("Compliance Certifications"),
      type: "file",
      id: "complianceCertifications",
      placeholder: "",
    },
    {
      label: t("Regulatory Compliance Checklist"),
      type: "checkbox",
      id: "regulatoryChecklist",
      placeholder: "",
    },
  ];

  const step6 = [
    {
      heading: t("Financial Details (Optional)"),
      label: t("Investment Raised"),
      type: "number",
      id: "investmentRaised",
      placeholder: t("Enter amount raised"),
    },
    {
      label: t("Annual Turnover"),
      type: "number",
      id: "annualTurnover",
      placeholder: t("Enter last financial year turnover"),
    },
    {
      label: t("Bank Account Details"),
      type: "text",
      id: "bankDetails",
      placeholder: t("Enter basic bank details"),
    },
  ];

  return (
    <>
      <form className="">
        {stepno === "Step1" && (
          <>
            <h1 className={formHeading}>{step1[0].heading}</h1>
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
    </>
  );
};

export default StepForm;
