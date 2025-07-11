import { useState } from "react";
import whatsapp from "../public/images/whatsapp_254409.png";
import linkdein from "../public/images/linkedin_3536569.png";
import discord from "../public/images/discord_5968759.png";
import githubfrom from "../public/images/github_3291695.png";
import { useNavigate } from "react-router-dom";

const Hammenue = () => {
  const navigate = useNavigate();
  const handlenaviagte = () => navigate('/projects');
  const aboutnavigate = () => navigate('/about');
  const [isopen, setisopen] = useState(false);
  const closenavbar = () => setisopen(false);

  return (
    <div>
      {/* Hamburger Icon */}
      <div className="sm:hidden  fixed top-6 right-6 z-50">
        <button
          onClick={() => setisopen(!isopen)}
          className="flex flex-col gap-1 w-8 h-8 justify-center items-center focus:outline-none"
        >
          <span
            className={`block h-1 w-8 bg-white rounded transition-all duration-300 ${
              isopen ? "rotate-45 translate-y-2" : ""
            }`}
          ></span>
          <span
            className={`block h-1 w-8 bg-white rounded transition-all duration-300 ${
              isopen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`block h-1 w-8 bg-white rounded transition-all duration-300 ${
              isopen ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></span>
        </button>
      </div>

      {/* Overlay Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-96 bg-black bg-opacity-90 z-40 transform transition-transform duration-500 ${
          isopen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <ul className="flex flex-col items-center justify-center h-2/3 space-y-8">
          <li className="text-white text-xl" onClick={closenavbar}>
            <a href="/">Home</a>
          </li>
          <li className="text-white text-xl" onClick={() => { aboutnavigate(); closenavbar(); }}>
            <a href="/about">About</a>
          </li>
          <li className="text-white text-xl" onClick={() => { handlenaviagte(); closenavbar(); }}>
            <a href="/projects">Projects</a>
          </li>
          <li>
            <button
              onClick={closenavbar}
              className="bg-white text-black rounded-lg px-6 py-2 font-semibold shadow hover:bg-gray-200 transition"
            >
              Close Menu
            </button>
          </li>
        </ul>
        {/* Social Icons */}
        <div className="flex justify-center items-center gap-8 mt-12">
          <a className="flex flex-col items-center" href="#">
            <img className="w-8 h-8" src={whatsapp} alt="Whatsapp" />
            <p className="text-white text-xs mt-1">Whatsapp</p>
          </a>
          <a className="flex flex-col items-center" href="https://www.linkedin.com/in/kakooza-harunah-701882350/">
            <img className="w-8 h-8" src={linkdein} alt="LinkedIn" />
            <p className="text-white text-xs mt-1">LinkedIn</p>
          </a>
          <a className="flex flex-col items-center" href="https://discord.com/channels/@me">
            <img className="w-8 h-8" src={discord} alt="Discord" />
            <p className="text-white text-xs mt-1">Discord</p>
          </a>
          <a className="flex flex-col items-center" href="https://github.com/devharunah">
            <img className="w-8 h-8" src={githubfrom} alt="Github" />
            <p className="text-white text-xs mt-1">Github</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hammenue;