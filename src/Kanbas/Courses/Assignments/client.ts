import axios from "axios";

const REMOTE_SERVER = "http://localhost:4000";
const ASSIGNMENTS_API = `${REMOTE_SERVER}/api/assignments`;

// Define an interface for the assignment object
export interface Assignment {
    _id: string;
    title: string;
    course: string;
    description: string;
    points: number;
    dueDate: string;
    availableFrom: string;
    until: string;
    submissionType: string;
}

export const getAssignmentsForCourse = async (course: string): Promise<Assignment[]> => {
    const { data } = await axios.get(`${ASSIGNMENTS_API}/${course}/assignments`);
    return data;
};


export const createAssignment = async (assignment: Assignment): Promise<Assignment> => {
    const { data } = await axios.post(ASSIGNMENTS_API, assignment);
    return data;
};

export const getAssignment = async (assignmentId: string): Promise<Assignment> => {
    const { data } = await axios.get(`${ASSIGNMENTS_API}/${assignmentId}`);
    return data;
};

export const updateAssignment = async (assignment: Assignment): Promise<Assignment> => {
    const { data } = await axios.put(`${ASSIGNMENTS_API}/${assignment._id}`, assignment);
    return data;
};

export const deleteAssignment = async (assignmentId: string): Promise<void> => {
    await axios.delete(`${ASSIGNMENTS_API}/${assignmentId}`);
};


