import axios from "axios";

const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const ASSIGNMENTS_API = `${REMOTE_SERVER}/api/assignments`;
const axiosWithCredentials = axios.create({ withCredentials: true });

export const createAssignment = async (assignment: any) => {
  const response = await axiosWithCredentials.post(ASSIGNMENTS_API, assignment);
  return response.data;
};

export const getAllAssignments = async () => {
  const response = await axiosWithCredentials.get(ASSIGNMENTS_API);
  return response.data;
};

export const getAssignmentById = async (assignmentId: string) => {
  const response = await axiosWithCredentials.get(`${ASSIGNMENTS_API}/${assignmentId}`);
  console.log("Assignment ID: ", assignmentId);
  return response.data;
};

export const updateAssignment = async (assignment: any) => {
  const { data } = await axiosWithCredentials.put(`${ASSIGNMENTS_API}/${assignment._id}`, assignment);
  return data;
};

export const deleteAssignment = async (assignmentId: string) => {
  const response = await axiosWithCredentials.delete(`${ASSIGNMENTS_API}/${assignmentId}`);
  return response.data;
};
