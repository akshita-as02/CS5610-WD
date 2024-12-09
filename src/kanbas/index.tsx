import { Routes, Route, Navigate } from "react-router";
import Account from "./Account";
import Dashboard from "./Dashboard";
import KanbasNavigation from "./Navigation";
import Courses from "./Courses";
import { useEffect, useState } from "react";
import "./styles.css";
// import store from "./store/store";
import { Provider, useSelector } from "react-redux";
import ProtectedRoute from "./Account/ProtectedRoute";
import Session from "./Account/session";
import * as courseClient from "./Courses/client";
import * as userClient from "./Account/client";

export default function Kanbas() {
  const [courses, setCourses] = useState<any[]>([]);
  const [enrolling, setEnrolling] = useState<boolean>(false);
  const { currentUser } = useSelector((state: any) => state.accountReducer);

  const [course, setCourse] = useState<any>({
    _id: "",
    name: "",
    number: "",
    startDate: "",
    endDate: "",
    description: "",
  });

  // const fetchCourses = async () => {
  //   let courses = [];
  //   try {
  //     courses = await userClient.findMyCourses();
  //   } catch (error) {
  //     console.error(error);
  //   }
  //   setCourses(courses);
  // };

  // const fetchCourses = async () => {
  //   try {
  //     const courses = await courseClient.fetchAllCourses();
  //     setCourses(courses);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };


  const addNewCourse = async () => {
    // const newCourse = await userClient.createCourse(course);
    const newCourse = await courseClient.createCourse(course);
    setCourses([...courses, newCourse]);
  };

  // const findAllCourses = async () => {
  //   try {
  //     const allCourses = await courseClient.findAllCourses();
  //     setCourses(allCourses);
  //   } catch (error) {
  //     console.error("Error fetching all courses:", error);
  //   }
  // };

  const deleteCourse = async (courseId: string) => {
    const status = await courseClient.deleteCourse(courseId);
    setCourses(courses.filter((course) => course._id !== courseId));
  };


  const updateCourse = async () => {
    try {
      await courseClient.updateCourse(course);
      setCourses(
        courses.map((c) => (c._id === course._id ? course : c))
      );
    } catch (error) {
      console.error("Error updating course:", error);
    }
  };

  // const findCoursesForUser = async () => {
  //   try {
  //     const courses = await userClient.findCoursesForUser(currentUser._id);
  //     setCourses(courses);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };
  const fetchCourses = async () => {
    try {
      const allCourses = await courseClient.findAllCourses();
      const enrolledCourses = await userClient.findCoursesForUser(
        currentUser._id
      );
      console.log("Courses", allCourses);
      // const courses = allCourses.map((course: any) => {
      //   if (enrolledCourses.find((c: any) => c._id === course._id)) {
      //     return { ...course, enrolled: true };
      //   } else {
      //     return course;
      //   }
      // });
      setCourses(allCourses);
    } catch (error) {
      console.error(error);
    }
  };
  const updateEnrollment = async (courseId: string, enrolled: boolean) => {
    if (enrolled) {
      await userClient.enrollIntoCourse(currentUser._id, courseId);
    } else {
      await userClient.unenrollFromCourse(currentUser._id, courseId);
    }
    fetchCourses();
    setCourses(
      courses.map((course) => {
        if (course._id === courseId) {
          return { ...course, enrolled: enrolled };
        } else {
          return course;
        }
      })
    );
  };

  //FACULTY WORKING, ALL COURSES DISPLAYED.
  useEffect(() => {
    if (enrolling) {
      fetchCourses();
    } 
  }, [currentUser, enrolling]);

  return (
    <Session>
      <div id="wd-kanbas">
        <KanbasNavigation />
        <div className="wd-main-content-offset p-3">
          <h1>Kanbas</h1>
          <Routes>
            <Route path="/" element={<Navigate to="Account" />} />
            <Route path="/Account/*" element={<Account />} />
            <Route
              path="/Dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard
                    courses={courses}
                    course={course}
                    setCourse={setCourse}
                    addNewCourse={addNewCourse}
                    deleteCourse={deleteCourse}
                    updateCourse={updateCourse}
                    enrolling={enrolling}
                    setEnrolling={setEnrolling}
                    updateEnrollment={updateEnrollment} />
                </ProtectedRoute>
              }
            />
            <Route
              path="/Courses/*"
              element={<Courses courses={courses} />}
            />
            <Route
              path="/Courses/:cid/*"
              element={
                <ProtectedRoute>
                  <Courses courses={courses} />
                </ProtectedRoute>
              }
            />
            <Route path="/Calendar" element={<h1>Calendar</h1>} />
            <Route path="/Inbox" element={<h1>Inbox</h1>} />
          </Routes>
        </div>
      </div>
    </Session>
  );
}
