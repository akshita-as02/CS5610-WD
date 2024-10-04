import { Link, useLocation } from "react-router-dom";
import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid } from "react-icons/lia";
import { FaRegCircleUser } from "react-icons/fa6";
import { HiOutlineInboxArrowDown } from "react-icons/hi2";
import { FaLaptopCode } from "react-icons/fa";

export default function KanbasNavigation() {
  const location = useLocation();

  const isActive = (path: string): boolean => location.pathname.startsWith(path);

  return (
    <div
      id="wd-kanbas-navigation"
      style={{ width: 80 }}
      className="list-group rounded-0 position-fixed bottom-0 top-0 
      d-none d-md-block bg-black z-2"
    >
      <a
        id="wd-neu-link"
        target="_blank"
        href="https://www.northeastern.edu/"
        className="list-group-item bg-black border-0 text-center 
        d-flex align-items-center justify-content-center"
      >
        <img src="/images/NEU.png" width="55px" />
      </a>

      <Link
        to="/Kanbas/Account"
        id="wd-account-link"
        className={`list-group-item text-center border-0 d-flex align-items-center justify-content-center flex-column ${isActive("/Kanbas/Account") ? "bg-white text-danger" : "bg-black text-white"
          }`}
        style={{ height: "75px" }}
      >
        <FaRegCircleUser
          className={`fs-3 ${isActive("/Kanbas/Account") ? "text-danger" : "text-white"}`}
        />
        <span style={{ fontSize: "12px" }}>Account</span>
      </Link>

      <Link
        to="/Kanbas/Dashboard"
        id="wd-dashboard-link"
        className={`list-group-item text-center border-0 
    ${isActive('/Kanbas/Dashboard') ? 'bg-white text-danger' : 'bg-black text-white'} 
    d-flex align-items-center justify-content-center flex-column`}
        style={{ height: "75px" }}
      >
        <AiOutlineDashboard className={`fs-3 ${isActive('/Kanbas/Dashboard') ? 'text-danger' : 'text-white'}`} />
        <span style={{ fontSize: "12px" }}>Dashboard</span>
      </Link>

      <Link
        to="/Kanbas/Courses"
        id="wd-course-link"
        className={`list-group-item text-center border-0 d-flex align-items-center justify-content-center flex-column ${isActive("/Kanbas/Courses") ? "bg-white text-danger" : "bg-black text-white"
          }`}
        style={{ height: "75px" }}
      >
        <LiaBookSolid
          className={`fs-3 ${isActive("/Kanbas/Courses") ? "text-danger" : "text-white"}`}
        />
        <span style={{ fontSize: "12px" }}>Courses</span>
      </Link>

      <Link
        to="/Kanbas/Calendar"
        id="wd-calendar-link"
        className={`list-group-item text-center border-0 d-flex align-items-center justify-content-center flex-column ${isActive("/Kanbas/Calendar") ? "bg-white text-danger" : "bg-black text-white"
          }`}
        style={{ height: "75px" }}
      >
        <IoCalendarOutline
          className={`fs-3 ${isActive("/Kanbas/Calendar") ? "text-danger" : "text-white"}`}
        />
        <span style={{ fontSize: "12px" }}>Calendar</span>
      </Link>

      <Link
        to="/Kanbas/Inbox"
        id="wd-inbox-link"
        className={`list-group-item text-center border-0 d-flex align-items-center justify-content-center flex-column ${isActive("/Kanbas/Inbox") ? "bg-white text-danger" : "bg-black text-white"
          }`}
        style={{ height: "75px" }}
      >
        <HiOutlineInboxArrowDown
          className={`fs-3 ${isActive("/Kanbas/Inbox") ? "text-danger" : "text-white"}`}
        />
        <span style={{ fontSize: "12px" }}>Inbox</span>
      </Link>

      <Link
        to="/Labs"
        id="wd-labs-link"
        className={`list-group-item text-center border-0 d-flex align-items-center justify-content-center flex-column ${isActive("/Labs") ? "bg-white text-danger" : "bg-black text-white"
          }`}
        style={{ height: "75px" }}
      >
        <FaLaptopCode
          className={`fs-3 ${isActive("/Labs") ? "text-danger" : "text-white"}`}
        />
        <span style={{ fontSize: "12px" }}>Labs</span>
      </Link>
    </div>
  );
}
