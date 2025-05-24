import { useForm } from "react-hook-form";

const StepOne = ({ nextStep, handleFormInput, values }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = () => {
    nextStep();
  };

  return (
    <>
    
      <h1 className="text-center">Step No 1</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-50 mx-auto border rounded-2 p-4"
      >
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            {...register("name", {
              required: { value: true, message: "This is Required Field" },
              minLength: { value: 3, message: "Min Length is 3" },
              maxLength: { value: 20, message: "Max Length is 20" },
            })}
            type="text"
            className="form-control"
            value={values?.name}
            onChange={handleFormInput}
          />
          {errors?.name && (
            <span className="text-danger">{errors?.name?.message}</span>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            {...register("email", {
              required: { value: "true", message: "This is required Field" },
            })}
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={values?.email}
            onChange={handleFormInput}
          />
          <br />
          {errors?.email && (
            <span className="text-danger">{errors?.email?.message}</span>
          )}
        </div>

        <button type="submit" className="btn btn-primary">
          Continue
        </button>
      </form>
    </>
  );
};
export default StepOne;
