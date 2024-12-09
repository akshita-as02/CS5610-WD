import { NavLink, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchAllCourses, findUsersForCourse } from "./client";

export default function CoursesNavigation() {
  const { cid } = useParams(); // Get the course ID from the URL
  const [course, setCourse] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  // const [users, setUsers] = useState<any[]>([]);

  // Fetch course details
  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const courses = await fetchAllCourses();
        const foundCourse = courses.find((course: any) => course._id === cid);
        if (foundCourse) {
          setCourse(foundCourse);
          setError(null);
        } else {
          setError("Course not found");
        }
      } catch (err) {
        setError("Failed to fetch courses. Please try again later.");
      }
    };

    fetchCourse();
  }, [cid]);

  // // Fetch users for the course
  // useEffect(() => {
  //   const fetchUsers = async () => {
  //     try {
  //       if (cid) {
  //         const fetchedUsers = await findUsersForCourse(cid);
  //         setUsers(fetchedUsers);
  //         setError(null);
  //       } else {
  //         setError("Invalid course ID");
  //       }
  //     } catch (err) {
  //       setError("Failed to fetch users. Please try again later.");
  //     }
  //   };

  //   fetchUsers();
  // }, [cid]);

  if (error) {
    return <div>{error}</div>;
  }

  if (!course) {
    return <div>Loading...</div>;
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
          className={({ isActive }) =>
            `list-group-item ${isActive ? "text-black" : "text-danger"} wd-navigation-link ${
              isActive ? "active" : ""
            }`
          }
          style={{ border: "none", outline: "none" }}
        >
          {link.name}
        </NavLink>
      ))}

      {/* <div>
        <h2 className="mt-4">People</h2>
        <PeopleTable users={users} />
      </div> */}
    </div>
  );
}
