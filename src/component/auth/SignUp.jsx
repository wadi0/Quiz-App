import "./static/signup.scss";
import sign_up from "../../assets/img/signup-img.jpg";
import { useFormik } from "formik";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Checkbox from "../custom/Checkbox";
import { useAuth } from "../../context/AuthContext";

const SignUp = () => {

  const [passShow,setPassShow] = useState(false)
  const [confirmPassShow,setConfirmPassShow] = useState(false)
  const [loading, setLoading] = useState(false)
  const { signup } = useAuth()
  const navigate = useNavigate();

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
    if (!values.agree) errors.agree = 'Terms & condition is required';
    if (!values.email.trim()) errors.email = 'Email is required';
    if (!values.password.trim()) errors.password = 'Password is required';
    if (!values.confirmPassword.trim()) errors.confirmPassword = 'Confirm password is required';
    if (values.name.length < 6) errors.name = "Name should be at least 6 characters long";
    if (!values.name.trim()) errors.name = 'Name is required';

    console.log(errors)
    return errors;
  };

  const signupFormSubmit = async(values) => {
    console.log(values);
    setLoading(true);
    try{
      await signup(values.email, values.password, values.name)
      navigate('/')
    }catch(error){
      console.log(error)
      setLoading(false);

    }
  };

  const signupForm = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      agree: false,
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
          <p className="validation-style">{signupForm.errors.name}</p>

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
          <p className="validation-style">{signupForm.errors.email}</p>

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
          <p className="validation-style">{signupForm.errors.password}</p>

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
          <p className="validation-style">{signupForm.errors.confirmPassword}</p>

          <div className="checkbox">
            <Checkbox
              className='input'
              name='agree'
              // checked={isChecked}
              textClass='span'
              required
              text="I agree to the Terms & Conditions"
              value={signupForm.values.agree}
              onChange={signupForm.handleChange}
            />

            {/* <input 
            id="checkbox"
            type="checkbox"
            value={signupForm.values.agree} 
            onChange={signupForm.handleChange}
            />
            <span>I agree to the Terms & Conditions</span> */}
          </div>
          <p className="validation-style">{signupForm.errors.agree}</p>

          <div className="submit-btn">
          <p>Go back to the</p>
          <Link className="link" to="/sign-in">Sign In</Link>
          </div>

          <button 
            disabled={loading}
            type="submit" 
            onClick={signupForm.handleSubmit}>
             Sign Up
          </button>

        </form>
      </div>
    </div>
  );
};

export default SignUp;
