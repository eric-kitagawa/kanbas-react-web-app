import { Link, useParams } from 'react-router-dom';
import { assignments } from "../../Database";

export default function AssignmentEditor() {
    const { assignmentId, cid } = useParams();

    const assignment = assignments.find((assignment) => assignment._id === assignmentId);

    if (!assignment) {
        return <p>No assignment found!</p>
    }

    return (
        <div id="wd-assignment-editor" className="container">
            <div className="mb-3 row">
                <label htmlFor="wd-assignment-name" className="col-md-3 col-form-label">Assignment Name</label>
                <div className="col-md-9">
                    <input
                        type="text"
                        id="wd-assignment-name"
                        className="form-control"
                        placeholder={assignment.title}
                    />
                </div>
            </div>

            <div className="mb-3 row">
                <label htmlFor="wd-description" className="col-md-3 col-form-label">Description</label>
                <div className="col-md-9">
                    <textarea
                        id="wd-description"
                        className="form-control"
                        rows={4}
                        placeholder="Enter description here"
                    />
                </div>
            </div>

            <div className="mb-3 row">
                <label htmlFor="wd-points" className="col-md-3 col-form-label">Points</label>
                <div className="col-md-9">
                    <input
                        type="number"
                        id="wd-points"
                        className="form-control"
                        value={100}
                    />
                </div>
            </div>

            <div className="mb-3 row">
                <label htmlFor="assignment-group" className="col-md-3 col-form-label">Assignment Group</label>
                <div className="col-md-9">
                    <select id="assignment-group" className="form-select">
                        <option>ASSIGNMENTS</option>
                    </select>
                </div>
            </div>

            <div className="d-flex mb-3 row">
                <label htmlFor="assignment-group" className="col-md-3 col-form-label">Display Grade as</label>
                <div className="col-md-9">
                    <div className="d-flex border p-2 justify-content-center">
                        <select id="assignment-group" className="form-select">
                            <option>Percentage</option>
                            <option>Letter</option>
                        </select>
                    </div>
                </div>
            </div>

            <div className="d-flex mb-3 row">
                <label htmlFor="assignment-group" className="col-md-3 col-form-label">Submission Type</label>
                <div className="col-md-9">
                    <div className="d-flex flex-column border p-3 justify-content-start">

                        <select id="assignment-group" className="form-select mb-3">
                            <option>Online</option>
                        </select>


                        <label id="wd-submission-type" className="form-label">Online Entry Options</label>


                        <div className="form-check">
                            <input type="checkbox" className="form-check-input" id="wd-text-entry" />
                            <label htmlFor="wd-text-entry" className="form-check-label">Text Entry</label>
                        </div>

                        <div className="form-check">
                            <input type="checkbox" className="form-check-input" id="wd-website-url" />
                            <label htmlFor="wd-website-url" className="form-check-label">Website URL</label>
                        </div>

                        <div className="form-check">
                            <input type="checkbox" className="form-check-input" id="wd-media-recordings" />
                            <label htmlFor="wd-media-recordings" className="form-check-label">Media Recordings</label>
                        </div>

                        <div className="form-check">
                            <input type="checkbox" className="form-check-input" id="wd-student-annotation" />
                            <label htmlFor="wd-student-annotation" className="form-check-label">Student Annotation</label>
                        </div>

                        <div className="form-check">
                            <input type="checkbox" className="form-check-input" id="wd-file-upload" />
                            <label htmlFor="wd-file-upload" className="form-check-label">File Uploads</label>
                        </div>
                    </div>
                </div>
            </div>

            <div className="d-flex mb-3 row">
                <label htmlFor="assignment-group" className="col-md-3 col-form-label">Submission Type</label>
                <div className="col-md-9">
                    <div className="d-flex flex-column border p-3 justify-content-start">
                        <label id="wd-assign-to" className="form-label">Assign To</label>

                        <div className="row mb-3">
                            <div className="col-md-9">
                                <select id="wd-assign-to" className="form-select" multiple>
                                    <option value="everyone" selected>Everyone</option>
                                    <option value="student1">Student 1</option>
                                    <option value="student2">Student 2</option>
                                    <option value="group1">Group 1</option>
                                </select>
                            </div>
                        </div>
                        <div className="mb-3">
                            <label id="due-date" className="form-label">Due Date</label>
                            <input type="date" id="due-date" className="form-control"></input>
                        </div>

                        <div className="row mb-3">
                            <label htmlFor="available-from" className="col-md-3 col-form-label">
                                Available from
                            </label>
                            <div className="col-md-4">
                                <input
                                    type="datetime-local"
                                    id="available-from"
                                    className="form-control"
                                    defaultValue="2024-05-06T12:00"
                                />
                            </div>
                            <label htmlFor="until" className="col-md-1 col-form-label text-center">
                                Until
                            </label>
                            <div className="col-md-4">
                                <input type="datetime-local" id="until" className="form-control" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="d-flex float-end pb-2">
                <button id="wd-cancel-assignment" className="btn btn-lg btn-secondary me-1 float-end">
                <Link
                          to={`/Kanbas/Courses/${cid}/Assignments/`}
                          id={`wd-assignment-${cid}-link`}
                          className="text-decoration-none text-black"
                        >
                          Cancel
                        </Link>
                </button>
                <button id="wd-save-assignment" className="btn btn-lg btn-danger me-1 float-end">
                <Link
                          to={`/Kanbas/Courses/${cid}/Assignments/`}
                          id={`wd-assignment-${cid}-link`}
                          className="text-decoration-none text-white"
                        >
                          Save
                        </Link>
                </button>
            </div>
        </div>
    );
}