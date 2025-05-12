import React, { useEffect } from "react";

const StepTwo = ({ prevStep, nextStep, handleFormInput, values }) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form Data:", values);

    nextStep();
  };

  useEffect(() => {
    document.title = "StepForm || Step 2";
  }, []);

  return (
    <>
      <h1 className="text-center">Step No 2</h1>

      <form
        onSubmit={handleSubmit}
        className="w-50 mx-auto border rounded-2 p-4"
      >
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            required
            type="password"
            className="form-control"
            id="password"
            name="password"
            value={values.password}
            onChange={handleFormInput}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="phone" className="form-label">
            Phone No
          </label>
          <input
            required
            type="phone"
            className="form-control"
            id="phone"
            name="phone"
            value={values.phone}
            onChange={handleFormInput}
          />
        </div>
        <div className="d-flex justify-content-between">
          <button
            type="button"
            className="btn btn-secondary"
            onClick={prevStep}
          >
            Previous
          </button>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default StepTwo;
