import { NavLink } from "react-router-dom";

export default function AccountNavigation() {
    return (
        <div id="wd-account-navigation" 
        className="wd list-group rounded-0 outline: none"
        style={{ border: 'white', outline: 'none' }}
        >
            <NavLink 
                to="/Kanbas/Account/Signin" 
                id="wd-account-signin-link" 
                className={({ isActive }) => `list-group-item ${isActive ? 'text-black' : 'text-danger'} wd-navigation-link ${isActive ? 'active' : ''}`}
                style={{ border: 'none', outline: 'none' }}
            >
                Signin
            </NavLink>
            <NavLink 
                to="/Kanbas/Account/Signup" 
                id="wd-account-signup-link" 
                className={({ isActive }) => `list-group-item ${isActive ? 'text-black' : 'text-danger'} wd-navigation-link ${isActive ? 'active' : ''}`}
                style={{ border: 'none', outline: 'none' }}
            >
                Signup
            </NavLink>
            <NavLink 
                to="/Kanbas/Account/Profile" 
                id="wd-account-profile-link" 
                className={({ isActive }) => `list-group-item ${isActive ? 'text-black' : 'text-danger'} wd-navigation-link ${isActive ? 'active' : ''}`}
                style={{ border: 'none', outline: 'none' }}
            >
                Profile
            </NavLink>
        </div>
    );
}
