export default function AssignmentEditor() {
    return (
        <div id="wd-assignment-editor" className="container">
            <div className="mb-3 row">
                <label htmlFor="wd-assignment-name" className="col-md-3 col-form-label">Assignment Name</label>
                <div className="col-md-9">
                    <input
                        type="text"
                        id="wd-assignment-name"
                        className="form-control"
                        placeholder="A1"
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

        </div>
    );
}




{/* <div>
<label htmlFor="wd-submission-type">Online Entry Options</label>
<br />
<input type="checkbox" name="check-entry-options" id="wd-text-entry" />
<label htmlFor="wd-text-entry">Text Entry</label><br />

<input type="checkbox" name="check-entry-options" id="wd-website-url" />
<label htmlFor="wd-website-url">Website URL</label><br />

<input type="checkbox" name="check-entry-options" id="wd-media-recordings" />
<label htmlFor="wd-media-recordings">Media Recordings</label><br />

<input type="checkbox" name="check-entry-options" id="wd-student-annotation" />
<label htmlFor="wd-student-annotation">Student Annotation</label><br />

<input type="checkbox" name="check-entry-options" id="wd-file-upload" />
<label htmlFor="wd-file-upload">File Uploads</label><br />
</div> */}





// export default function AssignmentEditor() {
//     return (
//         <div id="wd-assignments-editor">
//             <label htmlFor="wd-name">Assignment Name</label>
//             <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
//             <textarea id="wd-description">
//                 The assignment is available online Submit a link to the landing page of
//             </textarea>
//             <br />
//             <table>
//                 <tr>
//                     <td align="right" valign="top">
//                         <label htmlFor="wd-points">Points</label>
//                     </td>
//                     <td>
//                         <input id="wd-points" value={100} />
//                     </td>
//                 </tr>
//                 <tr>
//                     <td align="right" valign="top">
//                         <label htmlFor="wd-group">Assignment Group</label>
//                     </td>
//                     <td>
//                         <select id="wd-group" name="wd-group">
//                             <option>ASSIGNMENTS</option>
//                         </select>
//                     </td>
//                 </tr>
//                 <tr>
//                     <td align="right" valign="top">
//                         <label htmlFor="wd-display-grade-as">Display Grade as</label>
//                     </td>
//                     <td>
//                         <select id="wd-display-grade-as" name="wd-display-grade-as">
//                             <option>Percentage</option>
//                         </select>
//                     </td>
//                 </tr>
//                 <tr>
//                     <td align="right" valign="top">
//                         <label htmlFor="wd-submission-type">Submission Type</label>
//                     </td>
//                     <td>
//                         <select id="wd-submission-type" name="wd-submission-type">
//                             <option>Online</option>
//                         </select>
//                         <br />
//                         <label htmlFor="wd-submission-type">Online Entry Options</label>
//                         <br />
//                         <input type="checkbox" name="check-entry-options" id="wd-text-entry" />
//                         <label htmlFor="wd-text-entry">Text Entry</label><br />

//                         <input type="checkbox" name="check-entry-options" id="wd-website-url" />
//                         <label htmlFor="wd-website-url">Website URL</label><br />

//                         <input type="checkbox" name="check-entry-options" id="wd-media-recordings" />
//                         <label htmlFor="wd-media-recordings">Media Recordings</label><br />

//                         <input type="checkbox" name="check-entry-options" id="wd-student-annotation" />
//                         <label htmlFor="wd-student-annotation">Student Annotation</label><br />

//                         <input type="checkbox" name="check-entry-options" id="wd-file-upload" />
//                         <label htmlFor="wd-file-upload">File Uploads</label><br />
//                     </td>
//                 </tr>
//                 <tr>
//                     <td align="right" valign="top">
//                         <label htmlFor="wd-assign-to">Assign to</label>
//                     </td>
//                     <td>
//                         <input id="wd-assign-to" value="Everyone" />
//                     </td>
//                 </tr>
//                 <tr>
//                     <td align="right" valign="top">
//                         <label htmlFor="wd-due-date">Due</label>
//                     </td>
//                     <td>
//                         <input type="date"
//                             id="wd-due-date"
//                             value="2024-05-13" />
//                     </td>
//                 </tr>
//                 <tr>
//                         <td align="right" valign="top">
//                             <label htmlFor="wd-available-from">Available from</label>
//                         </td>
//                         <td>
//                             <input type="date" id="wd-available-from" value="2024-05-06" />
//                         </td>
//                         <td align="right" valign="top">
//                             <label htmlFor="wd-available-until">Until</label>
//                         </td>
//                         <td>
//                             <input type="date" id="wd-available-until" value="2024-05-20" />
//                         </td>
//                     </tr>
//             </table>
//             <hr />
//             <button>Cancel</button><button>Save</button>
//         </div>
//     );
// }

