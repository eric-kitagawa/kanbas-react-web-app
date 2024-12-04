import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import * as client from "./client"; // Client API for assignments
import { Assignment } from "./client";

export default function AssignmentEditor() {
    const { assignmentId, cid } = useParams<{ assignmentId: string; cid: string }>();
    const navigate = useNavigate();

    // State for the assignment
    const [assignment, setAssignment] = useState<Assignment>({
        _id: "",
        title: "",
        course: "",
        description: "",
        points: 100,
        dueDate: "",
        availableFrom: "",
        until: "",
        submissionType: "",
    });

    const fetchAssignment = async () => {
        if (!assignmentId) return;
        try {
            const fetchedAssignment = await client.getAssignment(assignmentId);
            setAssignment(fetchedAssignment);
        } catch (error) {
            console.error("Error fetching assignment:", error);
        }
    };

    const saveAssignment = async () => {
        try {
            if (assignmentId) {
                await client.updateAssignment(assignment);
            } else {
                await client.createAssignment({ ...assignment, course: cid || "" });
            }
            navigate(`/Kanbas/Courses/${cid}/Assignments/`);
        } catch (error) {
            console.error("Error saving assignment:", error);
        }
    };

    useEffect(() => {
        if (assignmentId) fetchAssignment();
    }, [assignmentId]);

    return (
        <div id="wd-assignment-editor" className="container">
            <div className="mb-3 row">
                <label htmlFor="wd-assignment-name" className="col-md-3 col-form-label">
                    Assignment Name
                </label>
                <div className="col-md-9">
                    <input
                        type="text"
                        id="wd-assignment-name"
                        className="form-control"
                        value={assignment.title || ""}
                        onChange={(e) =>
                            setAssignment({ ...assignment, title: e.target.value || "" })
                        }
                    />
                </div>
            </div>

            <div className="mb-3 row">
                <label htmlFor="wd-description" className="col-md-3 col-form-label">
                    Description
                </label>
                <div className="col-md-9">
                    <textarea
                        id="wd-description"
                        className="form-control"
                        rows={4}
                        value={assignment.description || ""}
                        onChange={(e) =>
                            setAssignment({ ...assignment, description: e.target.value || "" })
                        }
                    />
                </div>
            </div>

            <div className="mb-3 row">
                <label htmlFor="wd-points" className="col-md-3 col-form-label">
                    Points
                </label>
                <div className="col-md-9">
                    <input
                        type="number"
                        id="wd-points"
                        className="form-control"
                        value={assignment.points || 0}
                        onChange={(e) =>
                            setAssignment({ ...assignment, points: Number(e.target.value) || 0 })
                        }
                    />
                </div>
            </div>

            <div className="mb-3 row">
                <label htmlFor="wd-due-date" className="col-md-3 col-form-label">
                    Due Date
                </label>
                <div className="col-md-9">
                    <input
                        type="date"
                        id="wd-due-date"
                        className="form-control"
                        value={assignment.dueDate || ""}
                        onChange={(e) =>
                            setAssignment({ ...assignment, dueDate: e.target.value || "" })
                        }
                    />
                </div>
            </div>

            <div className="mb-3 row">
                <label htmlFor="wd-available-from" className="col-md-3 col-form-label">
                    Available From
                </label>
                <div className="col-md-9">
                    <input
                        type="datetime-local"
                        id="wd-available-from"
                        className="form-control"
                        value={assignment.availableFrom || ""}
                        onChange={(e) =>
                            setAssignment({ ...assignment, availableFrom: e.target.value || "" })
                        }
                    />
                </div>
            </div>

            <div className="mb-3 row">
                <label htmlFor="wd-until" className="col-md-3 col-form-label">
                    Until
                </label>
                <div className="col-md-9">
                    <input
                        type="datetime-local"
                        id="wd-until"
                        className="form-control"
                        value={assignment.until || ""}
                        onChange={(e) =>
                            setAssignment({ ...assignment, until: e.target.value || "" })
                        }
                    />
                </div>
            </div>

            <div className="d-flex float-end pb-2">
                <button
                    id="wd-cancel-assignment"
                    className="btn btn-lg btn-secondary me-1 float-end"
                >
                    <Link
                        to={`/Kanbas/Courses/${cid}/Assignments/`}
                        className="text-decoration-none text-black"
                    >
                        Cancel
                    </Link>
                </button>
                <button
                    id="wd-save-assignment"
                    className="btn btn-lg btn-danger me-1 float-end"
                    onClick={saveAssignment}
                >
                    Save
                </button>
            </div>
        </div>
    );
}
