import FormikForm from "../FormikForm/FormikForm";
import { TextField } from "../TextFields/TextField";
import * as Yup from "yup";

const StudentLoginForm = () => {
  const initialValues = {
    admissionNo: "",
    password: ""
  };

  const validate = Yup.object({
    admissionNo: Yup.string()
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
        name="admissionNo"
        withLabel={true}
        label="Admission Number"
        placeholder="Enter your Admission Number"
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
    </FormikForm>
  );
};

export default StudentLoginForm;
