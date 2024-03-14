import React from "react";
import { useParams } from "react-router-dom";
import courses from "../../data/dataCourse.js";
import MateriCourse from "./materiCourse.jsx";

const DetailCourse = () => {
  const { id } = useParams(); // Mengambil ID dari URL
  console.log(id);

  // Menggunakan ID untuk menemukan kursus yang sesuai
  const course = courses.find((course) => course.id === parseInt(id));

  return (
    <div className="justify-items-start">
      <div class=" m-10 grid grid-flow-col justify-stretch ...">
        <MateriCourse />
      </div>
    </div>
  );
};

export default DetailCourse;
