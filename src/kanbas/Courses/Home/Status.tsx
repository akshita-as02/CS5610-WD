import { MdDoNotDisturbAlt } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";
import { BiImport } from "react-icons/bi";
import { LiaFileImportSolid } from "react-icons/lia";
import { AiOutlineHome } from "react-icons/ai"; 
import { FaBell } from "react-icons/fa"; 
import { FaChartBar } from "react-icons/fa";
import { IoNotificationsOutline } from "react-icons/io5"; 

export default function CourseStatus() {
  return (
    <div id="wd-course-status" style={{ width: "300px" }}>
      <h2 style={{ marginLeft: '10px', paddingTop: '60px'}}>Course Status</h2>
      <div className="d-flex">
        <div className="w-50 pe-1">
          <button className="btn btn-sm btn-secondary w-100 text-nowrap" style={{ paddingLeft: '10px' }}>
            <MdDoNotDisturbAlt className="me-2 fs-5" /> Unpublish
          </button>
        </div>
        <div className="w-50">
          <button className="btn btn-sm btn-danger w-100 text-nowrap" style={{ paddingLeft: '10px' }}>
            <FaCheckCircle className="me-2 fs-5" /> Publish
          </button>
        </div>
      </div>
      <br />
      <button className="btn btn-sm btn-secondary w-100 mt-1 text-start" style={{ paddingLeft: '10px' }}>
        <BiImport className="me-2 fs-5" /> Import Existing Content
      </button>
      <button className="btn btn-sm btn-secondary w-100 mt-1 text-start" style={{ paddingLeft: '10px' }}>
        <LiaFileImportSolid className="me-2 fs-5" /> Import from Commons
      </button>
      <button className="btn btn-sm btn-secondary w-100 mt-1 text-start" style={{ paddingLeft: '10px' }}>
        <AiOutlineHome className="me-2 fs-5" /> Choose Home Page
      </button>
      <button className="btn btn-sm btn-secondary w-100 mt-1 text-start" style={{ paddingLeft: '10px' }}>
        <FaBell className="me-2 fs-5" /> New Announcements
      </button>
      <button className="btn btn-sm btn-secondary w-100 mt-1 text-start" style={{ paddingLeft: '10px' }}>
        <FaChartBar className="me-2 fs-5" /> New Analysis
      </button>
      <button className="btn btn-sm btn-secondary w-100 mt-1 text-start" style={{ paddingLeft: '10px' }}>
        <IoNotificationsOutline className="me-2 fs-5" /> View Course Notifications
      </button>
      <button className="btn btn-sm btn-secondary w-100 mt-1 text-start" style={{ paddingLeft: '10px' }}>
        <FaBell className="me-2 fs-5" /> View Course Stream
      </button>
    </div>
  );
}
