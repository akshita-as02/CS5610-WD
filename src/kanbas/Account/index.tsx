import Signin from "./signin";
import Profile from "./Profile";
import Signup from "./Signup";
import AccountNavigation from "./Navigation";
import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
export default function Account() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
    return (
        <div id="wd-account-screen" className="d-flex">
            <div className="wd-navigation">
                <AccountNavigation />
            </div>
            <div className="wd-content ms-3">
                <h2 className="mb-4">Account</h2>
                <Routes>
                    <Route path="/" element={<Navigate to={ currentUser ? "/Kanbas/Account/Profile" : "/Kanbas/Account/Signin"  }/>} />
                    <Route path="/Signin" element={<Signin />} />
                    <Route path="/Profile" element={<Profile />} />
                    <Route path="/Signup" element={<Signup />} />
                </Routes>
            </div>
        </div>
    );
}
