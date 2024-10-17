import { NavLink, useParams } from "react-router-dom";
import * as db from "../Database"; // Adjust the import according to your file structure

export default function CoursesNavigation() {
  const { cid } = useParams(); // Get the course ID from the URL
  const course = db.courses.find((course) => course._id === cid); // Find the course by ID

  if (!course) {
    return <div>Course not found</div>; // when course is not found
  }

  const links = [
    { name: "Home", path: "Home" },
    { name: "Modules", path: "Modules" },
    { name: "Piazza", path: "Piazza" },
    { name: "Zoom", path: "Zoom" },
    { name: "Assignments", path: "Assignments" }, 
    { name: "Quizzes", path: "Quizzes" },
    { name: "Grades", path: "Grades" },
    { name: "People", path: "People" },
  ];

  return (
    <div id="wd-courses-navigation" className="wd list-group rounded-0 invisible-border">
      {links.map((link) => (
        <NavLink
          key={link.name}
          to={`/Kanbas/Courses/${cid}/${link.path}`}
          id={`wd-course-${link.name.toLowerCase()}-link`}
          className={({ isActive }) => `list-group-item ${isActive ? 'text-black' : 'text-danger'} wd-navigation-link ${isActive ? 'active' : ''}`}
          style={{ border: 'none', outline: 'none' }}
        >
          {link.name}
        </NavLink>
      ))}
    </div>
  );
}
