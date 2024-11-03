import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid } from "react-icons/lia";
import { GoInbox } from "react-icons/go";
import { Link, useLocation } from "react-router-dom";
import { IoCodeSlash } from "react-icons/io5";
import { RiAccountCircleLine } from "react-icons/ri";

export default function KanbasNavigation() {
  const { pathname } = useLocation();
  
  // Define the links including the Account link
  const links = [
    { label: "Account", path: "/Kanbas/Account", icon: RiAccountCircleLine },
    { label: "Dashboard", path: "/Kanbas/Dashboard", icon: AiOutlineDashboard },
    { label: "Courses", path: "/Kanbas/Courses", icon: LiaBookSolid },
    { label: "Calendar", path: "/Kanbas/Calendar", icon: IoCalendarOutline },
    { label: "Inbox", path: "/Kanbas/Inbox", icon: GoInbox },
    { label: "Labs", path: "/Labs", icon: IoCodeSlash },
  ];

  return (
    <div
      id="wd-kanbas-navigation"
      style={{ width: 85 }}
      className="list-group rounded-0 position-fixed bottom-0 top-0 d-none d-md-block bg-black z-2"
    >
      <a
        id="wd-neu-link"
        target="_blank"
        href="https://www.northeastern.edu/"
        className="list-group-item bg-black border-0 text-center d-flex justify-content-center align-items-center"
      >
        <img src="/images/NEU.png" width="75px" />
      </a>
      {links.map((link) => (
        <Link
          key={link.path}
          to={link.path}
          className={`list-group-item bg-black text-center border-0 ${
            pathname.includes(link.label) ? "text-danger bg-white" : "text-white bg-black"
          }`}
          style={{
            fontSize: "14px",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {link.icon({ className: "fs-3 text-danger", style: { alignItems: "center", fontSize: "36px" } })} {/* Increase icon size */}
          {link.label}
        </Link>
      ))}
    </div>
  );
}
