// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
// //import Loader from "../Components/Loader";
// //import { toast } from "react-toastify";
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
//     .required("Email is Required!"),
//   password: yup
//     .string()
//     .matches(
//       /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
//       "Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character"
//     )
//     .required("Password is required!"),
// });

// function LoginPage() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   //const [loading, setLoading] = useState(false);
//   const auth = getAuth();

//   const login = async () => {
//     try {
//       setLoading(true);
//       const result = await signInWithEmailAndPassword(auth, email, password);
//       localStorage.setItem("currentUser", JSON.stringify(result));
//       setLoading(false);
//       //toast.success("Registration Successfull");
//       window.location.href = "/";
//     } catch (error) {
//       console.log(error);
//       //toast.error("Registration Failed");
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="login-parent">
//       {/* {loading && <Loader />} */}
//       <div className="row justify-content-center">
//         <div className="col-md-4 z1">
          

//           <Formik
//             validationSchema={validationSchema}
//             initialValues={{  email: "",password: "",password:"" }}
//             onSubmit={(values) => {
//               console.log(values);
//             }}>
//             <Form>
//             <div className="login-form">
//             <h2>Login</h2>
//             <hr />
//             <Field
//               type="email"
//               value={email}
//               placeholder="email"
//               className="form-control"
//               onChange={(e) => setEmail(e.target.value)}
//             />
//              <KErrorMessage name="email" />
//             <Field
//               type="password"
//               value={password}
//               placeholder="password"
//               className="form-control"
//               onChange={(e) => setPassword(e.target.value)}
//             />
//             <KErrorMessage name="password" />

//             <button className="my-3" onClick={login} type="submit">
//               LOGIN
//             </button>
//             <hr />
//             <Link to="/RegisterPage">Click here to register</Link>
//           </div>
//             </Form>
//           </Formik>
//         </div>
//         <div className="col-md-5 z1">
//           <lottie-player
//             src="https://assets2.lottiefiles.com/packages/lf20_jcikwtux.json"
//             background="transparent"
//             speed="1"
//             loop
//             autoplay
//           ></lottie-player>
//         </div>
//       </div>

//       <div className="login-bottom"></div>
//     </div>
//   );
// }

// export default LoginPage;
