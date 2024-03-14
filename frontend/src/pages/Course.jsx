import React, { useState } from "react";
import { Button, Modal } from "antd";
import CourseList from "../components/course/courseList";

const Course = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [courseData, setCourseData] = useState({
    fullname: "",
    shortname: "",
    summary: "",
  });

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = async () => {
    setIsModalOpen(false);
    try {
      // Tambah categoryid ke courseData
      const dataToSend = { ...courseData, categoryid: 1 };
      await createCourse(dataToSend);
      // tambahan buat logika penanganan sukses disini
    } catch (error) {
      console.error("Error:", error);
      // Handle error
    }
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const createCourse = async (courseData) => {
    const response = await fetch("https://api.example.com/courses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(courseData),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setCourseData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  return (
    <div className="justify-items-start">
      <div className="bg-orange-200 p-12 ">
        <p className="text-3xl font-bold">My Courses</p>
        <p className="text px-1 pt-2">
          Let’s join our best classes with our famous instructor
        </p>
      </div>
      <div className="flex justify-end mr-7 m-3">
        <button
          onClick={showModal}
          className="bg-orange-400 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded"
        >
          Create Course
        </button>
        <Modal
          title="Create Course"
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
          footer={[
            <Button key="back" onClick={handleCancel}>
              Cancel
            </Button>,
            <Button
              key="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white"
              onClick={handleOk}
            >
              Submit
            </Button>,
          ]}
        >
          <form className="mt-4">
            <div className="mb-4">
              <label
                className="block text-black text-base mb-2"
                htmlFor="fullname"
              >
                Course Fullname
              </label>
              <input
                className="appearance-none border rounded w-full py-3 px-3 leading-tight focus:shadow-outline focus:outline-gray-400"
                id="fullname"
                type="text"
                placeholder="Course Fullname"
                value={courseData.fullname}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-black text-base mb-2"
                htmlFor="shortname"
              >
                Course Shortname
              </label>
              <input
                className="appearance-none border rounded w-full py-3 px-3 leading-tight focus:shadow-outline focus:outline-gray-400"
                id="shortname"
                type="text"
                placeholder="Course Shortname"
                value={courseData.shortname}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-black text-base mb-2"
                htmlFor="summary"
              >
                Summary Course
              </label>
              <textarea
                className="appearance-none border rounded w-full py-3 px-3 leading-tight focus:shadow-outline focus:outline-gray-400"
                id="summary"
                type="text"
                placeholder="Summary Course"
                value={courseData.summary}
                onChange={handleChange}
              />
            </div>
          </form>
        </Modal>
      </div>
      <div className="m-7 mt-5 grid grid-flow-col justify-stretch ...">
        <CourseList />
      </div>
    </div>
  );
};

export default Course;
