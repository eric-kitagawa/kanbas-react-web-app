import Signin from "./Signin";
import Navigation from "./Navigation";
import Signup from "./Signup";
import Profile from "./Profile";
import { Routes, Route, Navigate } from "react-router";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import Users from "./Users"
export default function Account() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const links = currentUser ? ["Profile"] : ["Signin", "Signup"];
  const { pathname } = useLocation();
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
                     element={ currentUser ? "/Kanbas/Account/Profile" : "/Kanbas/Account/Signin" } />
              <Route path="/Signin" element={<Signin />} />
              <Route path="/Profile" element={<Profile />} />
              <Route path="/Signup" element={<Signup />} />
              <Route path="/Users" element={<Users />} />
              <Route path="/Users/:uid" element={<Users />} />
            </Routes>
          </td>
        </tr>
      </table>
    </div>
);}
