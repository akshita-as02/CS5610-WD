import { Link } from "react-router-dom";
import "./styles.css";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";

// Dashboard component
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

  // State to manage enrollments
  const [enrollments, setEnrollments] = useState<any[]>([]);
  const [showAllCourses, setShowAllCourses] = useState(false);

  // Load initial enrollments from localStorage
  useEffect(() => {
    const storedEnrollments = JSON.parse(localStorage.getItem("enrollments") || "[]");
    const userEnrollments = storedEnrollments.filter((enrollment: any) => enrollment.user === currentUser.id);
    setEnrollments(userEnrollments);
  }, [currentUser.id]);

  // Toggle function for course visibility
  const toggleEnrollments = () => {
    setShowAllCourses((prev) => !prev);
  };

  // Enroll in a course
  const enroll = (courseId: string) => {
    const newEnrollment = {
      _id: `${Date.now()}`, // Generate a unique ID
      user: currentUser.id,
      course: courseId,
    };
    const updatedEnrollments = [...enrollments, newEnrollment];
    setEnrollments(updatedEnrollments);
    localStorage.setItem("enrollments", JSON.stringify(updatedEnrollments));
  };

  // Unenroll from a course
  const unenroll = (courseId: string) => {
    const updatedEnrollments = enrollments.filter((enrollment) => enrollment.course !== courseId);
    setEnrollments(updatedEnrollments);
    localStorage.setItem("enrollments", JSON.stringify(updatedEnrollments));
  };

  return (
    <div id="wd-dashboard" className="container">
      <h1 id="wd-dashboard-title" className="mt-4">Dashboard</h1>
      <hr />

      {currentUser.role === 'STUDENT' && (
        <button
          className="btn btn-info float-end me-2 mb-4"
          onClick={toggleEnrollments}
          style={{ background: '#0d6efd', color: 'white' }}
        >
          {showAllCourses ? "Show Enrolled Courses" : "Show All Courses"}
        </button>
      )}

      {currentUser.role !== 'STUDENT' && (
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

      <h2 id="wd-dashboard-published" className="mt-4">Published Courses ({courses.length})</h2>
      <hr />

      <div id="wd-dashboard-courses" className="row row-cols-1 row-cols-md-3 g-4">
        {(currentUser.role === 'STUDENT' && showAllCourses ? courses : (currentUser.role !== 'STUDENT' ? courses : enrollments.map(enrollment => courses.find(course => course._id === enrollment.course))))
          .map((course) => (
            course && (
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
                    <h5 className="wd-dashboard-course-title card-title" style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                      {course.name}
                    </h5>
                    <p className="wd-dashboard-course-description card-text" style={{ maxHeight: "100px", overflow: "hidden", textOverflow: "ellipsis" }}>
                      {course.description}
                    </p>
                    <div className="mt-auto d-flex justify-content-between">
                      <Link
                        to={currentUser.role !== 'STUDENT' || enrollments.some(enrollment => enrollment.course === course._id)
                          ? `/Kanbas/Courses/${course._id}/Modules`
                          : '#'}
                        className={`btn btn-primary ${currentUser.role === 'STUDENT' && !enrollments.some(enrollment => enrollment.course === course._id) ? 'disabled' : ''}`}
                        onClick={(event) => {
                          if (currentUser.role === 'STUDENT' && !enrollments.some(enrollment => enrollment.course === course._id)) {
                            event.preventDefault(); // Prevent navigation if not enrolled
                            alert("You must enroll in this course to access it."); // Optional alert message
                          }
                        }}
                      >
                        Go
                      </Link>
                      {currentUser.role === 'STUDENT' ? (
                        enrollments.some(enrollment => enrollment.course === course._id) ? (
                          <button
                            onClick={(event) => {
                              event.preventDefault();
                              unenroll(course._id);
                            }}
                            className="btn btn-danger"
                          >
                            Unenroll
                          </button>
                        ) : (
                          <button
                            onClick={(event) => {
                              event.preventDefault();
                              enroll(course._id);
                            }}
                            className="btn btn-success"
                          >
                            Enroll
                          </button>
                        )
                      ) : (
                        <>
                          <button
                            style={{ marginRight: '5px' }}
                            onClick={(event) => {
                              event.preventDefault();
                              deleteCourse(course._id);
                            }}
                            className="btn btn-danger"
                            id="wd-delete-course-click"
                          >
                            Delete
                          </button>
                          <button
                            style={{ marginRight: '5px' }}
                            id="wd-edit-course-click"
                            onClick={(event) => {
                              event.preventDefault();
                              setCourse(course);
                            }}
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
            )
          ))}
      </div>
    </div>
  );
}
