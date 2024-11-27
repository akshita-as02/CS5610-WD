import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { BsGripVertical } from "react-icons/bs";
import ModuleControlButtons from "./ModuleControlButtons";
import LessonControlButtons from "./LessonControlButtons";
import ModulesControls from "./ModulesControls";
import { setModules, addModule, editModule, updateModule, deleteModule } from "./reducer";
import { useSelector, useDispatch } from "react-redux";
import * as coursesClient from "../client";
import * as modulesClient from "./client";

export default function Modules() {
    const { cid } = useParams();
    const [moduleName, setModuleName] = useState("");
    const { modules } = useSelector((state: any) => state.modulesReducer);
    const dispatch = useDispatch();

    const createModuleForCourse = async () => {
        if (!cid) return;
        const newModule = { name: moduleName, course: cid };
        const module = await coursesClient.createModuleForCourse(cid, newModule);
        dispatch(addModule(module));
    };

    const fetchModules = async () => {
        const modules = await coursesClient.findModulesForCourse(cid as string);
        dispatch(setModules(modules));
    };

    const removeModule = async (moduleId: string) => {
        await modulesClient.deleteModule(moduleId);
        dispatch(deleteModule(moduleId));
    };

    const saveModule = async (module: any) => {
        await modulesClient.updateModule(module);
        dispatch(updateModule(module));
    };

    useEffect(() => {
        fetchModules();
    }, []);

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
        <div className="wd-modules">
            <ModulesControls moduleName={moduleName} setModuleName={setModuleName}
                addModule={createModuleForCourse} />

            <br /><br /><br />
            <ul id="wd-modules" className="list-group rounded-0">
                {modules.map((module: any) => (
                    <div key={module._id}>
                        <li className={`wd-module list-group-item p-0 mb-3 fs-5 border-gray ${collapsed ? "collapsed" : ""}`}>
                            {/* Module Heading */}
                            <div className="wd-title p-3 ps-2 bg-secondary w-100">
                                <BsGripVertical className="me-2 fs-3" />
                                
                                {/* Module Name Editing */}
                                {!module.editing && module.name}
                                {module.editing && (
                                    <input
                                        className="form-control w-50 d-inline-block"
                                        value={module.name}
                                        onChange={(e) => dispatch(updateModule({ ...module, name: e.target.value }))}
                                        onKeyDown={(e) => {
                                            if (e.key === "Enter") {
                                                saveModule({ ...module, editing: false });
                                            }
                                        }}
                                    />
                                )}

                                <ModuleControlButtons moduleId={module._id}
                                    deleteModule={(moduleId) => removeModule(moduleId)}
                                    editModule={(moduleId) => dispatch(editModule(moduleId))} />
                            </div>
                        </li>

                        {/* Module Lessons */}
                        {module.lessons && module.lessons.length > 0 && (
                            <ul className="wd-lessons list-group rounded-0 mb-4">
                                {module.lessons.map((lesson: any) => (
                                    <li key={lesson._id} className="wd-lesson list-group-item p-3 ps-1 d-flex align-items-center">
                                        <BsGripVertical className="me-2 fs-3" />
                                        <span className="text-start flex-grow-1">{lesson.name}</span>
                                        <LessonControlButtons />
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                ))}
            </ul>
        </div>
    );
}
