import { useParams, Link } from "react-router-dom";
import assignmentsData from "../../Database/assignments.json"; // Adjust the import path as necessary

export default function AssignmentEditor() {
    const { cid, aid } = useParams(); // Get the course ID and assignment ID from the URL

    // Find the selected assignment based on the assignment ID
    const assignment = assignmentsData.find((assign:any) => assign._id === aid);

    // If the assignment is not found
    if (!assignment) {
        return <div>Assignment not found</div>;
    }

    return (
        <div id="wd-assignments-editor">
            {/* Assignment Name */}
            <label htmlFor="wd-name">Assignment Name</label><br />
            <input id="wd-name" defaultValue={assignment.title} /><br /><br />

            {/* Assignment Description */}
            <textarea id="wd-description" rows={4} cols={50} defaultValue={assignment.description || ""}>
                {/* Placeholder for the description */}
            </textarea><br /><br />

            {/* Points */}
            <table>
                <tbody>
                    <tr>
                        <td align="right" valign="top">
                            <label htmlFor="wd-points">Points</label>
                        </td>
                        <td>
                            <input id="wd-points" type="number" defaultValue={assignment.points || 100} />
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
                            <input id="wd-due-date" type="date" defaultValue={assignment.dueDate || "2024-05-13"} />
                        </td>
                    </tr>

                    {/* Available From & Until */}
                    <tr>
                        <td align="right" valign="top">
                            <label htmlFor="wd-available-from">Available from</label>
                        </td>
                        <td>
                            <input id="wd-available-from" type="date" defaultValue={assignment.availableFrom || "2024-05-06"} />
                            <span> Until </span>
                            <input id="wd-available-until" type="date" defaultValue={assignment.availableUntil || "2024-05-20"} />
                        </td>
                    </tr>
                </tbody>
            </table>

            <tr>
                <td colSpan={2}>
                    <Link to={`/Kanbas/Courses/${cid}/Assignments`}>
                        <button style={{ marginRight: '10px' }}>Cancel</button>
                    </Link>
                    <Link to={`/Kanbas/Courses/${cid}/Assignments`}>
                        <button style={{background: 'red', color: 'white'}}>Save</button>
                    </Link>
                </td>
            </tr>
        </div>
    );
}
