import { NavLink } from "react-router-dom";

export default function CoursesNavigation() {
  return (
    <div id="wd-courses-navigation" className="wd list-group rounded-0 invisible-border"> {/* Added invisible-border class */}
      <NavLink
        to="/Kanbas/Courses/1234/Home"
        id="wd-course-home-link"
        className={({ isActive }) => `list-group-item ${isActive ? 'text-black' : 'text-danger'} wd-navigation-link ${isActive ? 'active' : ''}`}
        style={{ border: 'none', outline: 'none' }}
      >
        Home
      </NavLink>
      <NavLink
        to="/Kanbas/Courses/1234/Modules"
        id="wd-course-modules-link"
        className={({ isActive }) => `list-group-item ${isActive ? 'text-black' : 'text-danger'} wd-navigation-link ${isActive ? 'active' : ''}`}
        style={{ border: 'none', outline: 'none' }}
      >
        Modules
      </NavLink>
      <NavLink
        to="/Kanbas/Courses/1234/Piazza"
        id="wd-course-piazza-link"
        className={({ isActive }) => `list-group-item ${isActive ? 'text-black' : 'text-danger'} wd-navigation-link ${isActive ? 'active' : ''}`}
        style={{ border: 'none', outline: 'none' }}
      >
        Piazza
      </NavLink>
      <NavLink
        to="/Kanbas/Courses/1234/Zoom"
        id="wd-course-zoom-link"
        className={({ isActive }) => `list-group-item ${isActive ? 'text-black' : 'text-danger'} wd-navigation-link ${isActive ? 'active' : ''}`}
        style={{ border: 'none', outline: 'none' }}
      >
        Zoom
      </NavLink>
      <NavLink
        to="/Kanbas/Courses/1234/Assignments"
        id="wd-course-assignments-link"
        className={({ isActive }) => `list-group-item ${isActive ? 'text-black' : 'text-danger'} wd-navigation-link ${isActive ? 'active' : ''}`}
        style={{ border: 'none', outline: 'none' }}
      >
        Assignments
      </NavLink>
      <NavLink
        to="/Kanbas/Courses/1234/Quizzes"
        id="wd-course-quizzes-link"
        className={({ isActive }) => `list-group-item ${isActive ? 'text-black' : 'text-danger'} wd-navigation-link ${isActive ? 'active' : ''}`}
        style={{ border: 'none', outline: 'none' }}
      >
        Quizzes
      </NavLink>
      <NavLink
        to="/Kanbas/Courses/1234/People"
        id="wd-course-people-link"
        className={({ isActive }) => `list-group-item ${isActive ? 'text-black' : 'text-danger'} wd-navigation-link ${isActive ? 'active' : ''}`}
        style={{ border: 'none', outline: 'none' }}
      >
        People
      </NavLink>
    </div>
  );
}
