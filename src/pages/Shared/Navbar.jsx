import { useState } from "react";
import { AiFillLike } from "react-icons/ai";
import { BsBell, BsSearch } from "react-icons/bs";
import { FaBars, FaBook, FaHome, FaNewspaper } from "react-icons/fa";
import { MdClear } from "react-icons/md";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="border-t border-gray-300 mt-4">
      <div className="container">
        <div className="flex justify-between items-center py-2 bg-white">
          <div className="space-x-4 desktop:w-60 w-36">
            <img src={logo} alt="Logo" className="mr-2" />
          </div>

          <nav className="hidden desktop:flex space-x-6">
            <NavLink
              href="/"
              className="hover:underline font-semibold text-navlink-color"
            >
              <FaNewspaper className="inline-block text-xl mr-2" />
              আজকের পত্রিকা
            </NavLink>
            <NavLink
              href="/"
              className="hover:underline font-semibold text-navlink-color"
            >
              <FaBook className="inline-block text-xl mr-2" />
              ম্যাগাজিন
            </NavLink>
            <NavLink
              href="/"
              className="hover:underline font-semibold text-navlink-color"
            >
              <AiFillLike className="inline-block text-xl mr-2" />
              সোশ্যাল মিডিয়া
            </NavLink>
          </nav>

          <div className="justify-end desktop:hidden flex">
            <a href="#" onClick={() => setIsOpen(() => !isOpen)}>
              {isOpen ? (
                <FaBars className="text-xl font-bold mr-2" />
              ) : (
                <MdClear className="text-xl font-bold mr-2" />
              )}
            </a>
          </div>

          <div className="hidden desktop:flex justify-end space-x-4 min-w-60">
            <button className="text-gray-500 hover:text-gray-700">
              <BsSearch />
            </button>
            <button className=" text-gray-500 hover:text-gray-700">
              <BsBell />
            </button>
          </div>
        </div>
      </div>

      {/* Top Utility Section */}

      {/* Main Navigation Section */}
      <div className="flex justify-center bg-white border-t shadow border-gray-200">
        <nav className="flex space-x-4 p-4 desktop:space-x-10 py-2 overflow-y-auto max-h-60 desktop:max-h-none">
          <NavLink href="/" className="navbar font-semibold text-navlink-color">
            <FaHome className="text-xl" />
          </NavLink>
          <NavLink href="/" className="navbar font-semibold text-navlink-color">
            সর্বশেষ
          </NavLink>
          <NavLink href="/" className="navbar font-semibold text-navlink-color">
            জাতীয়
          </NavLink>

          <NavLink href="/" className="navbar font-semibold text-navlink-color">
            সারাদেশ
          </NavLink>

          <NavLink href="/" className="navbar font-semibold text-navlink-color">
            কৃষি
          </NavLink>
          <NavLink href="/" className="navbar font-semibold text-navlink-color">
            বিশ্ব
          </NavLink>
          <NavLink href="/" className="navbar font-semibold text-navlink-color">
            খেলা
          </NavLink>
          <NavLink href="/" className="navbar font-semibold text-navlink-color">
            বিনোদন
          </NavLink>
          <NavLink href="/" className="navbar font-semibold text-navlink-color">
            শিক্ষা
          </NavLink>
          <NavLink href="/" className="navbar font-semibold text-navlink-color">
            বাণিজ্য
          </NavLink>
          <NavLink href="/" className="navbar font-semibold text-navlink-color">
            স্বাস্থ্য
          </NavLink>
          <NavLink href="/" className="navbar font-semibold text-navlink-color">
            তথ্য
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
