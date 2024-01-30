import React from "react";
import { Formik, Field,useFormik, ErrorMessage,Form } from "formik";
import "./SignUpForm.css";
import * as Yup from "yup";
// import "yup-phone";


const SignUpSchema = Yup.object().shape({
  firstName: Yup.string().required("First Name is Must"),
  lastName:  Yup.string().required("First Name is Must"),
  password: Yup.string().required("Password is required").min(6, "minimum length should be 6 character"),
  confirmPassword: Yup.string().required("Password is required").min(6, "minimum length should be 6 character").oneOf([Yup.ref('password')], "Password must be same"),
  email: Yup.string().email('must be in correct format').required("this email filed is must"),
  additionalFlagInfo: Yup.boolean(),
  additionalInfo: Yup.string().when('additionalFlagInfo', {
    is: true,
    then: Yup.string().required("this additonal field is required")
  })
})






const SigninForm = () => {
  // const formik = useFormik({
  //   initialValues: {
  //     firstName: "",
  //     lastName: '',
  //     email: '',
  //     phone: "",
  //     password: "",
  //     confirmPassword: '',
  //     subscription: '',
  //     gender: '',
  //     additionalFlagInfo: false,
  //     additionalInfo: ''
  //   },
  //   validationSchema: SignUpSchema,
  //   // onSubmit: (value) => {
  //   //   console.log("valus=====>", value);
  //   // }
  
  
  // })
  return (
    <>
      <Formik
        initialValues={{
          firstName: "",
          lastName: '',
          email: '',
          phone: "",
          password: "",
          confirmPassword: '',
          subscription: '',
          gender: '',
          additionalFlagInfo: false,
          additionalInfo: ''
        }}
        // validate={(values)=>{
        //   const errors ={}

        //   if (!values.firstName){
        //     errors.firstName= "Required"
        //   }
        //   if(!values.lastName){
        //     errors.lastName="Last Name is Required"
        //   }

        //   if(!values.email){
        //     errors.email="Requird"

        //   }
        //   else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
        //     errors.email="email should be correct"
        //   }

        //   if(!values.password){
        //     errors.password="password is required"
        //   }
        //   if(!values.confirmPassword){
        //     errors.confirmPassword="Conform password is required"
        //   }
        //   else if(values.confirmPassword!==values.password){
        //     errors.confirmPassword ="password should be same"
        //   }


        //   return errors;

        // }}

        validationSchema={SignUpSchema}


        onSubmit={(value) => {
          console.log("valus=====>", value);
        }}

      >
        {(formik) => ( 

     <form onSubmit={formik.handleSubmit}>

            {console.log("formik==>", formik)}
            <div className="form-group">
              <label for="firstName">First Name</label>
              <input type="text" className="form-control" name="firstName" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.firstName} />
            {/* <Field type="text" className="form-control" name= "firstName" /> */}
            </div>
            {formik.touched.firstName && formik.errors.firstName && (<span className="valudationErrors">{formik.errors.firstName}</span>)}
            {/* <ErrorMessage  name="firstName" component='span' className="valudationErrors" /> */}
            <div className="form-group mt-2">
              <label for="lastName">Last Name</label>
              <input type="text" className="form-control" name="lastName" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.lastName} />
            </div>
            {formik.touched.lastName && formik.errors.lastName && (<span className="valudationErrors">{formik.errors.lastName}</span>)}

            <div className="form-group mt-2">
              <label>Gender</label>
              <div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="gender"
                    id="male"
                    value="male"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    checked={formik.values.gender === 'male'}
                  />
                  <label className="form-check-label" for="male">
                    Male
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="gender"
                    id="female"
                    value="female"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    checked={formik.values.gender === 'female'}
                  />
                  <label className="form-check-label" for="female">
                    Female
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="gender"
                    id="other"
                    value="other"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    checked={formik.values.gender === 'other'}
                  />
                  <label className="form-check-label" for="other">
                    Other
                  </label>
                </div>
              </div>
            </div>
            {formik.touched.gender && formik.errors.gender && (<span className="valudationErrors">{formik.errors.gender}</span>)}

            <div className="form-group mt-2">
              <label for="email">Email</label>
              <input type="text" className="form-control" name="email" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.email} />
            </div>
            {formik.touched.email && formik.errors.email && (<span className="valudationErrors">{formik.errors.email}</span>)}

            <div className="form-group mt-2">
              <label for="phone">Phone Number</label>
              <input type="number" className="form-control" name="phone" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.phone} />
            </div>

            <div className="form-group mt-2">
              <label for="password">Password</label>
              <input type="password" className="form-control" name="password" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.password} />
            </div>
            {formik.touched.password && formik.errors.password && (<span className="valudationErrors">{formik.errors.password}</span>)}

            <div className="form-group mt-2">
              <label for="confirmPassword">Confirm Password</label>
              <input
                type="password"
                className="form-control"
                name="confirmPassword"
                onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.confirmPassword}
              />
            </div>
            {formik.touched.confirmPassword && formik.errors.confirmPassword && (<span className="valudationErrors">{formik.errors.confirmPassword}</span>)}

            <div className="form-group mt-2">
              <label for="confirmPassword">Subscription</label>
              <select className="form-control" name="subscription" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.subscription}>
                <option value="">Select</option>
                <option value="subscription-1">Free</option>
                <option value="subscription-2">Pro</option>
                <option value="subscription-3">Enterprise</option>
              </select>
            </div>
            <div className="form-group mt-2">
              <div className="form-check">
                <input
                  type="checkbox"
                  id="additionalFlagInfo"
                  name='additionalFlagInfo'
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.additionalFlagInfo}
                />
                <label className="form-check-label" htmlFor="additionalFlagInfo">
                  AdditionalFlagInfo
                </label>

              </div>
              {formik.values.additionalFlagInfo && (<div className="form-group mt-2">
                <label htmlFor="additionalFlagInfo">
                  Enter AdditionalFlagInfo

                </label>
                <textarea
                  className="form-control"
                  id="additionalInfo"
                  name='additionalInfo'
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.additionalInfo}
                >

                </textarea>

              </div>)}
              {formik.touched.additionalInfo && formik.errors.additionalInfo && (<span className="valudationErrors">{formik.errors.additionalInfo}</span>)}


            </div>
            <div className="form-group mt-2">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="termsAndCondtions"
                />
                <label className="form-check-label" htmlFor="termsAndCondtions">
                  Accept terms and conditions.
                </label>
              </div>
            </div>

            <div className="d-grid mt-2">
              <button type="submit" className="btn btn-primary btn-block" >
                Sign Up
              </button>
            </div>
          </form>

         )} 
      </Formik>
    </>
  );
};

export default SigninForm;
