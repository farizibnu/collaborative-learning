import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AiOutlineSlackSquare, AiOutlineLeftSquare } from "react-icons/ai";

import { links } from "../data/dummy";

const Sidebar = () => {
  const activeMenu = true;
  const activeLink =
    "flex items-center gap-5 pl-8 -ml-3 pt-3 pb-2.5 text-orange-400 border-l-4 border-l-orange-400 font-semibold text-md m-2";
  const normalLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white font-semibold text-md hover:text-orange-300 m-2";

  const [username, setUsername] = useState("cinderella");
  const [password, setPassword] = useState("Bibbidibobbidiboo123");

  const handleLoginFormSubmit = async () => {
    const form = document.querySelector(".loginform");
    if (!form) return; // Ensure a form element is found

    // Buat objek FormData dari form
    const formData = new FormData(form);

    // Konversi FormData menjadi URLSearchParams
    const urlEncodedData = new URLSearchParams(formData).toString();

    try {
      const response = await fetch(form.action, {
        method: form.method,
        headers: {
          "Content-Type": "application/x-www-form-urlencoded", // Atur tipe konten header
        },
        body: urlEncodedData, // Kirim data yang telah dikodekan ulang
      });
      const responseText = await response.text();
      console.log("Response:", responseText);
      // Handle login response
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="pl-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10 bg-slate-950">
      {activeMenu && (
        <>
          <div className="flex justify-between items-center pb-5">
            <Link
              to="/"
              onClick={() => {}}
              className="items-center ml-4 flex text-xl tracking-tight gap-3 mt-8 font-extrabold text-orange-400"
            >
              <AiOutlineSlackSquare style={{ fontSize: "40px" }} />
              <span className="text-white text-2xl">Colle</span>
            </Link>
            <button
              type="button"
              onClick={() => {}}
              className="text-2xl p-1 mx-2 hover:bg-light-gray mt-4 block md:hidden"
            >
              <AiOutlineLeftSquare />
            </button>
          </div>
          <div className="">
            {links.map((item) => (
              <div key={item.title}>
                {item.links.map((link) => (
                  <NavLink
                    to={`/${link.url}`}
                    key={link.name}
                    onClick={() => {
                      if (link.url === "course") {
                        handleLoginFormSubmit(); // Submit form when "course" is clicked
                      }
                    }}
                    className={({ isActive }) =>
                      isActive ? activeLink : normalLink
                    }
                  >
                    {link.icon}
                    <span className="capitalize">{link.name}</span>
                  </NavLink>
                ))}
              </div>
            ))}
          </div>
        </>
      )}

      <form
        className="loginform"
        name="login"
        method="post"
        action="http://moaibad.southeastasia.cloudapp.azure.com/moodle/login/index.php"
        style={{ display: "none" }}
      >
        <input size="10" name="username" value={username} readOnly />
        <input
          size="10"
          name="password"
          type="password"
          value={password}
          readOnly
        />
        <input name="Submit" value="Login" type="submit" />
      </form>
    </div>
  );
};

export default Sidebar;
