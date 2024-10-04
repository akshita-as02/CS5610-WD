import { Link } from "react-router-dom";
import "./styles.css";

export default function Dashboard() {
  const courses = [
    {
      id: "1234",
      title: "CS1234 React JS",
      description: "Full Stack software developer",
      imgSrc: "/images/reactjs.jpg",
    },
    {
      id: "2345",
      title: "CS2345 Node JS",
      description: "Backend Development with Node.js",
      imgSrc: "/images/nodejs.png",
    },
    {
      id: "3456",
      title: "CS3456 Angular",
      description: "Frontend Development with Angular",
      imgSrc: "/images/angular.png",
    },
    {
      id: "4567",
      title: "CS4567 Python",
      description: "Python for Data Science",
      imgSrc: "/images/python.png",
    },
    {
      id: "5678",
      title: "CS5678 Java",
      description: "Object-Oriented Programming with Java",
      imgSrc: "/images/java.jpg",
    },
    {
      id: "6789",
      title: "CS6789 HTML & CSS",
      description: "Web Development with HTML & CSS",
      imgSrc: "/images/htmlcss.jpg",
    },
    {
      id: "7890",
      title: "CS7890 Docker",
      description: "Containerization with Docker",
      imgSrc: "/images/docker.png",
    },
    {
      id: "8901",
      title: "CS8901 AWS Cloud",
      description: "Cloud Computing with AWS",
      imgSrc: "/images/aws.png",
    },
  ];

  return (
    <div id="wd-dashboard" className="container">
      <h1 id="wd-dashboard-title" className="mt-4">Dashboard</h1>
      <hr />
      <h2 id="wd-dashboard-published" className="mt-4">Published Courses ({courses.length})</h2>
      <hr />
      <div id="wd-dashboard-courses" className="row row-cols-1 row-cols-md-3 g-4"> {/* Adjust columns for responsiveness */}
        {courses.map((course) => (
          <div className="wd-dashboard-course col">
            <div className="card rounded-3 overflow-hidden" style={{ height: "400px" }}> {/* Set fixed height for card */}
              <Link className="wd-dashboard-course-link text-decoration-none text-dark" to={`/Kanbas/Courses/${course.id}/Home`}>
                <div className="img-container">
                  <img
                    src={course.imgSrc}
                    className="card-img-top"
                    alt={course.title}
                  />
                </div>
                <div className="card-body d-flex flex-column">
                  <h5 className="wd-dashboard-course-title card-title">{course.title}</h5>
                  <p className="wd-dashboard-course-title card-text">{course.description}</p>
                  <div style={{ marginTop: '20px', marginBottom: 'auto' }}> {/* Add spacing here */}
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
