import "../Login/Login.css";
import { useState } from "react";
import { validateEmail } from "../../../utils/validEmail"

const PasswordErrorMessage = () => {
  return (
    <p className="FieldError">Password should have at least 8 characters</p>
  );
};

function SignupForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState({
    value: "",
    isTouched: false,
  });
  const [role, setRole] = useState("role");

  const getIsFormValid = () => {
    if(firstName !== "" && lastName !== "" && role !== "role" && {validateEmail}(email) && password.value.length >= 8)
    return true;
  };

  const clearForm = () => {
    setFirstName("")
    setLastName("")
    setEmail("")
    setPassword({
      value: "",
      isTouched: false
    })
    setRole("role")
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Account created!");
    clearForm();
  };

  return (
    <div className="SignupForm">
      <form onSubmit={handleSubmit}>
        <fieldset>
          <h2>Sign Up</h2>
          <div className="Field">
            <label htmlFor="signup-first-name">
              First name <sup>*</sup>
            </label>
            <input
              placeholder="First name"
              id="signup-first-name"
              onChange={e => setFirstName(e.target.value)}
            />
          </div>
          <div className="Field">
            <label htmlFor="signup-last-name">Last name</label>
            <input
              placeholder="Last name"
              id="signup-last-name"
              onChange={e => setLastName(e.target.value)}
            />
          </div>
          <div className="Field">
            <label htmlFor="signup-email">
              Email address <sup>*</sup>
            </label>
            <input
              placeholder="Email address"
              id="-signup-email"
              onChange={e => setEmail(e.target.value)}
            />
          </div>
          <div className="Field">
            <label htmlFor="signup-password">
              Password <sup>*</sup>
            </label>
            <input
              type="password"
              placeholder="Password"
              id="signup-password"
              onChange={(e) => setPassword({ ...password, value: e.target.value })}
              onBlur={() => setPassword({ ...password, isTouched: true })}
            />
            {password.isTouched && password.value.length < 8 ? <PasswordErrorMessage />: null}
          </div>
          <button type="submit" disabled={!getIsFormValid()}>
            Create account
          </button>
        </fieldset>
      </form>
    </div>
  );
}

export default SignupForm;
