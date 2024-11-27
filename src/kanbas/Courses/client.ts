import axios from "axios";

const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const COURSES_API = `${REMOTE_SERVER}/api/courses`;

export const fetchAllCourses = async () => {
    const { data } = await axios.get(COURSES_API);
    return data;
  };
  
// Course-related API calls
export const findAllCourses = async () => {
    const { data } = await axios.get(COURSES_API);
    return data;
};

export const deleteCourse = async (id: string) => {
    const { data } = await axios.delete(`${COURSES_API}/${id}`);
    return data;
};

export const updateCourse = async (course: any) => {
    const { data } = await axios.put(`${COURSES_API}/${course._id}`, course);
    return data;
};

// Module-related API calls
export const findModulesForCourse = async (courseId: string) => {
    const response = await axios.get(`${COURSES_API}/${courseId}/modules`);
    return response.data;
};

export const createModuleForCourse = async (courseId: string, module: any) => {
    const response = await axios.post(
        `${COURSES_API}/${courseId}/modules`,
        module
    );
    return response.data;
};

// Assignment-related API calls
export const createAssignmentForCourse = async (courseId: string, assignment: any) => {
    const response = await axios.post(
        `${COURSES_API}/${courseId}/assignments`,
        assignment
    );
    return response.data;
};

export const fetchAssignmentsForCourse = async (courseId: string) => {
    const { data } = await axios.get(`${COURSES_API}/${courseId}/assignments`);
    return data;
};

export const fetchAssignmentById = async (assignmentId: string) => {
    const { data } = await axios.get(`${REMOTE_SERVER}/api/assignments/${assignmentId}`);
    return data;
};

export const updateAssignment = async (assignment: any) => {
    const { data } = await axios.put(
        `${REMOTE_SERVER}/api/assignments/${assignment._id}`,
        assignment
    );
    return data;
};

export const deleteAssignment = async (assignmentId: string) => {
    const { data } = await axios.delete(`${REMOTE_SERVER}/api/assignments/${assignmentId}`);
    return data;
};