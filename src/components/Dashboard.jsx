// import React from "react";
import FormWizard from "react-form-wizard-component";
import "react-form-wizard-component/dist/style.css";

import StepForm from "./form/StepForm";

const steps = [
  { stepno: "Step1", heading: "Basic Startup Information" },
  { stepno: "Step2", heading: "Founder Details" },
  { stepno: "Step3", heading: "Business Registration Details" },
  { stepno: "Step4", heading: "Document Upload" },
  { stepno: "Step5", heading: "AYUSH Compliance" },
  { stepno: "Step6", heading: "Financial Details (Optional)" },
  { stepno: "Step7", heading: "Declaration and Submission" },
];
const Dashboard = () => {
  const handleComplete = () => {
    console.log("Form completed!");
    // Handle form completion logic here
  };
  const tabChanged = (prevIndex, nextIndex) => {
    console.log("prevIndex", prevIndex);
    console.log("nextIndex", nextIndex);
  };
  return (
    <div>
      Dashboard
      <FormWizard
        onComplete={handleComplete}
        onTabChange={tabChanged}
        layout="vertical"
      >
        {steps.map((stepno, i) => (
          <FormWizard.TabContent title={stepno.heading} icon="ti-user" key={i}>
            <StepForm stepno={stepno.stepno} />
          </FormWizard.TabContent>
        ))}
      </FormWizard>
      {/* add style */}
      <style>{`
        @import url("https://cdn.jsdelivr.net/gh/lykmapipo/themify-icons@0.1.2/css/themify-icons.css");
      `}</style>
    </div>
  );
};

export default Dashboard;
