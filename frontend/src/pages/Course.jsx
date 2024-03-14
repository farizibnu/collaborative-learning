import React from "react";
import CourseList from "../components/course/courseList";

const Course = () => {
  return (
    <div className="justify-items-start">
      <div className="bg-gradient-to-r from-indigo-300 to-purple-300 p-12 ">
        <p className="text-3xl font-bold">My Courses</p>
        <p className="text px-1 pt-2">
          Let’s join our best classes with our famous instructor
        </p>
      </div>
      <div className="flex justify-end mr-7 m-3">
        <button
          data-modal-target="authentication-modal"
          data-modal-toggle="authentication-modal"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Create Quiz
        </button>
      </div>
      <div class=" m-7 mt-5 grid grid-flow-col justify-stretch ...">
        <CourseList />
      </div>
    </div>
  );
};

export default Course;
