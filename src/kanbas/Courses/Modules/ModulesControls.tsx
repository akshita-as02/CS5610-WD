import { FaPlus } from "react-icons/fa6";
import GreenCheckmark from "./GreenCheckMark";
import { AiOutlineMinus } from "react-icons/ai"; 

export default function ModulesControls() {
  return (
    <div id="wd-modules-controls" className="text-nowrap">
      <button
        id="wd-add-module-btn"
        className="btn btn-sm btn-danger me-1 float-end"
        style={{ height: "38px" }}
      >
        <FaPlus className="position-relative me-2" style={{ fontSize: "1.2rem", verticalAlign: "middle" }} />
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
              Publish all modules and items
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
              Publish modules only
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
              Unpublish all modules and items
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
              Unpublish modules only
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
        <span style={{ fontSize: "1.2rem", verticalAlign: "middle" }}></span> {/* Optional icon */}
        Collapse All
      </button>
    </div>
  );
}
