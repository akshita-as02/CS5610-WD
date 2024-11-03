import { BsPlus } from "react-icons/bs"; // Import the Plus icon
import { IoEllipsisVertical } from "react-icons/io5"; // Import the vertical ellipsis icon

export default function ModuleControlButtons() {
  return (
    <div className="float-end">
      <BsPlus className="fs-4 me-2" /> {/* Plus icon with margin */}
      <IoEllipsisVertical className="fs-4" /> {/* Vertical ellipsis icon */}
    </div>
  );
}
