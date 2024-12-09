import axios from "axios";

const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const axiosWithCredentials = axios.create({ withCredentials: true });

const MODULES_API = `${REMOTE_SERVER}/api/modules`;
//const COURSES_API = `${REMOTE_SERVER}/api/courses`;

export const deleteModule = async (moduleId: any) => {
    const response = await axiosWithCredentials.delete(`${MODULES_API}/${moduleId}`);
    return response.data;
};

export const updateModule = async (module: any) => {
    const { data } = await axiosWithCredentials.put(`${MODULES_API}/${module._id}`, module);
    return data;
};

// export const findModulesForCourse = async (courseId: string) => {
//     const response = await axiosWithCredentials.get(`${COURSES_API}/${courseId}/modules`);
//     return response.data;
// };

// export const createModuleForCourse = async (courseId: string, module: any) => {
//     const response = await axiosWithCredentials.post(
//         `${COURSES_API}/${courseId}/modules`,
//         module
//     );
//     return response.data;
// };