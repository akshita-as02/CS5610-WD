import { Link } from "react-router-dom";

export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor" className="container mt-4">
      <h3 className="mb-4">Edit Assignment</h3>

      {/* Assignment Name */}
      <div className="mb-3">
        <label htmlFor="wd-name" className="form-label">Assignment Name</label>
        <input id="wd-name" value="A1 - ENV + HTML" className="form-control" />
      </div>

      {/* Assignment Description */}
      <div className="mb-3">
        <label htmlFor="wd-description" className="form-label">Description</label>
        <div id="wd-description" className="form-control" style={{ height: 'auto', whiteSpace: 'pre-wrap' }}>
          The assignment is <span style={{ color: 'red' }}>available online</span>. <br>
          </br>Submit a link to the landing page of
          your Web application running on Netlify. <br>
          </br>The landing page should include:
          <ul>
            <li>Your full name and section</li>
            <li>Links to each of the lab assignments</li>
            <li>Link to the Kanbas application</li>
            <li>Links to all relevant source code repositories.</li>
          </ul>
        </div>
      </div>

      {/* Points */}
      <div className="mb-3 row">
        <div className="col-md-6">
          <label htmlFor="wd-points" className="form-label">Points</label>
          <input id="wd-points" type="number" defaultValue={100} className="form-control" />
        </div>
        {/* Assignment Group */}
        <div className="col-md-6">
          <label htmlFor="wd-group" className="form-label">Assignment Group</label>
          <select id="wd-group" className="form-select">
            <option>ASSIGNMENTS</option>
          </select>
        </div>
      </div>

      {/* Display Grade As & Submission Type */}
      <div className="mb-3 row">
        <div className="col-md-6">
          <label htmlFor="wd-display-grade-as" className="form-label">Display Grade as</label>
          <select id="wd-display-grade-as" className="form-select">
            <option>Percentage</option>
            <option>Points</option>
          </select>
        </div>
        <div className="col-md-6">
          <label htmlFor="wd-submission-type" className="form-label">Submission Type</label>
          <select id="wd-submission-type" className="form-select">
            <option>Online</option>
          </select>
        </div>
      </div>

      {/* Submission Options */}
      <div className="mb-3">
        <div>
          <label className="form-label">Submission Options</label><br />
          <input id="wd-text-entry" type="checkbox" />
          <label htmlFor="wd-text-entry" className="ms-2">Text Entry</label><br />
          <input id="wd-website-url" type="checkbox" />
          <label htmlFor="wd-website-url" className="ms-2">Website URL</label><br />
          <input id="wd-media-recordings" type="checkbox" />
          <label htmlFor="wd-media-recordings" className="ms-2">Media Recordings</label><br />
          <input id="wd-student-annotation" type="checkbox" />
          <label htmlFor="wd-student-annotation" className="ms-2">Student Annotation</label><br />
          <input id="wd-file-upload" type="checkbox" />
          <label htmlFor="wd-file-upload" className="ms-2">File Uploads</label>
        </div>
      </div>

      {/* Assign To & Due Date */}
      <div className="mb-3 row">
        <div className="col-md-6">
          <label htmlFor="wd-assign-to" className="form-label">Assign To</label>
          <select id="wd-assign-to" className="form-select">
            <option>Everyone</option>
          </select>
        </div>
        <div className="col-md-6">
          <label htmlFor="wd-due-date" className="form-label">Due</label>
          <input id="wd-due-date" type="date" defaultValue="2024-05-13" className="form-control" />
        </div>
      </div>

      {/* Available From & Until */}
      <div className="mb-3 row">
        <div className="col-md-6">
          <label htmlFor="wd-available-from" className="form-label">Available from</label>
          <input id="wd-available-from" type="date" defaultValue="2024-05-06" className="form-control" />
        </div>
        <div className="col-md-6">
          <label htmlFor="wd-available-until" className="form-label">Until</label>
          <input id="wd-available-until" type="date" defaultValue="2024-05-20" className="form-control" />
        </div>
      </div>

      {/* Cancel and Save Buttons */}
      <div className="d-flex justify-content-end">
        <Link to="/Kanbas/Courses/1234/Assignments">
          <button className="btn btn-secondary me-2">Cancel</button>
        </Link>
        <Link to="/Kanbas/Courses/1234/Assignments">
          <button className="btn" style={{ backgroundColor: 'red', color: 'white' }}>Save</button>
        </Link>
      </div>
    </div>
  );
}
