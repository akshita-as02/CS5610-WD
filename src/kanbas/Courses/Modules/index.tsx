import { useState } from "react";
import { BsGripVertical } from "react-icons/bs"; // Import the icon
import { FaCheckCircle, FaTimesCircle, FaRedoAlt } from "react-icons/fa"; // Import additional icons for actions
import ModulesControls from "./ModulesControls"; 
import ModuleControlButtons from "./ModuleControlButtons"; 
import LessonControlButtons from "./LessonControlButtons"; 

export default function Modules() {
    const [collapsed, setCollapsed] = useState(false);
    const [selectedAction, setSelectedAction] = useState("");

    const toggleCollapseAll = () => {
        setCollapsed(!collapsed);
    };

    const handleDropdownChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedAction(event.target.value);
        if (event.target.value) {
            alert(`Action Selected: ${event.target.value}`);
        }
    };

    return (
        <div>
            <ModulesControls /><br /><br /><br />
            <ul id="wd-modules" className="list-group rounded-0">
                {/* Week 1 */}
                <li className={`wd-module list-group-item p-0 mb-5 fs-5 border-gray ${collapsed ? "collapsed" : ""}`}>
                    <div className="wd-title p-3 ps-2 bg-secondary"> 
                        <BsGripVertical className="me-2 fs-3" />
                        Week 1
                        <ModuleControlButtons />
                    </div>
                    <ul className="wd-lessons list-group rounded-0">
                        <li className="wd-lesson list-group-item p-3 ps-1">
                            <BsGripVertical className="me-2 fs-3" />
                            LEARNING OBJECTIVES
                            <LessonControlButtons />
                        </li>
                        <li className="wd-lesson list-group-item p-3 ps-1">
                            <BsGripVertical className="me-2 fs-3" />
                            Introduction to the course
                            <LessonControlButtons />
                        </li>
                        <li className="wd-lesson list-group-item p-3 ps-1">
                            <BsGripVertical className="me-2 fs-3" />
                            Learn what is Web Development
                            <LessonControlButtons />
                        </li>
                        <li className="wd-lesson list-group-item p-3 ps-1">
                            <BsGripVertical className="me-2 fs-3" />
                            Overview of Frontend and Backend
                            <LessonControlButtons />
                        </li>
                    </ul>
                </li>

                {/* Week 2 */}
                <li className={`wd-module list-group-item p-0 mb-5 fs-5 border-gray ${collapsed ? "collapsed" : ""}`}>
                    <div className="wd-title p-3 ps-2 bg-secondary">
                        <BsGripVertical className="me-2 fs-3" />
                        Week 2
                        <ModuleControlButtons />
                    </div>
                    <ul className="wd-lessons list-group rounded-0">
                        <li className="wd-lesson list-group-item p-3 ps-1">
                            <BsGripVertical className="me-2 fs-3" />
                            LEARNING OBJECTIVES
                            <LessonControlButtons />
                        </li>
                        <li className="wd-lesson list-group-item p-3 ps-1">
                            <BsGripVertical className="me-2 fs-3" />
                            Introduction to HTML & CSS
                            <LessonControlButtons />
                        </li>
                        <li className="wd-lesson list-group-item p-3 ps-1">
                            <BsGripVertical className="me-2 fs-3" />
                            Building web pages with HTML
                            <LessonControlButtons />
                        </li>
                        <li className="wd-lesson list-group-item p-3 ps-1">
                            <BsGripVertical className="me-2 fs-3" />
                            Styling web pages with CSS
                            <LessonControlButtons />
                        </li>
                    </ul>
                </li>

                {/* Week 3 */}
                <li className={`wd-module list-group-item p-0 mb-5 fs-5 border-gray ${collapsed ? "collapsed" : ""}`}>
                    <div className="wd-title p-3 ps-2 bg-secondary">
                        <BsGripVertical className="me-2 fs-3" />
                        Week 3
                        <ModuleControlButtons />
                    </div>
                    <ul className="wd-lessons list-group rounded-0">
                        <li className="wd-lesson list-group-item p-3 ps-1">
                            <BsGripVertical className="me-2 fs-3" />
                            LEARNING OBJECTIVES
                            <LessonControlButtons />
                        </li>
                        <li className="wd-lesson list-group-item p-3 ps-1">
                            <BsGripVertical className="me-2 fs-3" />
                            Introduction to JavaScript
                            <LessonControlButtons />
                        </li>
                        <li className="wd-lesson list-group-item p-3 ps-1">
                            <BsGripVertical className="me-2 fs-3" />
                            Understanding variables, functions, and loops
                            <LessonControlButtons />
                        </li>
                        <li className="wd-lesson list-group-item p-3 ps-1">
                            <BsGripVertical className="me-2 fs-3" />
                            Manipulating the DOM with JavaScript
                            <LessonControlButtons />
                        </li>
                    </ul>
                </li>

                {/* Week 4 */}
                <li className={`wd-module list-group-item p-0 mb-5 fs-5 border-gray ${collapsed ? "collapsed" : ""}`}>
                    <div className="wd-title p-3 ps-2 bg-secondary">
                        <BsGripVertical className="me-2 fs-3" />
                        Week 4
                        <ModuleControlButtons />
                    </div>
                    <ul className="wd-lessons list-group rounded-0">
                        <li className="wd-lesson list-group-item p-3 ps-1">
                            <BsGripVertical className="me-2 fs-3" />
                            LEARNING OBJECTIVES
                            <LessonControlButtons />
                        </li>
                        <li className="wd-lesson list-group-item p-3 ps-1">
                            <BsGripVertical className="me-2 fs-3" />
                            Introduction to Responsive Design
                            <LessonControlButtons />
                        </li>
                        <li className="wd-lesson list-group-item p-3 ps-1">
                            <BsGripVertical className="me-2 fs-3" />
                            Using Media Queries for different screen sizes
                            <LessonControlButtons />
                        </li>
                        <li className="wd-lesson list-group-item p-3 ps-1">
                            <BsGripVertical className="me-2 fs-3" />
                            Introduction to Flexbox and Grid
                            <LessonControlButtons />
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    );
}
