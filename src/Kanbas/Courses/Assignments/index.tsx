import { BsGripVertical } from "react-icons/bs";
import { PiNotePencilBold } from "react-icons/pi";
import { useNavigate, useParams } from "react-router";
import { useEffect, useState } from "react";

import { FaTrash } from "react-icons/fa";
import * as coursesClient from "../client";
import * as assignmentsClient from "./client";

import { useDispatch, useSelector } from "react-redux";
import AssignmentsControls from "./AssignmentControls";
import { deleteAssignment, setAssignments } from "./Reducer";
import AssignmentsHeaderButtons from "./AssignmentsHeaderButtons";

function Assignments() {
  const { cid } = useParams();
  const { assignments } = useSelector((state: any) => state.assignments);
  const { currentUser } = useSelector((state: any) => state.accountReducer);

  const isFaculty = currentUser?.role === "FACULTY";
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [showDialog, setShowDialog] = useState(false);
  const [selectedAssignment, setSelectedAssignment] = useState<any>(null);

  const fetchAssignments = async () => {
    const assignments = await coursesClient.findAssignmentsForCourse(
      cid as string
    );
    dispatch(setAssignments(assignments));
  };
  useEffect(() => {
    fetchAssignments();
  }, []);

  const removeAssignment = async (aid: string) => {
    await assignmentsClient.deleteAssignment(aid);
    dispatch(deleteAssignment(aid));
  };

  const handleDeleteClick = (assignment: any) => {
    setSelectedAssignment(assignment);
    setShowDialog(true);
  };

  const confirmDelete = () => {
    if (selectedAssignment) {
      removeAssignment(selectedAssignment._id);
    }
    setShowDialog(false);
    setSelectedAssignment(null);
  };

  const cancelDelete = () => {
    setShowDialog(false);
    setSelectedAssignment(null);
  };

  return (
    <div id="wd-assignments">
      <AssignmentsControls />
      <hr />
      <br />
      <div className="wd-assignments-list">
        <ul id="wd-assignments-list" className="list-group rounded-0">
          <li className="wd-assignment list-group-item p-0 mb-5 fs-5 border-gray">
            <div className="wd-title p-3 ps-2 bg-light d-flex justify-content-between align-items-center">
              <div>
                <BsGripVertical className="wd-assignments-title me-2 fs-3" />
                ASSIGNMENTS
              </div>
              <AssignmentsHeaderButtons />
            </div>

            <ul className="wd-lesson list-group rounded-0">
              {assignments.map((assignment: any) => (
                <li className="wd-assignment-list-item list-group-item p-3 ps-1 d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-start flex-grow-1 align-items-center">
                    <BsGripVertical className="me-2 fs-3" />

                    <a
                      href={`#/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}
                      className="text-dark text-decoration-none"
                    >
                      <PiNotePencilBold className="me-3 fs-3" />
                    </a>

                    <div>
                      <a
                        className="wd-assignment-link text-dark fw-bold fs-5 text-decoration-none"
                        href={`#/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}
                      >
                        {assignment.title}
                      </a>
                      <br />
                      <div className="text-muted small mt-1">
                        <span className="text-danger">Multiple Modules</span> |
                        <span>
                          <b> Available until:</b> {assignment.availableUntil}
                        </span>
                        <br />
                        <b>Due:</b> {assignment.dueDate} |
                        <span> {assignment.points} pts</span>
                      </div>
                    </div>
                  </div>

                  {isFaculty && (
                    <button
                      className="btn btn-sm btn-danger d-flex align-items-center justify-content-center m-0 me-1"
                      onClick={() => handleDeleteClick(assignment)}
                      title="Delete Assignment"
                    >
                      <FaTrash className="me-1" />
                      Delete
                    </button>
                  )}
                </li>
              ))}
            </ul>
          </li>
        </ul>
        {showDialog && (
          <div className="modal show d-block" tabIndex={-1}>
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Confirm Delete</h5>
                  <button
                    type="button"
                    className="btn-close"
                    aria-label="Close"
                    onClick={cancelDelete}
                  />
                </div>

                <div className="modal-body">
                  <p>Are you sure you want to delete this assignment?</p>
                </div>

                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={cancelDelete}
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={confirmDelete}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
export default Assignments;