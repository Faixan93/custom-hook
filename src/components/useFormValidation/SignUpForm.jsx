import React from "react";
import UseFormValidation from "./UseFormValidation";

function validateField(name, value) {
  if (!value) return "Required!";
  if (name === "email" && !value.includes("@")) return "Invalid email!";
  return "";
}
const SignUpForm = () => {
  const { values, errors, handleChange, handleSubmit } = UseFormValidation(
    { email: "", password: "" }, // Ensure all fields have initial values
    validateField
  );

  return (
    <div>
      <h1>Sign UP</h1>
      <form onSubmit={(e) => handleSubmit(e, () => alert("Form Submitted!"))}>
        <input
          type="text"
          name="email"
          value={values.email}
          onChange={handleChange}
        />
        {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}

        <input
          type="password"
          name="password"
          value={values.password}
          onChange={handleChange}
        />
        {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SignUpForm;
