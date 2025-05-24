import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const StepTwo = ({ prevStep, nextStep, handleFormInput, values }) => {
  const [tooglePassword, setTooglePassword] = useState(false);
  const [toogleconfirmPassword, setToogleconfirmPassword] = useState(false);
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();

  const onsubmit = (e) => {
    console.log("Form Data:", values);
    const existingData = JSON.parse(localStorage.getItem("Form Data")) || [];
    existingData.push(values);
    localStorage.setItem("Form Data", JSON.stringify(existingData));
    toast.success("Form submitted successfully!");
    nextStep();
  };

  useEffect(() => {
    document.title = "StepForm || Step 2";
  }, []);

  function isStrongPassword(value) {
    return /[A-Z]/.test(value) || "Must contain at least one uppercase letter";
  }

  function confirmPassword() {
    const data = values?.password === values?.confirmPassword;
    return data || "password and confirm password must be same";
  }

  return (
    <>
      <h1 className="text-center">Step No 2</h1>

      <form
        onSubmit={handleSubmit(onsubmit)}
        className="w-50 mx-auto border rounded-2 p-4"
      >
        <div className="mb-3 position-relative">
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
            type={tooglePassword ? "text" : "password"}
            className="form-control pe-5"
            id="password"
            name="password"
            value={values?.password}
            onChange={handleFormInput}
          />

          <FontAwesomeIcon
            icon={tooglePassword ? faEye : faEyeSlash}
            className="position-absolute top-50 end-0 translate-middle-y me-3 text-muted"
            onClick={() => {
              setTooglePassword((toggle) => !toggle);
            }}
            style={{ cursor: "pointer" }}
          />

          <br />
          {errors?.password && (
            <span className="text-danger">{errors?.password?.message}</span>
          )}
        </div>

        <div className="mb-3 position-relative">
          <label htmlFor="password" className="form-label">
            Confirm Password
          </label>

          <input
            {...register("confirmPassword", {
              required: { value: true, message: "This is required Field" },
              validate: confirmPassword,
            })}
            type={toogleconfirmPassword ? "text" : "password"}
            className="form-control pe-5"
            id="confirmPassword"
            name="confirmPassword"
            value={values?.confirmPassword}
            onChange={handleFormInput}
          />

          <FontAwesomeIcon
            icon={toogleconfirmPassword ? faEye : faEyeSlash}
            className="position-absolute top-50 end-0 translate-middle-y me-3 text-muted"
            onClick={() => {
              setToogleconfirmPassword((toggle) => !toggle);
            }}
            style={{ cursor: "pointer" }}
          />

          <br />
          {errors?.confirmPassword && (
            <span className="text-danger">
              {errors?.confirmPassword?.message}
            </span>
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
            value={values?.phone}
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
