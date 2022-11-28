import React from "react";
import { useState } from "react";
import { useField } from "formik";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import errorIcon from "../../Assets/Images/text-field/error-icon.png";
import successIcon from "../../Assets/Images/text-field/success-icon.png";
import { BsCalendar2Date } from "react-icons/bs";

export const DashboardField = ({
  width,
  type,
  label,
  styleLabel,
  withLabel = false,
  withIcon = false,
  tag, //for the field tags
  icon,
  options,
  state,
  ...props
}) => {
  const [field, meta] = useField(props);

  const [passwordType, setPasswordType] = useState(type);

  // Show and Hide Password Function
  const togglePassword = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      return;
    }
    setPasswordType("password");
  };
  return (
    <div className={`flex flex-col mb-5 ${width}`}>
      {withLabel && (
        <label className={`text-lg text-left mb-[8px] ${styleLabel}`} htmlFor={field.name}>
          {label}
        </label>
      )}

      <div
        className={`${
          tag !== "textarea" && "h-14"
        } flex items-center px-[21px] text-base border-[1px] rounded-[8px] 
     hover:shadow-input-hover bg-[#FBFBFB] border-[#001540] placeholder:text-[#ABABAB]`}
      >
        {tag === "input" ? (
          <>
            {/* Icon */}
            {withIcon && (
              <span>
                {state === "error" || (meta.touched && meta.error) ? (
                  <img src={errorIcon} alt="error icon" className="mr-[21px]" />
                ) : state === "success" ? (
                  <img
                    src={successIcon}
                    alt="sucess icon"
                    className="mr-[21px]"
                  />
                ) : (
                  <img src={icon} alt="" className="mr-[21px]" />
                )}
              </span>
            )}
            <input
              {...field}
              name={field.name}
              placeholder={props.placeholder}
              autoComplete="off"
              type={type === "password" ? passwordType : type}
              className="w-full h-full focus:outline-none bg-transparent placeholder"
              disabled={state === "disabled"}
              readOnly={state === "readonly"}
            />

            {/* Show and Hide Password */}
            {type === "password" && (
              <span onClick={togglePassword}>
                {passwordType === "password" ? (
                  <AiOutlineEyeInvisible className="mr-1 cursor-pointer" />
                ) : (
                  <AiOutlineEye className="mr-1 cursor-pointer" />
                )}
              </span>
            )}

            {type === "date" && (
              <span>
                  <BsCalendar2Date className="mr-1 cursor-pointer" />
              </span>
            )}
          </>
        ) : tag === "select" ? (
          <select
            name={props.name}
            className="w-full h-full bg-transparent focus:outline-none focus-visible:outline-none"
            disabled={state === "disabled"}
            readOnly={state === "readonly"}
            {...field}
          >
            {options.map((option) => (
              <option value={option.name} key={option.id} className="w-full">
                {option.name}
              </option>
            ))}
          </select>
        ) : tag === "textarea" ? (
          <textarea
            name={props.name}
            id=""
            rows="10"
            className="w-full focus:outline-none pt-[11px]"
            placeholder={props.placeholder}
            {...field}
            disabled={state === "disabled"}
            readOnly={state === "readonly"}
          ></textarea>
        ) : (
          ""
        )}
      </div>

      {/* <ErrorMessage
        className="text-red-600 text-xs mt-0"
        component="div"
        name={field.name}
      /> */}
    </div>
  );
};

// How to use the TextField Component

// width (you can specify the width of the textfield component with this prop. NB: it only accepts tailwind css class width e.g w-full or w-[70px])
// tag (this accepts strings; you can set it different form tags e.g "input", "select", "textarea")
// type (you can only use this "type" prop when your "tag" prop is set to "input" e.g type="password" || type="text" || type="email")
// withLabel (this accepts a boolean datatype; if your tag has a label set it to true else set it false)
// label (this accepts strings; it only works when your "withLabel" prop is set to true )

// withIcon (this accepts booleans; if your textfield has an icon you can set it true else set it to false)
// icon (once your "withIcon" is set to true you can pass the name of your icon; Note: don't pass it as a string. E.g icon={image})
// options (only set this when your "tag" prop is set to "select". Note it accepts an array of objects e.g options={[{firstObject},{secondObject},]})
// state (only use this when you want to your textfield to be "disabled" or "readonly"; you can pass either of them as strings. e.g state="disabled")
// placeholder (if your "tag" prop is set to "input" and it has a placeholder, you pass this else leave it. e.g placeholder="Default holder" )

// -----------------------EXAMPLE----------------------
// <TextField label="Input Error" width="w-[400px]" withLabel={true} withIcon={true} name="Number" type="text" state="error" tag="input" placeholder="Default holder" />;

// -------------------- NOTE -----------------------------------

// For the TextField component to work, you need to wrap it in a component else it will flag an error
//  <FormikForm>
//    <TextField />
//  </ FormikForm>