// export default function AssignmentEditor() {
//     return (
//         <div id="wd-assignments-editor" className="p-3">
//             {/* Assignment Name */}
//             <div className="d-flex mb-2 justify-content-end">
//                 <label htmlFor="wd-name" className="form-label me-2" style={{ width: '200px' }}>Assignment Name</label>
//                 <input id="wd-name" className="form-control flex-fill float-end" value="A1 - ENV + HTML" />
//             </div>

//             {/* Assignment Description */}
//             <div className="d-flex mb-2 justify-content-end">
//                 <label htmlFor="wd-description" className="form-label me-2" style={{ width: '200px' }}>Assignment Description</label>
//                 <textarea id="wd-description" className="form-control flex-fill float-end">
//                     The assignment is available online. Submit a link to the landing page.
//                 </textarea>
//             </div>

//             {/* Points */}
//             <div className="d-flex mb-2 justify-content-end">
//                 <label htmlFor="wd-points" className="form-label me-2" style={{ width: '200px' }}>Points</label>
//                 <input id="wd-points" className="form-control flex-fill float-end" value={100} />
//             </div>

//             {/* Assignment Group */}
//             <div className="d-flex mb-2 justify-content-end">
//                 <label htmlFor="wd-group" className="form-label me-2" style={{ width: '200px' }}>Assignment Group</label>
//                 <select id="wd-group" className="form-select flex-fill float-end">
//                     <option>ASSIGNMENTS</option>
//                 </select>
//             </div>

//             {/* Display Grade As */}
//             <div className="d-flex mb-2 justify-content-end">
//                 <label htmlFor="wd-display-grade-as" className="form-label me-2" style={{ width: '200px' }}>Display Grade As</label>
//                 <select id="wd-display-grade-as" className="form-select flex-fill float-end">
//                     <option>Percentage</option>
//                 </select>
//             </div>

//             {/* Submission Type and bordered box */}
//             <div className="d-flex align-items-center mb-3">
//                 <label htmlFor="wd-submission-type" className="form-label me-2" style={{ width: '200px' }}>Submission Type</label>
//                 <div className="border p-3 flex-fill">
//                     <div className="d-flex justify-content-end">
//                         <select id="wd-submission-type" className="form-select flex-fill float-end">
//                             <option>Online</option>
//                         </select>
//                     </div>

//                     <div className="mt-3">
//                         <label className="form-label">Online Entry Options</label><br />
//                         <input type="checkbox" id="wd-text-entry" />
//                         <label htmlFor="wd-text-entry" className="ms-1">Text Entry</label><br />

//                         <input type="checkbox" id="wd-website-url" />
//                         <label htmlFor="wd-website-url" className="ms-1">Website URL</label><br />

//                         <input type="checkbox" id="wd-media-recordings" />
//                         <label htmlFor="wd-media-recordings" className="ms-1">Media Recordings</label><br />

//                         <input type="checkbox" id="wd-student-annotation" />
//                         <label htmlFor="wd-student-annotation" className="ms-1">Student Annotation</label><br />

//                         <input type="checkbox" id="wd-file-upload" />
//                         <label htmlFor="wd-file-upload" className="ms-1">File Uploads</label><br />
//                     </div>
//                 </div>
//             </div>

//             {/* Assign To */}
//             <div className="d-flex mb-2 justify-content-end">
//                 <label htmlFor="wd-assign-to" className="form-label me-2" style={{ width: '200px' }}>Assign To</label>
//                 <input id="wd-assign-to" className="form-control flex-fill float-end" value="Everyone" />
//             </div>

//             {/* Due Date */}
//             <div className="d-flex mb-2 justify-content-end">
//                 <label htmlFor="wd-due-date" className="form-label me-2" style={{ width: '200px' }}>Due Date</label>
//                 <input type="date" id="wd-due-date" className="form-control flex-fill float-end" value="2024-05-13" />
//             </div>

//             {/* Availability Dates */}
//             <div className="d-flex mb-2 justify-content-end">
//                 <label htmlFor="wd-available-from" className="form-label me-2" style={{ width: '200px' }}>Available From</label>
//                 <input type="date" id="wd-available-from" className="form-control me-2 float-end" value="2024-05-06" />

//                 <label htmlFor="wd-available-until" className="form-label me-2" style={{ width: '200px' }}>Available Until</label>
//                 <input type="date" id="wd-available-until" className="form-control float-end" value="2024-05-20" />
//             </div>

//             <hr />

//             {/* Buttons */}
//             <div className="d-flex justify-content-end">
//                 <button className="btn btn-secondary me-2 float-end">Cancel</button>
//                 <button className="btn btn-primary float-end">Save</button>
//             </div>
//         </div>
//     );
// }
