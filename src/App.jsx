import React, { useState, useEffect } from "react";
import StepOne from "./components/forms/StepOne";
import StepTwo from "./components/forms/StepTwo";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
  });

  useEffect(() => {
    document.title = "StepForm || Step 1";
  }, []);

  const nextStep = () => {
    setStep((prev) => prev + 1);
  };

  const prevStep = () => {
    setStep((prev) => prev - 1);
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <>
      <ToastContainer position="top-right" autoClose={2000} />
      <h1 className="text-center">MultiStep Form</h1>
      {step === 1 && (
        <StepOne
          nextStep={nextStep}
          handleFormInput={handleInput}
          values={formData}
        />
      )}
      {step === 2 && (
        <StepTwo
          prevStep={prevStep}
          nextStep={nextStep}
          handleFormInput={handleInput}
          values={formData}
        />
      )}
      {step > 2 && (
        <div className="text-center">Form submission Successfully ...!</div>
      )}
    </>
  );
};

export default App;
