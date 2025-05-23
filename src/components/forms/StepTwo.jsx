import React, { useEffect } from "react";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";

const StepTwo = ({ prevStep, nextStep, handleFormInput, values }) => {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();

  const onsubmit = (e) => {
    console.log("Form Data:", values);
    toast.success("Form submitted successfully!");
  };

  useEffect(() => {
    document.title = "StepForm || Step 2";
  }, []);

  function isStrongPassword(value) {
    return /[A-Z]/.test(value) || "Must contain at least one uppercase letter";
  }

  return (
    <>
      <h1 className="text-center">Step No 2</h1>

      <form
        onSubmit={handleSubmit(onsubmit)}
        className="w-50 mx-auto border rounded-2 p-4"
      >
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            {...register("password", {
              required: { value: true, message: "This is required Field" },
              validate: isStrongPassword,
              minLength: { value: 5, message: "Min length is 5" },
              maxLength: { value: 20, message: "Max length is 20" },
            })}
            type="password"
            className="form-control"
            id="password"
            name="password"
            value={values.password}
            onChange={handleFormInput}
          />

          <br />
          {errors?.password && (
            <span className="text-danger">{errors?.password?.message}</span>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="phone" className="form-label">
            Phone No
          </label>
          <input
            {...register("phone", {
              required: { value: true, message: "This is required Field" },
            })}
            type="phone"
            className="form-control"
            id="phone"
            name="phone"
            value={values.phone}
            onChange={handleFormInput}
          />
          <br />
          {errors?.phone && (
            <span className="text-danger">{errors?.phone?.message}</span>
          )}
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
