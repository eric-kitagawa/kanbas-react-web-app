import { FaPlus } from "react-icons/fa6";
import { FaMagnifyingGlass } from "react-icons/fa6";
export default function AssignmentControls() {
    return (
        <div id="wd-modules-controls" className="d-flex justify-content-between align-items-center text-nowrap">
            <div className="input-group" style={{ width: '300px' }}>
                <span className="input-group-text">
                    <FaMagnifyingGlass />
                </span>
                <input
                    id="wd-search"
                    className="form-control"
                    type="search"
                    placeholder="Search..."
                />
            </div>
            <div className="d-flex">
                <button id="wd-add-assignment" className="btn btn-lg btn-danger me-1 float-end">
                    <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
                    Assignment</button>
                <button id="wd-collapse-all" className="btn btn-lg btn-secondary me-1 float-end">
                    <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
                    Group
                </button>
            </div>
        </div >
    );
}
