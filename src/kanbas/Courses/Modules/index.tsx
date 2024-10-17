import { useState } from "react";
import { useParams } from "react-router";
import * as db from "../../Database";
import { BsGripVertical } from "react-icons/bs"; // Import the icon
import ModuleControlButtons from "./ModuleControlButtons"; 
import LessonControlButtons from "./LessonControlButtons"; 
import ModulesControls from "./ModulesControls"; 

export default function Modules() {
    const { cid } = useParams(); // Get course id from URL parameters
    const modules = db.modules; // Access modules from the database
    const [collapsed, setCollapsed] = useState(false); // State to manage collapse
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

    // Filter the modules by the course ID (cid)
    const filteredModules = modules.filter((module: any) => module.course === cid);

    return (
        <div>
            <ModulesControls /><br /><br /><br />
            <ul id="wd-modules" className="list-group rounded-0">
                {filteredModules.map((module: any) => (
                    <li key={module._id} className={`wd-module list-group-item p-0 mb-5 fs-5 border-gray ${collapsed ? "collapsed" : ""}`}>
                        <div className="wd-title p-3 ps-2 bg-secondary"> 
                            <BsGripVertical className="me-2 fs-3" />
                            {module.name}
                            <ModuleControlButtons />
                        </div>

                        {module.lessons && (
                            <ul className="wd-lessons list-group rounded-0">
                                {module.lessons.map((lesson: any) => (
                                    <li key={lesson._id} className="wd-lesson list-group-item p-3 ps-1">
                                        <BsGripVertical className="me-2 fs-3" />
                                        {lesson.name}
                                        <LessonControlButtons />
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}
