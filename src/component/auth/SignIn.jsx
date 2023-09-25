import "./static/signup.scss";
import sign_in from "../../assets/img/signin-img.svg";
import { useFormik } from "formik";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export const SignIn = () => {
  const [passShow, setPassShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const { signup } = useAuth();
  const navigate = useNavigate();

  const passwordShow = () => {
    setPassShow(!passShow);
  };

  const signupFormValidation = (values) => {
    console.log(values);
    const errors = {};

    if (!values.password.trim()) errors.password = "Name is required";
    if (!values.email.trim()) errors.email = "Email is required";

    console.log(errors);
    return errors;
  };

  const signupFormSubmit = async (values) => {
    console.log(values);
    setLoading(true);
    try {
      await signup(values.email, values.password);
      navigate("/");
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const signupForm = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validateOnChange: true,
    validateOnBlur: true,
    validate: signupFormValidation,
    onSubmit: signupFormSubmit,
  });

  return (
    <div>
      <div className="signup-container">
        <div className="signup-left">
          <h5>Login to your account</h5>
          <img src={sign_in} alt="signup-img" />
        </div>

        <form className="signup-right">
          <div className="input-icon">
            <input
              id="email"
              type="email"
              placeholder="Enter your email address"
              value={signupForm.values.email}
              onChange={signupForm.handleChange}
            />
            <span className="material-icons"> email </span>
          </div>

          <div className="input-icon">
            <input
              id="password"
              type={passShow ? "text" : "password"}
              placeholder="Enter your password"
              value={signupForm.values.password}
              onChange={signupForm.handleChange}
            />
            <span
              className="material-icons"
              onClick={() => passwordShow("password")}
            >
              {" "}
              {passShow ? "lock_open" : "lock"}{" "}
            </span>
          </div>

          <div className="submit-btn">
            <p>
              Don't have an account?
              <Link className="link" to="/sign-up">
                Sign Up
              </Link>{" "}
              instead.
            </p>
          </div>

          <button type="submit" onClick={signupForm.handleSubmit}>
            SUBMIT NOW
          </button>
        </form>
      </div>
    </div>
  );
};
