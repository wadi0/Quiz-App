import "./static/signup.scss";
import sign_up from "../../assets/img/signup-img.jpg";
import { useFormik } from "formik";

const SignUp = () => {
  const signupFormValidation = (values) => {
    console.log(values);
    let errors = {};

    return errors;
  };

  const signupFormSubmit = (values) => {
    console.log(values);
  };

  const signupForm = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
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
          <h5>Create an account</h5>
          <img src={sign_up} alt="signup-img" />
        </div>

        <div className="signup-right">
          <div className="input-icon">
            <input
            id="name"
            type="text"
            placeholder="Enter your name"
            value={signupForm.values.name}
            onChange={signupForm.handleChange}
          />
          <span className="material-icons"> person </span>
          </div>

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
            type="password"
            placeholder="Enter your password"
            value={signupForm.values.password}
            onChange={signupForm.handleChange}
          />
          <span className="material-icons"> lock </span>
          </div>

          <div className="input-icon">
            <input
            id="confirmPassword"
            type="password"
            placeholder="Enter your confirm password"
            value={signupForm.values.confirmPassword}
            onChange={signupForm.handleChange}
          />
          <span className="material-icons"> lock </span>
          </div>

          <button className="go_back">
            Go back to the <b>Log in</b>
          </button>

        </div>
      </div>
    </div>
  );
};

export default SignUp;
