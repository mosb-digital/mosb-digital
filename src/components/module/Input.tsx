import React, { useState, ChangeEventHandler } from "react";
import { FieldProps, FormikErrors } from "formik";

interface InputFieldProps extends FieldProps {
  label: string;
  placeholder?: string;
  type?: string; // Added type prop
  height?: string; // Added height prop
}

const InputField: React.FC<InputFieldProps> = ({
  field,
  form: { touched, errors },
  label,
  placeholder,
  type = "text", // Default value for type prop
  height = "auto", // Default value for height prop
}) => {
  const [value, setValue] = useState<string>("");

  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    const newValue = event.target.value;
    setValue(newValue);
    field.onChange(event); // Update Formik state
  };

  return (
    <div className="mb-4">
      <label className="block text-gray-500 font-semi-bold mb-1">{label}</label>
      <input
        type={type} // Set input type from prop
        name={field.name} // Add the name attribute
        className={`w-full px-3 py-2 border border-black hover:border-[#FAB005] bg-transparent rounded-md text-gray-700 focus:outline-none focus:border-[#FAB005] h-[50px]`} // Dynamic height class
        placeholder={placeholder}
        value={field.value} // Use field value instead of local state
        onChange={handleChange}
      />
      {touched[field.name] &&
        errors[field.name] &&
        typeof errors[field.name] === "string" && (
          <div className="text-red-500">{errors[field.name] as any}</div>
        )}
    </div>
  );
};

export default InputField;
