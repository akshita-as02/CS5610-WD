import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

export default function AccountNavigation() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const links = currentUser ? ["Profile"] : ["Signin", "Signup"];
  
  return (
    <div
      id="wd-account-navigation"
      className="wd list-group rounded-0"
      style={{ border: "white", outline: "none" }}
    >
      {links.map((link) => (
        <NavLink
          key={link}
          to={`/Kanbas/Account/${link}`}
          id={`wd-account-${link.toLowerCase()}-link`}
          className={({ isActive }) =>
            `list-group-item ${isActive ? "text-black" : "text-danger"} wd-navigation-link ${isActive ? "active" : ""}`
          }
          style={{ border: "none", outline: "none" }}
        >
          {link}
        </NavLink>
      ))}

      {currentUser && currentUser.role === "ADMIN" && (
        <NavLink
          to="/Kanbas/Account/Users"
          id="wd-account-users-link"
          className={({ isActive }) =>
            `list-group-item ${isActive ? "text-black" : "text-danger"} wd-navigation-link ${isActive ? "active" : ""}`
          }
          style={{ border: "none", outline: "none" }}
        >
          Users
        </NavLink>
      )}
    </div>
  );
}
