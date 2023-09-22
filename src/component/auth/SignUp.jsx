import "./static/signup.scss";
import sign_up from "../../assets/img/signup-img.jpg";
import { useFormik } from "formik";
import { CustomInput } from "../custom-input/CustomInput";

const SignUp = () => {

  const signupFormValidation =(values)=>{
    console.log(values);
    let errors = {}

    return errors
  }

  const signupFormSubmit=(values)=>{
    console.log(values);
  }

const signupForm = useFormik({
  initialValues: {
    name: "",
    email: "",
    password: "",
  },
  validateOnChange: true,
  validateOnBlur: true,
  validate: signupFormValidation,
  onSubmit: signupFormSubmit
})

  return (
    <div>
      <div className="signup-container">
        <div className="signup-left">
          <h5>Create an account</h5>
          <img src={sign_up} alt="signup-img" />
        </div>
        <div className="signup-right">
          <input 
            id="name" 
            type="text" 
            placeholder="Enter your name"
            className="name"
            value={signupForm.values.name}
            onChange={signupForm.handleChange}
            />
            <CustomInput 
            type="text"
            placeholder="Enter your name"
            icon="search"
            value={signupForm.values.name}
            onChange={signupForm.handleChange}  
            />
            
        </div>
        
      </div>
    </div>
  );
};

export default SignUp;
