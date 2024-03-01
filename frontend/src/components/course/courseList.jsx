import React from "react";
import courses from "../../data/dataCourse.js";
import { Link } from "react-router-dom";

const CourseList = () => {
  return (
    <div className="grid grid-cols-3 gap-4">
      {courses.map((course) => (
        <Link key={course.id} to={`/detail-course/${course.id}`}>
          <div
            key={course.id}
            className="max-w-sm rounded overflow-hidden shadow-lg"
          >
            <img
              className="w-full object-cover h-48"
              src={course.imageCourse}
              alt={course.title}
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{course.title}</div>
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
                      <span className="inline-block bg-blue-400 rounded-full px-3 py-1 text-xs text-white ml-2">
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
        </Link>
      ))}
    </div>
  );
};

export default CourseList;
