import axios from "axios";

// Get the remote server URL from environment variables
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const ENROLLMENTS_API = `${REMOTE_SERVER}/api/enrollments`;
const USERS_API = `${REMOTE_SERVER}/api/users`;

// Function to enroll a user in a course
export const enrollInCourse = async (userId: string, courseId: string) => {
  try {
    const response = await axios.post(`${ENROLLMENTS_API}/enroll`, {
      userId,
      courseId,
    });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      console.error("Error enrolling in course:", error.response.data);
      throw new Error(error.response.data.message || "Failed to enroll in course");
    }
    throw error;
  }
};

// Function to unenroll a user from a course
export const unenrollFromCourse = async (userId: string, courseId: string) => {
  try {
    const response = await axios.post(`${ENROLLMENTS_API}/unenroll`, {
      userId,
      courseId,
    });
    return response.data;
  } catch (error) {
    console.error("Error unenrolling from course:", error);
    throw error;
  }
};

// Function to get all the courses a user is enrolled in
export const getCoursesForUser = async (userId: string) => {
  try {
    const response = await axios.get(`${USERS_API}/${userId}/courses`);
    return response.data;
  } catch (error) {
    console.error("Error fetching enrolled courses:", error);
    throw error;
  }
};

// Function to get all the courses the currently logged-in user is enrolled in
export const getCoursesForCurrentUser = async () => {
  try {
    const response = await axios.get(`${USERS_API}/current/courses`, {
      withCredentials: true, // Ensure session cookies are sent for authentication
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching enrolled courses for current user:", error);
    throw error;
  }
};
