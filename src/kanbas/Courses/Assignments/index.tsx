import { FaSearch, FaPlus, FaCheckCircle } from "react-icons/fa";
import { MdOutlineAssignment } from "react-icons/md";
import { useParams, Link } from "react-router-dom";
import assignmentsData from "../../Database/assignments.json"; // Adjust the import path as necessary

export default function Assignments() {
    const { cid } = useParams(); // Get the course ID from the URL

    // Filter assignments based on the course ID
    const assignments = assignmentsData.filter((assignment: any) => assignment.course === cid);

    return (
        <div id="wd-assignments" className="p-3">
            {/* Search and Buttons Section */}
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
                    assignments.map((assignment) => (
                        <li key={assignment._id} className="wd-assignment-list-item d-flex align-items-start">
                            <div className="wd-icon">
                                <MdOutlineAssignment style={{ fontSize: '1.5rem', color: 'green' }} />
                            </div>
                            <div className="flex-grow-1">
                                <Link
                                    className="wd-assignment-link"
                                    to={`/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}
                                    style={{ fontWeight: 'bold', color: 'black' }}
                                >
                                    {assignment.title}
                                </Link>
                                <div>
                                    <strong>Due</strong> Date Placeholder | 100 pts
                                </div>
                            </div>
                            <div className="wd-status-icon">
                                <FaCheckCircle style={{ color: 'green' }} />
                            </div>
                        </li>
                    ))
                ) : (
                    <li>No assignments available for this course.</li>
                )}
            </ul>

        </div>
    );
}
