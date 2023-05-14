import React from "react";
import "./Navbar.css";
import { AiOutlineDown, AiOutlineSearch } from "react-icons/ai";
const Navbar = () => {
  return (
    <div className="Navbar">
      <div className="Container">
        {/* left content */}
        <div className="Left-Content">
          <h2 className="logo">EDYODA</h2>
          <h4 className="Courses">
            Courses{" "}
            <span>
              <AiOutlineDown />
            </span>
          </h4>
          <h4 className="Programs">
            Programs
            <span>
              <AiOutlineDown />
            </span>
          </h4>
        </div>
        {/* right-content */}
        <div className="Right-Content">
          <p className="Search-icon">
            <AiOutlineSearch size={22} />
          </p>
          <h3 className="log_in">LogIn</h3>
          <button className="join-btn">JOIN NOW</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
