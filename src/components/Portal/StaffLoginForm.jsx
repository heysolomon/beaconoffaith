import React from "react";
import FormikForm from "../FormikForm/FormikForm";
import { TextField } from "../TextFields/TextField";
import * as Yup from "yup";

const StaffLoginForm = () => {
  const initialValues = {
    staffCode: "",
    password: "",
  };

  const validate = Yup.object({
    staffCode: Yup.string()
      .min(3, "Must be 3 characters or more")
      .required("Required"),
    password: Yup.string()
      .min(8, "Password must be atleast 8 characters long")
      .required("Password is required")
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*)[A-Za-z\d]{8,}$/,
        `Must Contain 8 Characters, One Uppercase, One Lowercase,
              One Number and one special case Character [@$!%*#?&-_]`
      ),
  });
  return (
    <FormikForm
      initialValues={initialValues}
      validationSchema={validate}
      className="w-full h-full flex items-center justify-center flex-col"
    >
      <TextField
        tag="input"
        type="text"
        name="staffCode"
        withLabel={true}
        label="Staff Code"
        placeholder="Enter your Staff Code"
        width="w-[50%] text-md text-brand"
      />
      <TextField
        tag="input"
        type="password"
        name="password"
        withLabel={true}
        label="Password"
        placeholder="Password"
        width="w-[50%] text-md text-brand"
      />
      <div className="flex justify-center w-full">
        <button className="bg-brand2 text-[#fff] hover:bg-[transparent] hover:text-brand2 hover:border-brand2 border-[2px] border-[transparent] font-[700] h-10 w-[50%] rounded-md px-2">
          Login
        </button>
      </div>
    </FormikForm>
  );
};

export default StaffLoginForm;
