import { FaSearch, FaPlus, FaCheckCircle } from "react-icons/fa";
import { MdOutlineAssignment } from "react-icons/md";

export default function Assignments() {
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

            <ul id="wd-assignment-list" className="list-unstyled">
                {/* Assignment 1 */}
                <li className="wd-assignment-list-item d-flex align-items-start">
                    <div className="wd-icon">
                        <MdOutlineAssignment style={{ fontSize: '1.5rem', color: 'green' }} />
                    </div>
                    <div className="flex-grow-1">
                        <a
                            className="wd-assignment-link"
                            href="#/Kanbas/Courses/1234/Assignments/123"
                            style={{ fontWeight: 'bold', color: 'black' }}
                        >
                            A1 - ENV + HTML
                        </a>
                        <div>
                            Multiple Modules | <strong>Not available until</strong> May 6 at 12:00am | <br />
                            <strong>Due</strong> May 13 at 11:59pm | 100 pts
                        </div>
                    </div>
                    <div className="wd-status-icon">
                        <FaCheckCircle style={{ color: 'green' }} /> {/* Green check icon */}
                    </div>
                </li>

                {/* Assignment 2 */}
                <li className="wd-assignment-list-item d-flex align-items-start">
                    <div className="wd-icon">
                        <MdOutlineAssignment style={{ fontSize: '1.5rem', color: 'green' }} />
                    </div>
                    <div className="flex-grow-1">
                        <a
                            className="wd-assignment-link"
                            href="#/Kanbas/Courses/1234/Assignments/124"
                            style={{ fontWeight: 'bold', color: 'black' }}
                        >
                            A2 - CSS + BOOTSTRAP
                        </a>
                        <div>
                            Multiple Modules | <strong>Not available until</strong> May 13 at 12:00am | <br />
                            <strong>Due</strong> May 20 at 11:59pm | 100 pts
                        </div>
                    </div>
                    <div className="wd-status-icon">
                        <FaCheckCircle style={{ color: 'green' }} /> {/* Green check icon */}
                    </div>
                </li>

                {/* Assignment 3 */}
                <li className="wd-assignment-list-item d-flex align-items-start">
                    <div className="wd-icon">
                        <MdOutlineAssignment style={{ fontSize: '1.5rem', color: 'green' }} />
                    </div>
                    <div className="flex-grow-1">
                        <a
                            className="wd-assignment-link"
                            href="#/Kanbas/Courses/1234/Assignments/125"
                            style={{ fontWeight: 'bold', color: 'black' }}
                        >
                            A3 - JAVASCRIPT + REACT
                        </a>
                        <div>
                            Multiple Modules | <strong>Not available until</strong> May 20 at 12:00am | <br />
                            <strong>Due</strong> May 27 at 11:59pm | 100 pts
                        </div>
                    </div>
                    <div className="wd-status-icon">
                        <FaCheckCircle style={{ color: 'green' }} /> {/* Green check icon */}
                    </div>
                </li>
            </ul>
        </div>
    );
}
