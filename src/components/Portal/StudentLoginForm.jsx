import FormikForm from "../FormikForm/FormikForm";
import { TextField } from "../TextFields/TextField";

const StudentLoginForm = () => {
  const initialValues = {
    admissionNo: "",
    password: ""
  };
  return (
    <FormikForm
      initialValues={initialValues}
      validationSchema={null}
      className="w-full h-full flex items-center justify-center flex-col"
    >
      <TextField
        tag="input"
        type="text"
        name="admissionNo"
        withLabel={true}
        label="Admission Number"
        placeholder="Enter your Admission Number"
        width="w-full"
      />
      <TextField
        tag="input"
        type="password"
        name="password"
        withLabel={true}
        label="Password"
        placeholder="Password"
        width="w-full"
      />
    </FormikForm>
  );
};

export default StudentLoginForm;
