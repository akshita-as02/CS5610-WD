import { useState } from "react";
import { useParams } from "react-router";
import * as db from "../../Database";
import { BsGripVertical } from "react-icons/bs";
import ModuleControlButtons from "./ModuleControlButtons";
import LessonControlButtons from "./LessonControlButtons";
import ModulesControls from "./ModulesControls";
import { addModule, editModule, updateModule, deleteModule } from "./reducer";
import { useSelector, useDispatch } from "react-redux";
export default function Modules() {
    const { cid } = useParams();
    const [moduleName, setModuleName] = useState("");
    const { modules } = useSelector((state: any) => state.modulesReducer);
    const dispatch = useDispatch();
  
    // const addModule = () => {
    //     setModules([
    //         ...modules,
    //         { _id: new Date().getTime().toString(), name: moduleName, course: cid, lessons: [] },
    //     ]);
    //     setModuleName("");
    // };

    // const deleteModule = (moduleId: string) => {
    //     setModules(modules.filter((m) => m._id !== moduleId));
    // };
    // const editModule = (moduleId: string) => {
    //     setModules(modules.map((m) => (m._id === moduleId ? { ...m, editing: true } : m)));
    // };
    // const updateModule = (module: any) => {
    //     setModules(modules.map((m) => (m._id === module._id ? module : m)));
    // };

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

    const filteredModules = modules.filter((module: any) => module.course === cid);

    return (
        <div className="wd-modules">
      <ModulesControls moduleName={moduleName} setModuleName={setModuleName}
        addModule={() => {
          dispatch(addModule({ name: moduleName, course: cid }));
          setModuleName("");
        }} />

            <br /><br /><br />
            <ul id="wd-modules" className="list-group rounded-0">
                {filteredModules.map((module: any) => (
                    <div key={module._id}>
                        <li className={`wd-module list-group-item p-0 mb-3 fs-5 border-gray ${collapsed ? "collapsed" : ""}`}>
                            {/* Module Heading */}
                            <div className="wd-title p-3 ps-2 bg-secondary w-100">
                                <BsGripVertical className="me-2 fs-3" />
                                {!module.editing && module.name}
                                {module.editing && (
                                    <input
                                        className="form-control w-50 d-inline-block"
                                        onChange={(e) =>  dispatch(
                                            updateModule({ ...module, name: e.target.value })
                                          )
                                        }
                                        onKeyDown={(e) => {
                                            if (e.key === "Enter") {
                                                dispatch(updateModule({ ...module, editing: false }));
                                            }
                                        }}
                                        defaultValue={module.name}
                                    />
                                )}
                                <ModuleControlButtons moduleId={module._id}
                  deleteModule={(moduleId) => {
                    dispatch(deleteModule(moduleId));
                  }}
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
