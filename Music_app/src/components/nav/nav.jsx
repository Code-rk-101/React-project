import { HiHome } from "react-icons/hi2";
import { IoSearch } from "react-icons/io5";
import { MdOutlinePlaylistAdd } from "react-icons/md";
import { FaHeart } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div className="w-full h-13 bg-black fixed md:top-0 bottom-0 text-white flex justify-around md:justify-center items-center gap-12.5 p-2.5 z-30 rounded-t-[30px] md:rounded-none">
      <NavLink to={"/"}>
        {({ isActive }) => (
          <HiHome
            className={`w-6.25 h-6.25 ${isActive ? "text-gray-500 " : ""}`}
          />
        )}
      </NavLink>
      <NavLink to={"/search"}>
        {({ isActive }) => (
          <IoSearch
            className={`w-6.25 h-6.25 ${isActive ? "text-gray-500" : ""}`}
          />
        )}
      </NavLink>
      <NavLink to={"/playlist"}>
        {({ isActive }) => (
          <MdOutlinePlaylistAdd
            className={`w-6.25 h-6.25 ${isActive ? "text-gray-500" : ""}`}
          />
        )}
      </NavLink>
      <NavLink to={"/liked"}>
        {({ isActive }) => (
          <FaHeart
            className={`w-6.25 h-6.25 ${isActive ? "text-gray-500" : ""}`}
          />
        )}
      </NavLink>
    </div>
  );
};
export default Nav;
