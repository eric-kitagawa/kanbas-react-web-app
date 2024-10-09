import { FaPlus } from "react-icons/fa6";
import { IoEllipsisVertical } from "react-icons/io5";
export default function AssignmentButtons() {
    return (
        <div className="float-end">
            <button className="rounded">
                40% of Total
            </button>
            <FaPlus />
            <IoEllipsisVertical className="fs-4" />
        </div>
    );
}
