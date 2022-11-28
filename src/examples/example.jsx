import FormikForm from "../components/FormikForm/FormikForm";
import { TextField } from "../components/TextFields/TextField";


const Example = () => {
  const options = [
    {
      id: 1,
      name: "car",
    },
    {
      id: 2,
      name: "truck",
    },
    {
      id: 3,
      name: "van",
    },
  ];

  const values = {
    success: "",
    error: "",
    disabled: "",
    readonly: ""
  }
  return (
    <div>
      <FormikForm
        className="w-[100vw]"
        initialValues={values}
        validationSchema={null}
      >
        <TextField
          label="Input Error"
          width="w-[400px]"
          withLabel={true}
          withIcon={true}
          name="error"
          type="text"

          tag="input"
          placeholder="Default holder"
        />

        
        {/* Select Tag */}
        <hr />

        <TextField
          label="Select Tag Success"
          width="w-[400px]"
          withLabel={true}
          name="Number"
          type="text"
          state="success"
          tag="select"
          options={options}
          className="mx-auto"
        />

        <TextField
          label="Select Tag Error"
          width="w-[400px]"
          withLabel={true}
          name="Number"
          type="text"
          state="error"
          tag="select"
          options={options}
          className="mx-auto"
        />

        <TextField
          label="Select Tag Disabled"
          width="w-[400px]"
          withLabel={true}
          name="Number"
          type="text"
          state="disabled"
          tag="select"
          options={options}
          className="mx-auto"
        />

        <TextField
          label="Select Tag ReadOnly"
          width="w-[400px]"
          withLabel={true}
          name="Number"
          type="text"
          state="disabled"
          tag="select"
          options={options}
          className="mx-auto"
        />

        <hr />

        {/* Text Area */}

        <TextField
          label="Select Tag"
          width="w-[400px]"
          withLabel={true}
          name="Number"
          type="text"
          state="success"
          tag="select"
          options={options}
          className="mx-auto"
        />

        <TextField
          label="TextArea Error"
          width="w-[400px]"
          withLabel={true}
          name="Number"
          type="text"
          state="error"
          tag="textarea"
          placeholder="Default holder"
        />

        <TextField
          label="TextArea Success"
          width="w-[400px]"
          withLabel={true}
          name="Number"
          type="text"
          state="success"
          tag="textarea"
          placeholder="Default holder"
        />

        <TextField
          label="Disabled TextArea"
          width="w-[400px]"
          withLabel={true}
          name="Number"
          type="text"
          state="disabled"
          tag="textarea"
          placeholder="Default holder"
        />

        <TextField
          label="Read-Only TextArea"
          width="w-[400px]"
          withLabel={true}
          name="Number"
          type="text"
          state="readonly"
          tag="textarea"
          placeholder="Default holder"
        />
      </FormikForm>
    </div>
  );
};

export default Example;
