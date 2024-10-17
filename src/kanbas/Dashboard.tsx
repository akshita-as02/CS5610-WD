import { Link } from "react-router-dom";
import * as db from "./Database";
import "./styles.css";

export default function Dashboard() {
  const courses = db.courses; 

  return (
    <div id="wd-dashboard" className="container">
      <h1 id="wd-dashboard-title" className="mt-4">Dashboard</h1>
      <hr />
      <h2 id="wd-dashboard-published" className="mt-4">Published Courses ({courses.length})</h2>
      <hr />
      <div id="wd-dashboard-courses" className="row row-cols-1 row-cols-md-3 g-4">
        {courses.map((course) => (
          <div className="wd-dashboard-course col" key={course._id}>
            <div className="card rounded-3 overflow-hidden" style={{ height: "400px" }}>
              <Link className="wd-dashboard-course-link text-decoration-none text-dark" to={`/Kanbas/Courses/${course._id}/Modules`}>
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
                  <p className="wd-dashboard-course-description card-text overflow-y-hidden" style={{ maxHeight: "100px", overflow: "hidden", textOverflow: "ellipsis" }}>
                    {course.description}
                  </p>
                  <div style={{ marginTop: 'auto' }}> 
                    <button className="btn btn-primary w-100"> Go </button>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
