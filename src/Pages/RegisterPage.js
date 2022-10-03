// import React, { useState } from 'react'

// function RegisterPage() {

//     const intialValues = { email: "", password: "" };
//   const [formValues, setFormValues] = useState(intialValues);
//   const [formErrors, setFormErrors] = useState({});
//   const [isSubmitting, setIsSubmitting] = useState(false);

  
//   return (
//     <div>
//       <Formik
//        validationSchema={validationSchema}
//        initialValues={{  email: "",password: ""}}
//        onSubmit={(values) => {
//          console.log(values);
//        }}>
//         <Form>
//         <div className="register-parent">
//       {loading && <Loader />}
//       <div className="register-top"></div>
//       <div className="row justify-content-center">
//         <div className="col-md-5 ">
//           <lottie-player
//             src="https://assets7.lottiefiles.com/packages/lf20_5tkzkblw.json"
//             background="transparent"
//             speed="1"
//             loop
//             autoplay
//           ></lottie-player>
//         </div>

//         <div className="col-md-4 z1">
//           <div className="register-form">
//             <h2>REGISTER</h2>
//             <hr />

//             <Field
//               type="text"
//               value={email}
//               placeholder="email"
//               className="form-control"
//               onChange={(e) => setEmail(e.target.value)}
//             />
//              <KErrorMessage name="email" />
//             <Field
//               type="text"
//               value={password}
//               placeholder="password"
//               className="form-control"
//               onChange={(e) => setPassword(e.target.value)}
//             />
//             <KErrorMessage name="password" />
//             <Field
//               type="text"
//               value={cpassword}
//               placeholder="confirm password"
//               className="form-control"
//               onChange={(e) => setCPassword(e.target.value)}
//             />
//              <KErrorMessage name="password" />
//             <button className="my-3" onClick={register} type="submit">
//               REGISTER
//             </button>
//             <hr />
//             <Link to="/LoginPage">Click here to login</Link>
//           </div>
//         </div>
//       </div>
//     </div>
//         </Form>
//       </Formik>
//     </div>
//   )
// }

// export default RegisterPage


