// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// import Loader from "../Components/Loader";
// import { toast } from "react-toastify";
// import { Formik, Field, Form } from "formik";
// import * as yup from "yup";
// import KErrorMessage from "../Components/KErrorMessage";


// const validationSchema = yup.object({
  
  
//   email: yup
//     .string()
//     .matches(
//       /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
//       "Invalid Email"
//     )
//     .required("Email is Requied!"),
//   password: yup
//     .string()
//     .matches(
//       /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
//       "Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character"
//     )
//     .required("Password is required!"),

// });

// function RegisterPage() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [cpassword, setCPassword] = useState("");
//   const [loading, setLoading] = useState(false);
//   const auth = getAuth();

//   const register = async () => {
//     try {
//       setLoading(true);
//       const result = await createUserWithEmailAndPassword(
//         auth,
//         email,
//         password
//       );
//       setLoading(false);
//       toast.success("Registration successfull");
//       setEmail("");
//       setPassword("");
//       setCPassword("");
//     } catch (error) {
//       console.log(error);
//       toast.error("Registration Failed");
//       setLoading(false);
//     }
//   };
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
//   );
// }

// export default RegisterPage;
