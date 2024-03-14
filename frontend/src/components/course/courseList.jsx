import React, { useState } from "react";
import courses from "../../data/dataCourse.js";
import { Link } from "react-router-dom";
import { LuPencilLine } from "react-icons/lu";

const CourseList = () => {
  const role = "Teacher";

  return (
    <div className="grid grid-cols-3 gap-4">
      {courses.map((course) => (
        <div
          key={course.id}
          className="max-w-sm rounded overflow-hidden shadow-lg"
        >
          {role === "Teacher" ? (
            <>
              <div className="relative">
                <img
                  className="w-full object-cover h-48"
                  src={course.imageCourse}
                  alt={course.title}
                />
                <button className="absolute top-0 right-0 text-xl font-bold text-white p-2 rounded hover:bg-gray-800 m-2">
                  <LuPencilLine />
                </button>
              </div>
            </>
          ) : (
            <img
              className="w-full object-cover h-48"
              src={course.imageLecturer}
              alt={course.title}
            />
          )}

          <div className="px-6 py-4">
            <Link key={course.id} to={`/detail-course/${course.id}`}>
              <div className="font-bold text-xl mb-2">{course.title}</div>
            </Link>
            <hr className="border-1 border-black" />
            <div className="flex items-center justify-between gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg">
              <img
                className="rounded-full w-8 h-8"
                src={course.imageLecturer}
                alt="user-profile"
              />
              <div className="w-full">
                <div className="flex w-full justify-between mt-1">
                  <span className="ml-1 text-14">{course.instructor}</span>
                  <p className="">
                    <span className="inline-block truncate bg-blue-400 rounded-full px-3 py-1 text-xs text-white ml-2">
                      {course.topic}
                    </span>
                  </p>
                </div>
                <div className="">
                  <span className="ml-1 text-14">
                    {course.positionLecturer}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CourseList;
