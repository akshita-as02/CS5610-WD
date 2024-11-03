import { FaPlus } from "react-icons/fa6";
import GreenCheckmark from "./GreenCheckMark";
import { AiOutlineMinus } from "react-icons/ai";
import ModuleEditor from "./ModuleEditor";
export default function ModulesControls(
  { moduleName, setModuleName, addModule }:
    { moduleName: string; setModuleName: (title: string) => void; addModule: () => void; }) {
  return (
    <div id="wd-modules-controls" className="text-nowrap">
      <button className="btn btn-lg btn-danger me-1 float-end" id="wd-add-module-btn"
        data-bs-toggle="modal" data-bs-target="#wd-add-module-dialog" >
        <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
        Module
      </button>

      <div className="dropdown d-inline me-1 float-end">
        <button
          id="wd-publish-all-btn"
          className="btn btn-sm btn-secondary dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <span style={{ fontSize: "1.2rem", verticalAlign: "middle" }}>
            <GreenCheckmark />
          </span>
          Publish All
        </button>
        <ul className="dropdown-menu">
          <li>
            <a
              id="wd-publish-all-modules-and-items-btn"
              className="dropdown-item d-flex align-items-center"
              href="#"
            >
              <span style={{ fontSize: "1rem", verticalAlign: "middle", marginRight: '0.5rem' }}>
                <GreenCheckmark />
              </span>
              Publish All Modules and Items
            </a>
          </li>
          <li>
            <a
              id="wd-publish-modules-only-button"
              className="dropdown-item d-flex align-items-center"
              href="#"
            >
              <span style={{ fontSize: "1rem", verticalAlign: "middle", marginRight: '0.5rem' }}>
                <GreenCheckmark />
              </span>
              Publish Modules Only
            </a>
          </li>
          <li>
            <a
              id="wd-unpublish-all-modules-and-items"
              className="dropdown-item d-flex align-items-center"
              href="#"
            >
              <span style={{ fontSize: "1rem", verticalAlign: "middle", marginRight: '0.5rem' }}>
                <AiOutlineMinus style={{ color: 'grey' }} /> {/* Negative icon */}
              </span>
              Unpublish All Modules and Items
            </a>
          </li>
          <li>
            <a
              id="wd-unpublish-modules-only"
              className="dropdown-item d-flex align-items-center"
              href="#"
            >
              <span style={{ fontSize: "1rem", verticalAlign: "middle", marginRight: '0.5rem' }}>
                <AiOutlineMinus style={{ color: 'grey' }} /> {/* Negative icon */}
              </span>
              Unpublish Modules Only
            </a>
          </li>
        </ul>
      </div>

      <button
        id="wd-view-progress"
        className="btn btn-sm btn-secondary me-1 float-end"
      >
        <span style={{ fontSize: "1.2rem", verticalAlign: "middle" }}></span>
        View Progress
      </button>

      <button
        id="wd-collapse-all"
        className="btn btn-sm btn-secondary me-1 float-end"
      >
        <span style={{ fontSize: "1.2rem", verticalAlign: "middle" }}></span>
        Collapse All
      </button>
      <ModuleEditor dialogTitle="Add Module" moduleName={moduleName}
        setModuleName={setModuleName} addModule={addModule} />
      <ModuleEditor dialogTitle="Add Module" moduleName={moduleName}
        setModuleName={setModuleName} addModule={addModule} />

    </div>
  );
}
