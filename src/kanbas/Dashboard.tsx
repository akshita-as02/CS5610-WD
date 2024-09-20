import { Link } from "react-router-dom";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (8)</h2> <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <img src="/images/reactjs.jpg" width={200} />
          <div>
            <Link className="wd-dashboard-course-link"
              to="/Kanbas/Courses/1234/Home">
              CS1234 React JS
            </Link>
            <p className="wd-dashboard-course-title">
              Full Stack software developer
            </p>
            <Link to="/Kanbas/Courses/1234/Home"> Go </Link>
          </div>
        </div>
        
        {/* Course 2 */}
        <div className="wd-dashboard-course">
          <img src="/images/nodejs.png" width={200} alt="Node JS" />
          <div>
            <Link className="wd-dashboard-course-link"
              to="/Kanbas/Courses/2345/Home">
              CS2345 Node JS
            </Link>
            <p className="wd-dashboard-course-title">
              Backend Development with Node.js
            </p>
            <Link to="/Kanbas/Courses/2345/Home"> Go </Link>
          </div>
        </div>

        {/* Course 3 */}
        <div className="wd-dashboard-course">
          <img src="/images/angular.png" width={200} alt="Angular" />
          <div>
            <Link className="wd-dashboard-course-link"
              to="/Kanbas/Courses/3456/Home">
              CS3456 Angular
            </Link>
            <p className="wd-dashboard-course-title">
              Frontend Development with Angular
            </p>
            <Link to="/Kanbas/Courses/3456/Home"> Go </Link>
          </div>
        </div>

        {/* Course 4 */}
        <div className="wd-dashboard-course">
          <img src="/images/python.png" width={200} alt="Python" />
          <div>
            <Link className="wd-dashboard-course-link"
              to="/Kanbas/Courses/4567/Home">
              CS4567 Python
            </Link>
            <p className="wd-dashboard-course-title">
              Python for Data Science
            </p>
            <Link to="/Kanbas/Courses/4567/Home"> Go </Link>
          </div>
        </div>

        {/* Course 5 */}
        <div className="wd-dashboard-course">
          <img src="/images/java.jpg" width={200} alt="Java" />
          <div>
            <Link className="wd-dashboard-course-link"
              to="/Kanbas/Courses/5678/Home">
              CS5678 Java
            </Link>
            <p className="wd-dashboard-course-title">
              Object-Oriented Programming with Java
            </p>
            <Link to="/Kanbas/Courses/5678/Home"> Go </Link>
          </div>
        </div>

        {/* Course 6 */}
        <div className="wd-dashboard-course">
          <img src="/images/htmlcss.jpg" width={200} alt="HTML & CSS" />
          <div>
            <Link className="wd-dashboard-course-link"
              to="/Kanbas/Courses/6789/Home">
              CS6789 HTML & CSS
            </Link>
            <p className="wd-dashboard-course-title">
              Web Development with HTML & CSS
            </p>
            <Link to="/Kanbas/Courses/6789/Home"> Go </Link>
          </div>
        </div>

        {/* Course 7 */}
        <div className="wd-dashboard-course">
          <img src="/images/docker.png" width={200} alt="Docker" />
          <div>
            <Link className="wd-dashboard-course-link"
              to="/Kanbas/Courses/7890/Home">
              CS7890 Docker
            </Link>
            <p className="wd-dashboard-course-title">
              Containerization with Docker
            </p>
            <Link to="/Kanbas/Courses/7890/Home"> Go </Link>
          </div>
        </div>

        {/* Course 8 */}
        <div className="wd-dashboard-course">
          <img src="/images/aws.png" width={200} alt="AWS" />
          <div>
            <Link className="wd-dashboard-course-link"
              to="/Kanbas/Courses/8901/Home">
              CS8901 AWS Cloud
            </Link>
            <p className="wd-dashboard-course-title">
              Cloud Computing with AWS
            </p>
            <Link to="/Kanbas/Courses/8901/Home"> Go </Link>
          </div>
        </div>
      </div>
    </div>
  );
}