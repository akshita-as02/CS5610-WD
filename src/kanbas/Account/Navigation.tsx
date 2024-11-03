import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

export default function AccountNavigation() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);

  return (
    <div 
      id="wd-account-navigation" 
      className="wd list-group rounded-0"
      style={{ border: 'white', outline: 'none' }}
    >
      {/* Conditionally render Signin and Signup links */}
      {!currentUser && (
        <>
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
        </>
      )}

      {/* Conditionally render Profile link */}
      {currentUser && (
        <NavLink 
          to="/Kanbas/Account/Profile" 
          id="wd-account-profile-link" 
          className={({ isActive }) => `list-group-item ${isActive ? 'text-black' : 'text-danger'} wd-navigation-link ${isActive ? 'active' : ''}`}
          style={{ border: 'none', outline: 'none' }}
        >
          Profile
        </NavLink>
      )}
    </div>
  );
}
