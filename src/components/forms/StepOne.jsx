import React from "react";

const StepOne = ({ nextStep, handleFormInput, values }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    nextStep();
  };

  return (
    <form onSubmit={handleSubmit} className="w-50 mx-auto border rounded-2 p-4">
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          type="text"
          className="form-control"
          id="name"
          name="name"
          value={values.name}
          onChange={handleFormInput}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input
          type="email"
          className="form-control"
          id="email"
          name="email"
          value={values.email}
          onChange={handleFormInput}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Continue
      </button>
    </form>
  );
};

export default StepOne;
