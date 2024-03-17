import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { LuPencilLine } from "react-icons/lu";
import avatar from "../../data/avatar.jpg";
import coursePage from "../../data/course-page.png";

const CourseList = () => {
  const [courses, setCourses] = useState([]);
  const [role, setRole] = useState("Teacher");

  useEffect(() => {
    // Fetch course data from the endpoint
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://moaibad.southeastasia.cloudapp.azure.com/moodle/webservice/rest/server.php?wstoken=24a495bd6288308e975f7ff5a6e92d65&wsfunction=core_course_get_courses&moodlewsrestformat=json"
        );
        const data = await response.json();
        setCourses(data);
      } catch (error) {
        console.error("Error fetching course data:", error);
      }
    };

    fetchData();
  }, []);

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
                {/* Adjust according to your course data */}
                {/* Assuming 'course.displayname' contains the title */}
                <img
                  className="w-full object-cover h-48"
                  src={coursePage}
                  alt={course.displayname}
                />
                <button className="absolute top-0 right-0 text-xl font-bold text-white p-2 rounded hover:bg-gray-800 m-2">
                  <LuPencilLine />
                </button>
              </div>
            </>
          ) : (
            <img
              className="w-full object-cover h-48"
              src={coursePage}
              alt={course.displayname}
            />
          )}

          <div className="px-6 py-4">
            <Link key={course.id} to={`/detail-course/${course.id}`}>
              <div className="font-bold text-xl mb-2">{course.displayname}</div>
            </Link>
            <hr className="border-1 border-black" />
            <div className="flex items-center justify-between gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg">
              <img
                className="rounded-full w-8 h-8"
                src={avatar}
                alt="user-profile"
              />
              <div className="w-full ">
                <div className="flex w-full justify-between mt-1">
                  <span className="ml-1 text-14">Lecturer</span>
                  <p className="">
                    <span className="inline-block truncate bg-orange-400 rounded-full px-3 py-1 text-xs text-white ml-2">
                      Topic
                    </span>
                  </p>
                </div>
                <div className="-mt-3">
                  <span className="ml-1  text-14">Postion</span>
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
