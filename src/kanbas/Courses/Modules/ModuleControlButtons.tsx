import { BsPlus } from "react-icons/bs"; // Import the Plus icon
import { IoEllipsisVertical } from "react-icons/io5"; // Import the vertical ellipsis icon
import { FaTrash } from "react-icons/fa";
import GreenCheckmark from "./GreenCheckMark";
import { FaPencil } from "react-icons/fa6";

export default function ModuleControlButtons({ moduleId, deleteModule, editModule }: {
  moduleId: string; deleteModule: (moduleId: string) => void;
  editModule: (moduleId: string) => void }) {
  return (
    <div className="float-end">
      <FaPencil onClick={() => editModule(moduleId)} className="text-primary me-3" />
      <FaTrash className="text-danger me-2 mb-1" onClick={() => deleteModule(moduleId)} />
      <GreenCheckmark />
      <BsPlus className="fs-4 me-2" /> {/* Plus icon with margin */}
      <IoEllipsisVertical className="fs-4" /> {/* Vertical ellipsis icon */}
    </div>
  );
}
