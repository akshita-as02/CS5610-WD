import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import * as assignmentClient from "./client";
import * as coursesClient from "../client";
interface Assignment {
  _id: string;
  title: string;
  description: string;
  points: number;
  dueDate: string;
  availableFrom: string;
  availableUntil: string;
  course: string;
}

export default function AssignmentEditor() {
  const { cid, aid } = useParams();
  const navigate = useNavigate();

  const [updatedAssignment, setUpdatedAssignment] = useState<Assignment>({
    _id: "",
    title: "",
    description: "",
    points: 0,
    dueDate: "",
    availableFrom: "",
    availableUntil: "",
    course: cid || "",
  });

  const isEditMode = Boolean(aid);

  useEffect(() => {
    if (isEditMode) {
      assignmentClient.getAssignmentById(aid!).then((assignment) => {
        setUpdatedAssignment(assignment);
      }).catch((err) => {
        console.error("Error fetching assignment:", err);
      });
    }
  }, [aid, isEditMode]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setUpdatedAssignment((prev) => ({ ...prev, [id]: value }));
  };

  const handleSave = () => {
    if (isEditMode) {
      // Update the existing assignment
      assignmentClient.updateAssignment(updatedAssignment).then(() => {
        navigate(`/Kanbas/Courses/${cid}/Assignments`);
      }).catch((err) => {
        console.error("Error updating assignment:", err);
      });
    } else {
      // Create a new assignment
      assignmentClient.createAssignment(updatedAssignment).then(() => {
        navigate(`/Kanbas/Courses/${cid}/Assignments`);
      }).catch((err) => {
        console.error("Error creating assignment:", err);
      });
    }
  };

  const handleCancel = () => {
    navigate(`/Kanbas/Courses/${cid}/Assignments`);
  };

  return (
    <div id="wd-assignments-editor">
      <label htmlFor="title">Assignment Name</label><br />
      <input
        id="title"
        value={updatedAssignment.title || 'New Assignment Name'}
        onChange={handleChange}
        style={{ marginBottom: '5px', width: '70%', paddingLeft: '10px' }}
      /><br />
      <br />
      <textarea
        id="description"
        rows={3}
        value={updatedAssignment.description || 'New Assignment Description'}
        onChange={handleChange}
        style={{ paddingTop: '10px', paddingLeft: '10px', marginBottom: '5px', width: '70%' }}
      />
      <br />
      <br />
      <label htmlFor="points">Points</label>
      <input
        id="points"
        type="number"
        value={updatedAssignment.points}
        onChange={handleChange}
        style={{ marginLeft: '10px', marginBottom: '5px', width: '64%' }}
      /><br />
      <br />
      <div style={{ border: '1px solid black', padding: '20px', borderRadius: '5px', width: '70%' }}>
        <table style={{ width: '80%', tableLayout: 'fixed' }}>
          <tbody>
            <tr>
              <td><label htmlFor="assignTo">Assign To</label></td>
              <td>
                <select id="assignTo" onChange={handleChange} style={{ marginBottom: '5px', width: '50%' }}>
                  <option>Everyone</option>
                </select>
              </td>
            </tr>
            <tr>
              <td><label htmlFor="group">Assignment Group</label></td>
              <td>
                <select id="group" onChange={handleChange} style={{ marginBottom: '5px' }}>
                  <option>ASSIGNMENTS</option>
                </select>
              </td>
            </tr>
            <tr>
              <td><label htmlFor="displayGradeAs">Display Grade as</label></td>
              <td>
                <select id="displayGradeAs" onChange={handleChange} style={{ marginBottom: '5px' }}>
                  <option>Percentage</option>
                  <option>Points</option>
                </select>
              </td>
            </tr>
            <tr>
              <td><label htmlFor="submissionType">Submission Type</label></td>
              <td>
                <select id="submissionType" onChange={handleChange}>
                  <option>Online</option>
                </select>
                <div style={{ marginTop: '10px', marginBottom: '5px' }}>
                  <input id="textEntry" type="checkbox" onChange={handleChange} />
                  <label htmlFor="textEntry" style={{ marginLeft: '5px' }}>Text Entry</label><br />
                  <input id="websiteUrl" type="checkbox" onChange={handleChange} />
                  <label htmlFor="websiteUrl" style={{ marginLeft: '5px' }}>Website URL</label><br />
                  <input id="mediaRecordings" type="checkbox" onChange={handleChange} />
                  <label htmlFor="mediaRecordings" style={{ marginLeft: '5px' }}>Media</label><br />
                  <input id="studentAnnotation" type="checkbox" onChange={handleChange} />
                  <label htmlFor="fileUpload" style={{ marginLeft: '5px' }}>File Uploads</label>
                </div>
              </td>
            </tr>
            <tr>
              <td><label htmlFor="dueDate">Due</label></td>
              <td>
                <input
                  id="dueDate"
                  type="date"
                  value={updatedAssignment.dueDate || ""}
                  onChange={handleChange}
                  style={{ marginBottom: '5px', width: '310%' }}
                />
              </td>
            </tr>
            <tr>
              <td><label htmlFor="availableFrom">Available From</label></td>
              <td>
                <input
                  id="availableFrom"
                  type="date"
                  value={updatedAssignment.availableFrom || ""}
                  onChange={handleChange}
                  style={{ marginBottom: '5px', marginRight: '20px' }}
                />
              </td>
              <td><label htmlFor="availableUntil" style={{ marginLeft: '80px' }}>Until</label></td>
              <td>
                <input
                  id="availableUntil"
                  type="date"
                  value={updatedAssignment.availableUntil || ""}
                  onChange={handleChange}
                  style={{ marginBottom: '5px' }}
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div style={{ textAlign: 'right', marginBottom: '5px', width: '70%' }}>
        <button onClick={handleCancel} style={{ marginRight: '10px', borderRadius: '5px', borderWidth: '1px', marginTop: '10px' }}>Cancel</button>
        <button onClick={handleSave} style={{ background: 'red', color: 'white', borderRadius: '5px', borderWidth: '1px', marginTop: '10px' }}>Save</button>
      </div>
    </div>
  );
}
