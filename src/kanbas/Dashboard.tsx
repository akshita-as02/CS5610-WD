import { Link } from "react-router-dom";
import "./styles.css";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { enrollInCourse, unenrollFromCourse, getCoursesForCurrentUser } from "./enrollmentClient";
import { findAllCourses } from "./Courses/client";


export default function Dashboard({
  courses,
  course,
  setCourse,
  addNewCourse,
  deleteCourse,
  updateCourse,
}: {
  courses: any[];
  course: any;
  setCourse: (course: any) => void;
  addNewCourse: () => void;
  deleteCourse: (courseId: string) => void;
  updateCourse: () => void;
}) {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const [enrolledCourses, setEnrolledCourses] = useState<any[]>([]);
  const [showAllCourses, setShowAllCourses] = useState(false); // State to toggle
  const [enrollments, setEnrollments] = useState<any[]>([]); // State for enrollments

  const updateEnrollments = async () => {
    try {
      // Fetch the user's enrollments from the backend
      const userEnrollments = await getCoursesForCurrentUser();
      setEnrollments(userEnrollments); // Update the state with the fetched data
    } catch (error) {
      console.error("Error updating enrollments:", error);
      alert("Failed to update enrollments. Please try again.");
    }
  };

  const fetchEnrolledCourses = async () => {
    try {
      const fetchedCourses = await getCoursesForCurrentUser();
      setEnrolledCourses(fetchedCourses);
    } catch (error) {
      console.error("Error fetching enrolled courses:", error);
    }
  };

  useEffect(() => {
    if (currentUser.role === "STUDENT") {
      fetchEnrolledCourses();
    }
  }, [currentUser]);

  // Toggle between all courses and enrolled courses
  const toggleCourses = () => {
    setShowAllCourses((prev) => !prev);
  };

  const displayedCourses =
    currentUser.role === "STUDENT"
      ? showAllCourses
        ? courses // Show all courses if toggle is ON
        : enrolledCourses // Show only enrolled courses if toggle is OFF
      : courses;

      const handleEnroll = async (userId: string, courseId: string) => {
        try {
          // Optimistic UI: Immediately update the enrolled courses state
          setEnrolledCourses((prevCourses) => [
            ...prevCourses,
            { _id: courseId, user: userId },
          ]);
      
          // Call the backend API to enroll the user
          const response = await enrollInCourse(userId, courseId);
          if (response.status === 409) {
            alert(response.data.message); // Handle conflict message
            // If enrollment fails, revert the optimistic UI update
            setEnrolledCourses((prevCourses) =>
              prevCourses.filter((course) => course._id !== courseId)
            );
          }
        } catch (error) {
          console.error('Failed to enroll in course:', error);
          alert('Failed to enroll in the course. Please try again.');
          // If the API call fails, revert the optimistic UI update
          setEnrolledCourses((prevCourses) =>
            prevCourses.filter((course) => course._id !== courseId)
          );
        }
      };
      
      const handleUnenroll = async (userId: string, courseId: string) => {
        try {
          // Optimistic UI: Immediately update the enrolled courses state
          setEnrolledCourses((prevCourses) =>
            prevCourses.filter((course) => course._id !== courseId)
          );
      
          // Call the backend API to unenroll the user
          await unenrollFromCourse(userId, courseId);
        } catch (error) {
          console.error('Failed to unenroll from course:', error);
          alert('Failed to unenroll from the course. Please try again.');
          // If the API call fails, revert the optimistic UI update
          setEnrolledCourses((prevCourses) => [
            ...prevCourses,
            { _id: courseId, user: userId },
          ]);
        }
      };
      

  useEffect(() => {
    if (currentUser.role === "STUDENT") {
      updateEnrollments(); // Populate enrollments when the component mounts
    }
  }, []);

  return (
    <div id="wd-dashboard" className="container">
      <h1 id="wd-dashboard-title" className="mt-4">Dashboard</h1>
      <hr />

      {currentUser.role === "STUDENT" && (
        <div className="d-flex">
          {/* <h5>Courses</h5> */}
          <button className="btn btn-secondary ms-auto" onClick={toggleCourses}>
            {showAllCourses ? "Show Enrolled Courses" : "Show All Courses"}
          </button>
        </div>
      )}

      {currentUser.role !== "STUDENT" && (
        <>
          <h5>New Course</h5>
          <button
            className="btn btn-primary mb-4"
            id="wd-add-new-course-click"
            onClick={addNewCourse}
          >
            Add Course
          </button>

          <button
            className="btn btn-warning float-end me-2"
            onClick={updateCourse}
            id="wd-update-course-click"
          >
            Update
          </button>
          <input
            className="form-control mb-2"
            placeholder="Course Name"
            value={course.name}
            onChange={(e) => setCourse({ ...course, name: e.target.value })}
          />
          <textarea
            className="form-control mb-2"
            placeholder="Course Description"
            value={course.description}
            onChange={(e) => setCourse({ ...course, description: e.target.value })}
          />
        </>
      )}

      <h2 id="wd-dashboard-published" className="mt-4">
        {currentUser.role === "STUDENT"
          ? showAllCourses
            ? "All Courses"
            : "Enrolled Courses"
          : "Published Courses"}{" "}
        ({displayedCourses.length})
      </h2>
      <hr />

      <div id="wd-dashboard-courses" className="row row-cols-1 row-cols-md-3 g-4">
        {displayedCourses.map((course) => (
          <div className="wd-dashboard-course col" key={course._id}>
            <div className="card" style={{ minWidth: "250px" }}>
              <div className="img-container">
                <img
                  src={course.img}
                  className="card-img-top"
                  alt={course.name}
                  style={{ height: "200px", objectFit: "cover" }}
                />
              </div>
              <div className="card-body d-flex flex-column">
                <h5
                  className="wd-dashboard-course-title card-title"
                  style={{
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                  }}
                >
                  {course.name}
                </h5>
                <p
                  className="wd-dashboard-course-description card-text"
                  style={{ maxHeight: "100px", overflow: "hidden", textOverflow: "ellipsis" }}
                >
                  {course.description}
                </p>
                <div className="mt-auto d-flex justify-content-between">
                  <Link
                    to={`/Kanbas/Courses/${course._id}/Modules`}
                    className="btn btn-primary"
                  >
                    Go
                  </Link>
                  {currentUser.role === "STUDENT" ? (
                    enrolledCourses.some((c) => c._id === course._id) ? (
                      <button
                        onClick={() => handleUnenroll(currentUser._id, course._id)}
                        className="btn btn-danger"
                      >
                        Unenroll
                      </button>
                    ) : (
                      <button
                        onClick={() => handleEnroll(currentUser._id, course._id)}
                        className="btn btn-success"
                      >
                        Enroll
                      </button>
                    )
                  ) : (
                    <>
                      <button
                        style={{ marginRight: "5px" }}
                        onClick={() => deleteCourse(course._id)}
                        className="btn btn-danger"
                        id="wd-delete-course-click"
                      >
                        Delete
                      </button>
                      <button
                        style={{ marginRight: "5px" }}
                        id="wd-edit-course-click"
                        onClick={() => setCourse(course)}
                        className="btn btn-warning"
                      >
                        Edit
                      </button>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
