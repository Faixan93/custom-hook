import { useState } from "react";

const UseFormValidation = (initialValues = {}, validate) => {
  const [values, setValues] = useState(initialValues || {});
  const [errors, setErrors] = useState({});

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });

    // Validate input
    if (validate) {
      setErrors({ ...errors, [name]: validate(name, value) });
    }
  };

  // Handle form submission
  const handleSubmit = (e, callback) => {
    e.preventDefault();

    // Validate all fields
    const validationErrors = Object.keys(values).reduce((acc, key) => {
      acc[key] = validate ? validate(key, values[key]) : "";
      return acc;
    }, {});
    setErrors(validationErrors);

    // If no errors, call the submit callback
    if (!Object.values(validationErrors).some((error) => error)) {
      callback();
    }
  };

  return { values, errors, handleChange, handleSubmit };
};

export default UseFormValidation;
