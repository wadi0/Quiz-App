import "./static/signup.scss";
import sign_up from "../../assets/img/signup-img.jpg";
import { useFormik } from "formik";
import { useState } from "react";
import { Link } from "react-router-dom";

const SignUp = () => {

  const [passShow,setPassShow] = useState(false)
  const [confirmPassShow,setConfirmPassShow] = useState(false)

  const passwordShow = (field)=>{
    if(field === 'password'){
      setPassShow(!passShow)
    }else if(field === 'confirmPassword'){
    setConfirmPassShow(!confirmPassShow)
  }
  }

  const signupFormValidation =(values) => {
    console.log(values);
    const errors = {};

    // if (!values.email.trim()) errors.email = 'Name is required';
    // if (!values.password.trim()) errors.password = 'Name is required';
    // if (!values.confirmPassword.trim()) errors.confirmPassword = 'Name is required';
    // if (values.name.length < 6) errors.name = "First Name should be at least 6 characters long";
    if (!values.name.trim()) errors.name = 'Name is required';

    console.log(errors)
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
      agree: "",
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

        <form className="signup-right">
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
          <p>{signupForm.errors.name}</p>


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
            type={passShow ? 'text' : 'password'}
            placeholder="Enter your password"
            value={signupForm.values.password}
            onChange={signupForm.handleChange}
          />
          <span className="material-icons" onClick={() =>passwordShow('password')}> {passShow ? 'lock_open' : 'lock'} </span>
          </div>

          <div className="input-icon">
            <input
            id="confirmPassword"
            type={confirmPassShow ? 'text' : 'password'}
            placeholder="Enter your confirm password"
            value={signupForm.values.confirmPassword}
            onChange={signupForm.handleChange}
          />
          <span className="material-icons" onClick={() =>passwordShow('confirmPassword')}> {confirmPassShow ? 'lock_open' : 'lock'} </span>
          </div>

          <div className="checkbox">
            <input 
            id="checkbox"
            type="checkbox"
            value={signupForm.values.agree} 
            onChange={signupForm.handleChange}
            />
            <span>I agree to the Terms & Conditions</span>
          </div>

          <div className="submit-btn">
          <p>Go back to the</p>
          <Link className="link" to="/sign-in">Sign In</Link>
          </div>

          <button type="submit" onClick={signupForm.handleSubmit}>
             Sign Up
          </button>

        </form>
      </div>
    </div>
  );
};

export default SignUp;
