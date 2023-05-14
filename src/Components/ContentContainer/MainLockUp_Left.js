import React from "react";
import "./MainLockUp_Left.css";
import { SlBookOpen } from "react-icons/sl";
import { BiTimeFive } from "react-icons/bi";
import { MdOutlineLiveTv } from "react-icons/md";
import { FaGraduationCap } from "react-icons/fa";
import add from "../../asset/add.jpg";
const MainLockUp_Left = () => {
  const arr = [
    {
      icon: <SlBookOpen />,
      info: (
        <>
          <h3>
            <span className="blue">100+</span> Job relevant courses
          </h3>
        </>
      ),
    },
    {
      icon: <BiTimeFive />,
      info: (
        <>
          <h3>
            <span className="blue">20,000+</span> Hours of content
          </h3>
        </>
      ),
    },

    {
      icon: <MdOutlineLiveTv />,
      info: (
        <h3>
          <span className="blue">Exclusive</span> Webinar access
        </h3>
      ),
    },

    {
      icon: <FaGraduationCap />,
      info: (
        <h3>
          Scholarship worth <span className="blue">&#8377; 94,500</span>
        </h3>
      ),
    },
    {
      icon: (
        <img
          src={add}
          width={33}
          style={{
            borderRadius: 50,
            color: "white",
            border: "1px solid white",
          }}
        />
      ),
      info: (
        <h3>
          <span className="blue">Ad Free</span> Learning experience
        </h3>
      ),
    },
  ];
  return (
    <div className="main">
      <div className="main-left">
        <h2>
          Acess curated courses worth
          <br />
          &#8377;&nbsp;
          <span
            style={{
              textDecoration: "line-through",
              textDecorationColor: "red",
            }}
          >
            18,500
          </span>
          &nbsp; at just <span className="blue">&#8377; 99</span> per year!
        </h2>
        <div className="pointers">
          {arr.map((item, index) => {
            return (
              <div className="pointers_info" key={index}>
                <h2 className="icon">{item.icon}</h2>
                <h3 className="info">{item.info}</h3>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MainLockUp_Left;
