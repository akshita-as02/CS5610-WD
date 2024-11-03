import { FaSearch, FaPlus, FaCheckCircle } from "react-icons/fa";
import { MdOutlineAssignment } from "react-icons/md";
import { AiFillDelete } from "react-icons/ai"; // Import the delete icon
import { useParams, Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Key } from "react";
import { RootState } from "../../store/store";
import { deleteAssignment } from "./reducer"; // Import your delete action
import { addAssignment } from "./reducer";
import { useState } from "react";
import ConfirmationDialog from "./ConfirmationDialogProps";

export default function Assignments() {
    const { cid } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const assignments = useSelector((state: RootState) =>
        state.assignmentReducer.assignments.filter((assignment: any) => assignment.course === cid)
    );

    const [dialogOpen, setDialogOpen] = useState(false);
    const [assignmentToDelete, setAssignmentToDelete] = useState<string | null>(null);

    const handleDeleteClick = (assignmentId: string) => {
        setAssignmentToDelete(assignmentId);
        setDialogOpen(true);
    };

    const handleConfirmDelete = () => {
        if (assignmentToDelete) {
            dispatch(deleteAssignment(assignmentToDelete));
            setAssignmentToDelete(null);
        }
        setDialogOpen(false); 
    };

    const handleCancelDelete = () => {
        setAssignmentToDelete(null); 
        setDialogOpen(false);
    };

    
    return (
        <div id="wd-assignments" className="p-3">
            <div className="d-flex justify-content-between align-items-center mb-3">
                <div className="input-group" style={{ width: '50%' }}>
                    <span className="input-group-text">
                        <FaSearch />
                    </span>
                    <input
                        id="wd-search-assignment"
                        className="form-control"
                        placeholder="Search for Assignments"
                    />
                </div>
                <div>
                    <button
                        id="wd-add-assignment-group"
                        className="btn btn-light me-2"
                        style={{ color: 'black' }}
                    >
                        + Group
                    </button>
                    <button
                        id="wd-add-assignment"
                        className="btn btn-danger"
                        onClick={() => navigate(`/Kanbas/Courses/${cid}/Assignments/Editor`)}
                    >
                        + Assignment
                    </button>
                </div>
            </div>
            <h3
                id="wd-assignments-title"
                className="d-flex justify-content-between align-items-center bg-secondary text-white p-3 rounded"
                style={{ backgroundColor: 'grey', borderRadius: '8px' }}
            >
                <span className="fw-bold" style={{ fontSize: '1.5rem', color: "black" }}>ASSIGNMENTS</span>
                <div className="d-flex align-items-center">
                    <span className="small me-3" style={{ fontSize: '0.9rem', color: 'black' }}>40% of Total</span>
                    <button className="btn btn-outline-secondary" style={{ color: 'black' }}>
                        <FaPlus />
                    </button>
                </div>
            </h3>

            <ul id="wd-assignment-list" className="list-unstyled assignment-list">
                {assignments.length > 0 ? (
                    assignments.map((assignment: { _id: Key | null | undefined; title: string; dueDate: string; points: number }) => {
                        const assignmentId = assignment._id as string; // Type assertion to string
                        return (
                            <li key={assignmentId} className="wd-assignment-list-item d-flex align-items-start">
                                <div className="wd-icon">
                                    <MdOutlineAssignment style={{ fontSize: '1.5rem', color: 'green' }} />
                                </div>
                                <div className="flex-grow-1">
                                    <Link
                                        className="wd-assignment-link"
                                        to={`/Kanbas/Courses/${cid}/Assignments/${assignmentId}`} // Ensure the link navigates correctly to the editor
                                        style={{ fontWeight: 'bold', color: 'black' }}
                                    >
                                        {assignment.title}
                                    </Link>
                                    <div>
                                        <strong>Due</strong> {assignment.dueDate || "Date Placeholder"} | {assignment.points} pts
                                    </div>
                                </div>
                                <div className="wd-status-icon d-flex align-items-center">
                                    <FaCheckCircle style={{ color: 'green' }} />
                                    <AiFillDelete 
                                        style={{ cursor: "pointer", color: 'red', marginLeft: '10px' }} 
                                        onClick={() => handleDeleteClick(assignmentId)} 
                                    />
                                </div>
                            </li>
                        );
                    })
                ) : (
                    <li>No assignments available for this course.</li>
                )}
            </ul>
            {dialogOpen && (
                <ConfirmationDialog 
                    onConfirm={handleConfirmDelete}
                    onCancel={handleCancelDelete}
                    message={`Are you sure you want to delete the assignment "${assignmentToDelete}"?`} // Update this message to show assignment details
                />
            )}
        </div>
    );
}
