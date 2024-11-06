import { Link, useParams } from 'react-router-dom';
import { BsGripVertical } from "react-icons/bs"
import { MdAssignment } from "react-icons/md";
import AssignmentButtons from "./AssignmentButtons";
import AssignmentControls from "./AssignmentControls";
import { assignments } from "../../Database";

export default function Assignments() {
    const { cid } = useParams();
  
    const courseAssignments = assignments.filter(assignment => assignment.course === cid);
  
    return (
      <div>
        <AssignmentControls /><br /><br /><br />
        <ul id="wd-modules" className="list-group rounded-0">
          <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
            <div className="wd-title p-3 ps-2 bg-secondary">
              <BsGripVertical className="me-2 fs-3" />
              ASSIGNMENTS
              <AssignmentButtons />
            </div>
            {
              courseAssignments.map(assignment => (
                <ul key={assignment._id} className="wd-lessons list-group rounded-0">
                  <li className="wd-lesson list-group-item p-3 ps-1">
                    <div className="d-flex align-items-center">
                      <div className="me-2">
                        <BsGripVertical className="me-2 fs-3" />
                      </div>
                      <div className="me-2">
                        <MdAssignment className="text-success me-2 fs-3" />
                      </div>
                      <div>
                        <Link
                          to={`/Kanbas/Courses/${cid}/Assignments/Editor/${assignment._id}`}
                          id={`wd-assignment-${assignment._id}-link`}
                        >
                          {assignment.title}
                        </Link>
                        <div>
                          <b>Set Due Date / Availability (No data provided in JSON)</b><br />
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              ))}
          </li>
        </ul>
      </div>
    );
  }