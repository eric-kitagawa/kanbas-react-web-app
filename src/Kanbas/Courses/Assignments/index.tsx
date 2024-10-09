import { Link } from 'react-router-dom';
import { BsGripVertical } from "react-icons/bs"
import { MdAssignment } from "react-icons/md";
import AssignmentButtons from "./AssignmentButtons";
import AssignmentControls from "./AssignmentControls";
export default function Assignments() {
    return (
        <div >
            <AssignmentControls /><br /><br /><br />
            <ul id="wd-modules" className="list-group rounded-0">
                <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
                    <div className="wd-title p-3 ps-2 bg-secondary">
                        <BsGripVertical className="me-2 fs-3" />
                        ASSIGNMENTS
                        <AssignmentButtons />
                    </div>
                    <ul className="wd-lessons list-group rounded-0">
                        <li className="wd-lesson list-group-item p-3 ps-1">
                            <div className="d-flex align-items-center">
                                <div className="me-2">
                                    <BsGripVertical className="me-2 fs-3" />
                                </div>
                                <div className="me-2">
                                    <MdAssignment className="text-success me-2 fs-3" />
                                </div>
                                <div>
                                    <Link to="/Kanbas/Courses/1234/Assignments/Editor" id="wd-assignment-editor-link">
                                        A1
                                    </Link>
                                    <div>
                                        <span><span className="text-danger">Multiple Modules</span> | <b>Not available until</b> May 6 at 12:30am |</span><br />
                                        <span><b>Due</b> May 13 at 11:59pm | 100 pts</span>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <ul className="wd-lessons list-group rounded-0">
                        <li className="wd-lesson list-group-item p-3 ps-1">
                            <div className="d-flex align-items-center">
                                <div className="me-2">
                                    <BsGripVertical className="me-2 fs-3" />
                                </div>
                                <div className="me-2">
                                    <MdAssignment className="text-success me-2 fs-3" />
                                </div>
                                <div>
                                    <Link to="/Kanbas/Courses/1234/Assignments/Editor" id="wd-assignment-editor-link">
                                        A2
                                    </Link>
                                    <div>
                                        <span><span className="text-danger">Multiple Modules</span> | <b>Not available until</b> May 13 at 12:30am |</span><br />
                                        <span><b>Due</b> May 20 at 11:59pm | 100 pts</span>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <ul className="wd-lessons list-group rounded-0">
                        <li className="wd-lesson list-group-item p-3 ps-1">
                            <div className="d-flex align-items-center">
                                <div className="me-2">
                                    <BsGripVertical className="me-2 fs-3" />
                                </div>
                                <div className="me-2">
                                    <MdAssignment className="text-success me-2 fs-3" />
                                </div>
                                <div>
                                    <Link to="/Kanbas/Courses/1234/Assignments/Editor" id="wd-assignment-editor-link">
                                        A3
                                    </Link>
                                    <div>
                                        <span><span className="text-danger">Multiple Modules</span> | <b>Not available until</b> May 20 at 12:30am |</span><br />
                                        <span><b>Due</b> May 27 at 11:59pm | 100 pts</span>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>

    );
}