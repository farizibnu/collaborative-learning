import React from "react";
import courses from "../../data/dataCourse.js";
import { useParams } from "react-router-dom";

const MateriCourse = () => {
  // Fungsi untuk mendapatkan semua materi dari course berdasarkan ID course
  const getAllMaterialsById = (id) => {
    const course = courses.find((course) => course.id === id);

    if (course) {
      // Jika course ditemukan, kembalikan semua materi
      return course.materi;
    } else {
      // Jika course tidak ditemukan, kembalikan null atau sesuaikan dengan kebutuhan Anda
      return null;
    }
  };

  // Dapatkan ID course dari parameter menggunakan useParams()
  const { id } = useParams();
  const courseId = parseInt(id);

  // Panggil fungsi untuk mendapatkan semua materi berdasarkan ID course
  const allMaterials = getAllMaterialsById(courseId);

  // Cek apakah materi berhasil didapatkan
  if (allMaterials) {
    console.log("All Materials:", allMaterials);
  } else {
    console.log("Course not found with ID:", courseId);
  }
  return (
    <div className="grid grid-cols-3 gap-4">
      {allMaterials.map((material) => (
        <div
          key={material.id}
          className="max-w-sm rounded overflow-hidden shadow-lg"
        >
          <img
            className="w-full object-cover h-48"
            src={material.imageMateri}
            alt={material.title}
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{material.title}</div>
            <p className="text-gray-700 text-base">{material.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MateriCourse;
