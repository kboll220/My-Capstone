import "./Login.css";
import { useState } from "react";
import { validateEmail } from "../../../utils/validEmail"


function LoginForm() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState({
    value: "",
    isTouched: false,
  });

  const getIsFormValid = () => {
    if(validateEmail(email) && password !== "")
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Successfully Logged In!")
  };

  return (
    <div className="LoginForm">
      <form onSubmit={handleSubmit}>
        <fieldset>
          <h2>Account Log In</h2>
          <div className="Field">
            <label htmlFor="login-email">
              Email address <sup>*</sup>
            </label>
            <input
                type="email"
                id="login-email"
              placeholder="Email address"
              onChange={e => setEmail(e.target.value)}
            />
          </div>
          <div className="Field">
            <label htmlFor="login-password">
              Password <sup>*</sup>
            </label>
            <input
              type="password"
              id="login-password"
              placeholder="Password"
              onChange={(e) => setPassword({ ...password, value: e.target.value })}
              onBlur={() => setPassword({ ...password, isTouched: true })}
            />
          </div>
          <button type="submit" disabled={!getIsFormValid()}>
            Log In
          </button>
        </fieldset>
      </form>
    </div>
  );
}

export default LoginForm;
