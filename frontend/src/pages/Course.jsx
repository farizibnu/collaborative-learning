import React, { useState } from "react";
import { Button, Modal } from "antd";
import CourseList from "../components/course/courseList";
import { RiErrorWarningFill } from "react-icons/ri";

const Course = () => {
  const role = "Teacher";
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [courseData, setCourseData] = useState({
    fullname: "",
    shortname: "",
    summary: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const [shortnameTaken, setShortnameTaken] = useState(false); // State untuk menangani pesan shortname taken
  const [successMessage, setSuccessMessage] = useState(false); // State untuk menampilkan pesan sukses

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = async () => {
    const isValid = validateForm();
    if (!isValid) {
      return;
    }

    try {
      // Tambah categoryid ke courseData
      const dataToSend = { ...courseData, categoryid: 1 };
      await createCourse(dataToSend);
      setSuccessMessage(true); // Menampilkan pesan sukses
      setIsModalOpen(false); // Menutup modal setelah berhasil membuat kursus
      clearForm(); // Mengosongkan formulir setelah berhasil membuat kursus
    } catch (error) {
      console.error("Error:", error);
      if (
        error.message ===
        "Failed to create course: Short name is already used for another course"
      ) {
        setShortnameTaken(true);
      } else {
        setIsModalOpen(false); // Tutup modal hanya jika tidak ada error "shortnametaken"
      }
      // Handle error
    }
  };

  const clearForm = () => {
    setCourseData({
      fullname: "",
      shortname: "",
      summary: "",
    });
    setFormErrors({});
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setCourseData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const validateForm = () => {
    const errors = {};
    if (!courseData.fullname.trim()) {
      errors.fullname = "Fullname is required";
    }
    if (!courseData.shortname.trim()) {
      errors.shortname = "Shortname is required";
    }
    if (!courseData.summary.trim()) {
      errors.summary = "Summary is required";
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const createCourse = async (courseData) => {
    const apiUrl = `http://moaibad.southeastasia.cloudapp.azure.com/moodle/webservice/rest/server.php`;
    const token = "24a495bd6288308e975f7ff5a6e92d65";
    const wsfunction = "core_course_create_courses";

    // Membuat query string dari courseData
    const queryString = Object.keys(courseData)
      .map((key) => {
        return `courses[0][${key}]=${encodeURIComponent(courseData[key])}`;
      })
      .join("&");

    const fullUrl = `${apiUrl}?wstoken=${token}&wsfunction=${wsfunction}&${queryString}`;

    try {
      const response = await fetch(fullUrl, {
        method: "POST",
      });

      // Mengecek jika respons tidak berhasil (status code bukan 200)
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      // Membaca respons sebagai teks
      const textResponse = await response.text();

      // Mengecek apakah respons adalah XML (dengan mengecek apakah dimulai dengan '<')
      if (textResponse.startsWith("<")) {
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(textResponse, "text/xml");
        const exceptionElement = xmlDoc.getElementsByTagName("EXCEPTION")[0];
        if (exceptionElement) {
          const errorCode =
            exceptionElement.getElementsByTagName("ERRORCODE")[0]?.textContent;
          const message =
            exceptionElement.getElementsByTagName("MESSAGE")[0]?.textContent;
          if (errorCode === "shortnametaken") {
            setShortnameTaken(true); // Update shortnameTaken state
            throw new Error(`Failed to create course: ${message}`);
          }
          // Penanganan lainnya untuk pesan XML yang gagal
          console.error("Error creating course:", message);
          throw new Error(
            "Error creating course. Please check your data and try again."
          );
        }
      } else {
        // Jika respons bukan XML, artinya respons adalah JSON
        const data = await response.json();

        // Mengecek jika respons adalah sukses sesuai format yang diberikan
        if (
          data &&
          data.RESPONSE &&
          data.RESPONSE.MULTIPLE &&
          data.RESPONSE.MULTIPLE.SINGLE
        ) {
          const single = data.RESPONSE.MULTIPLE.SINGLE;
          if (single.KEY) {
            const id = single.KEY.find((item) => item["@name"] === "id")?.VALUE;
            const shortname = single.KEY.find(
              (item) => item["@name"] === "shortname"
            )?.VALUE;
            if (id && shortname) {
              // Handle sukses disini, misalnya menampilkan pesan sukses atau melakukan operasi lain
              // Contoh:
              console.log(
                `Course created successfully. ID: ${id}, Shortname: ${shortname}`
              );
            }
          }
        } else {
          console.error("Error creating course:", data.error);
          throw new Error(
            "Error creating course. Please check your data and try again."
          );
        }
      }
    } catch (error) {
      console.error("Error creating course:", error.message);
      throw error;
    }
  };

  return (
    <div className="justify-items-start">
      <div className="bg-orange-200 p-12 ">
        <p className="text-3xl font-bold">My Courses</p>
        <p className="text px-1 pt-2">
          Let’s join our best classes with our famous instructor
        </p>
      </div>
      {role === "Teacher" ? (
        <>
          {" "}
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
                    className={`appearance-none border rounded w-full py-3 px-3 leading-tight focus:shadow-outline focus:outline-gray-400 ${
                      formErrors.fullname && "border-red-500"
                    }`}
                    id="fullname"
                    type="text"
                    placeholder="Course Fullname"
                    value={courseData.fullname}
                    onChange={handleChange}
                  />
                  {formErrors.fullname && (
                    <p className="text-red-500 text-xs italic">
                      {formErrors.fullname}
                    </p>
                  )}
                </div>
                <div className="mb-4">
                  <label
                    className="block text-black text-base mb-2"
                    htmlFor="shortname"
                  >
                    Course Shortname
                  </label>
                  <input
                    className={`appearance-none border rounded w-full py-3 px-3 leading-tight focus:shadow-outline focus:outline-gray-400 ${
                      formErrors.shortname && "border-red-500"
                    }`}
                    id="shortname"
                    type="text"
                    placeholder="Course Shortname"
                    value={courseData.shortname}
                    onChange={handleChange}
                  />
                  {formErrors.shortname && (
                    <p className="text-red-500 text-xs italic">
                      {formErrors.shortname}
                    </p>
                  )}
                </div>
                <div className="mb-4">
                  <label
                    className="block text-black text-base mb-2"
                    htmlFor="summary"
                  >
                    Summary Course
                  </label>
                  <textarea
                    className={`appearance-none border rounded w-full py-3 px-3 leading-tight focus:shadow-outline focus:outline-gray-400 ${
                      formErrors.summary && "border-red-500"
                    }`}
                    id="summary"
                    type="text"
                    placeholder="Summary Course"
                    value={courseData.summary}
                    onChange={handleChange}
                  />
                  {formErrors.summary && (
                    <p className="text-red-500 text-xs italic">
                      {formErrors.summary}
                    </p>
                  )}
                </div>
              </form>
            </Modal>
          </div>
          {/* Popup modal untuk pesan shortname taken */}
          <Modal
            visible={shortnameTaken}
            footer={[
              <Button
                className="bg-blue-500 hover:bg-blue-700 text-white"
                key="ok"
                onClick={() => setShortnameTaken(false)}
              >
                {" "}
                OK
              </Button>,
            ]}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
              }}
            >
              <RiErrorWarningFill
                style={{
                  marginRight: "10px",
                  fontSize: "24px",
                  color: "red",
                }}
              />
              <p className="font-bold text-lg">
                Short name has already been taken.
              </p>
            </div>
            <p className="m-3 ">
              Short name has already been taken by another course. Please use a
              different short name to try creating a course.
            </p>
          </Modal>
          {/* Popup modal untuk pesan sukses */}
          <Modal
            visible={successMessage}
            footer={[
              <Button
                className="bg-blue-500 hover:bg-blue-700 text-white"
                key="ok"
                onClick={() => setSuccessMessage(false)}
              >
                {" "}
                OK
              </Button>,
            ]}
          >
            <p className="font-bold text-lg">Success!</p>
            <p className="my-3 ">Course created successfully.</p>
          </Modal>
        </>
      ) : (
        <></>
      )}

      <div className="m-7 mt-5 grid grid-flow-col justify-stretch ...">
        <CourseList />
      </div>
    </div>
  );
};

export default Course;
