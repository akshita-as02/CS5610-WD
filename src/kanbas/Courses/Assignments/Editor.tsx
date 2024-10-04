import { Link } from "react-router-dom";
export default function AssignmentEditor() {
    return (
      <div id="wd-assignments-editor">
        {/* Assignment Name */}
        <label htmlFor="wd-name">Assignment Name</label><br />
        <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
  
        {/* Assignment Description */}
        <textarea id="wd-description" rows={4} cols={50}>
          The assignment is available online. Submit a link to the landing page of 
          your Web application running on Netlify. The landing page should include 
          the following: Your full name and section, Links to each of the lab 
          assignments, Link to the Kanbas application, Links to all relevant source code repositories.
        </textarea><br /><br />
  
        {/* Points */}
        <table>
          <tbody>
            <tr>
              <td align="right" valign="top">
                <label htmlFor="wd-points">Points</label>
              </td>
              <td>
                <input id="wd-points" type="number" defaultValue={100} />
              </td>
            </tr>
  
            {/* Assignment Group */}
            <tr>
              <td align="right" valign="top">
                <label htmlFor="wd-group">Assignment Group</label>
              </td>
              <td>
                <select id="wd-group">
                  <option>ASSIGNMENTS</option>
                </select>
              </td>
            </tr>
  
            {/* Display Grade As */}
            <tr>
              <td align="right" valign="top">
                <label htmlFor="wd-display-grade-as">Display Grade as</label>
              </td>
              <td>
                <select id="wd-display-grade-as">
                  <option>Percentage</option>
                  <option>Points</option>
                </select>
              </td>
            </tr>
  
            {/* Submission Type */}
            <tr>
              <td align="right" valign="top">
                <label htmlFor="wd-submission-type">Submission Type</label>
              </td>
              <td>
                <select id="wd-submission-type">
                  <option>Online</option>
                </select>
                <div style={{ marginTop: '10px' }}>
                  <input id="wd-text-entry" type="checkbox" />
                  <label htmlFor="wd-text-entry">Text Entry</label><br />
                  <input id="wd-website-url" type="checkbox" />
                  <label htmlFor="wd-website-url">Website URL</label><br />
                  <input id="wd-media-recordings" type="checkbox" />
                  <label htmlFor="wd-media-recordings">Media Recordings</label><br />
                  <input id="wd-student-annotation" type="checkbox" />
                  <label htmlFor="wd-student-annotation">Student Annotation</label><br />
                  <input id="wd-file-upload" type="checkbox" />
                  <label htmlFor="wd-file-upload">File Uploads</label>
                </div>
              </td>
            </tr>
  
            {/* Assign To */}
            <tr>
              <td align="right" valign="top">
                <label htmlFor="wd-assign-to">Assign To</label>
              </td>
              <td>
                <select id="wd-assign-to">
                  <option>Everyone</option>
                </select>
              </td>
            </tr>
  
            {/* Due Date */}
            <tr>
              <td align="right" valign="top">
                <label htmlFor="wd-due-date">Due</label>
              </td>
              <td>
                <input id="wd-due-date" type="date" defaultValue="2024-05-13" />
              </td>
            </tr>
  
            {/* Available From & Until */}
            <tr>
              <td align="right" valign="top">
                <label htmlFor="wd-available-from">Available from</label>
              </td>
              <td>
                <input id="wd-available-from" type="date" defaultValue="2024-05-06" />
                <span> Until </span>
                <input id="wd-available-until" type="date" defaultValue="2024-05-20" />
              </td>
            </tr>
          </tbody>
        </table>
        <tr>
            <td colSpan={2}>
                <Link to="/Kanbas/Courses/1234/Assignments">
                    <button style={{ marginRight: '10px' }}>Cancel</button>
                </Link>
                <Link to="/Kanbas/Courses/1234/Assignments">
                    <button>Save</button>
                </Link>
            </td>
        </tr>
      </div>
    );
  }
  
