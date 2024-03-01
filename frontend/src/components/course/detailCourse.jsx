import React from "react";
import { useParams } from "react-router-dom";
import courses from "../../data/dataCourse.js";

const DetailCourse = () => {
  const { id } = useParams(); // Mengambil ID dari URL
  console.log(id);

  // Menggunakan ID untuk menemukan kursus yang sesuai
  const course = courses.find((course) => course.id === parseInt(id));

  return (
    <div className="justify-items-start">
      <div className="bg-gradient-to-r from-indigo-300 to-purple-300 p-12 ">
        <p className="text-3xl font-bold">{course.title}</p>
      </div>
      <div class=" m-10 grid grid-flow-col justify-stretch ...">
        {/* komponen */}
      </div>
    </div>
  );
};

export default DetailCourse;
