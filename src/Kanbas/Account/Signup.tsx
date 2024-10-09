import React from "react";
import { Link } from "react-router-dom";
export default function Signup() {
  return (
    <div id="wd-signup-screen">
      <h3>Sign up</h3>
      <input placeholder="username" className="wd-username form-control mb-2" />
      <input placeholder="password" type="password" className="wd-password form-control mb-2" />
      <input placeholder="verify password" type="password" className="wd-password-verify form-control mb-2" />
      <Link  className="btn btn-primary w-100"to="/Kanbas/Account/Profile" > Sign up </Link>
      <Link  to="/Kanbas/Account/Signin" >Sign in</Link>
    </div>
);}


// import { Link } from "react-router-dom";
// export default function Signin() {
//   return (
//     <div id="wd-signin-screen">
//       <h1>Sign in</h1>
//       <input id="wd-username"
//              placeholder="username"
//              className="form-control mb-2"/>
//       <input id="wd-password"
//              placeholder="password" type="password"
//              className="form-control mb-2"/>
//       <Link id="wd-signin-btn"
//             to="/Kanbas/Account/Profile"
//             className="btn btn-primary w-100">
//             Sign in </Link>
//       <Link id="wd-signup-link" to="/Kanbas/Account/Signup">Sign up</Link>
//     </div>
// );}