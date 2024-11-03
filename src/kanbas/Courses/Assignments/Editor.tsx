import { useParams, Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { RootState } from "../../store/store";
import { addAssignment } from "./reducer";

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
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const assignments = useSelector((state: RootState) => state.assignmentReducer.assignments);

    const assignment = assignments.find((assign) => assign._id === aid) as Assignment;
    const isEditMode = Boolean(assignment);

    const [updatedAssignment, setUpdatedAssignment] = useState<Assignment>({
        _id: isEditMode ? assignment._id : Date.now().toString(),
        title: isEditMode ? assignment.title : "",
        description: isEditMode ? assignment.description : "",
        points: isEditMode ? assignment.points : 0,
        dueDate: isEditMode ? assignment.dueDate : "",
        availableFrom: isEditMode ? assignment.availableFrom : "",
        availableUntil: isEditMode ? assignment.availableUntil : "",
        course: cid!,
    });

    useEffect(() => {
        if (assignment) {
            setUpdatedAssignment(assignment);
        }
    }, [assignment]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { id, value } = e.target;
        setUpdatedAssignment((prev) => ({ ...prev, [id]: value }));
    };

    const handleSave = () => {
        dispatch(addAssignment(updatedAssignment));
        navigate(`/Kanbas/Courses/${cid}/Assignments`);
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
            <br/>
            <textarea
                id="description"
                rows={3}
                value={updatedAssignment.description || 'New Assignment Description'}
                onChange={handleChange}
                style={{ paddingTop: '10px', paddingLeft: '10px', marginBottom: '5px', width: '70%' }}
            />
            <br />
<br/>
            <label htmlFor="points">Points</label>
            <input
                id="points"
                type="number"
                value={updatedAssignment.points}
                onChange={handleChange}
                style={{ marginLeft: '10px', marginBottom: '5px', width: '64%' }}
            /><br />
<br/>
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
                                    style={{ marginBottom: '5px', marginRight:'20px' }}
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
                <button onClick={handleCancel} style={{ marginRight: '10px', borderRadius: '5px', borderWidth: '1px', marginTop:'10px' }}>Cancel</button>
                <button onClick={handleSave} style={{ background: 'red', color: 'white', borderRadius: '5px', borderWidth: '1px' , marginTop:'10px'}}>Save</button>
            </div>
        </div>
    );
}
