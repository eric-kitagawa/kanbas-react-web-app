import Signin from "./Signin";
import Navigation from "./Navigation";
import Signup from "./Signup";
import Profile from "./Profile";
import { Routes, Route, Navigate } from "react-router";
export default function Account() {
  return (
    <div id="wd-account-screen">
      <table>
        <tr>
          <td valign="top">
            <Navigation />
          </td>
          <td valign="top">
            <Routes>
              <Route path="/"
                     element={<Navigate to="/Kanbas/Account/Signin" />} />
              <Route path="/Signin" element={<Signin />} />
              <Route path="/Profile" element={<Profile />} />
              <Route path="/Signup" element={<Signup />} />
            </Routes>
          </td>
        </tr>
      </table>
    </div>
);}
