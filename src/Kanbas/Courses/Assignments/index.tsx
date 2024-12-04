import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { BsGripVertical } from "react-icons/bs";
import { MdAssignment } from "react-icons/md";
import AssignmentButtons from "./AssignmentButtons";
import AssignmentControls from "./AssignmentControls";
import { getAssignmentsForCourse, Assignment } from "./client";

export default function Assignments() {
    const { cid } = useParams<{ cid: string }>();
    const [assignments, setAssignments] = useState<Assignment[]>([]);

    const fetchAssignments = async () => {
        try {
            if (!cid) return;
            const fetchedAssignments = await getAssignmentsForCourse(cid);
            console.log("Fetched Assignments:", fetchedAssignments); // Debug
            setAssignments(fetchedAssignments);
        } catch (error) {
            console.error("Error fetching assignments:", error);
        }
    };

    useEffect(() => {
        fetchAssignments();
    }, [cid]);

    return (
        <div>
            <AssignmentControls />
            <br /><br /><br />
            <ul id="wd-modules" className="list-group rounded-0">
                <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
                    <div className="wd-title p-3 ps-2 bg-secondary">
                        <BsGripVertical className="me-2 fs-3" />
                        ASSIGNMENTS
                        <AssignmentButtons />
                    </div>
                    {assignments.length === 0 ? (
                        <p>No assignments found for this course.</p>
                    ) : (
                        assignments.map((assignment) => (
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
                                                <b>Due Date:</b> {assignment.dueDate || "Not set"}<br />
                                                <b>Available From:</b> {assignment.availableFrom || "Not set"}<br />
                                                <b>Until:</b> {assignment.until || "Not set"}
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        ))
                    )}
                </li>
            </ul>
        </div>
    );
}
