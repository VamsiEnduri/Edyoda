import React from "react";
import MainLockUp_Left from "./MainLockUp_Left";
import MainLockUp_Right from "./MainLockUp_Right";
import "./MainLockUp.css";
const MainLockUp = () => {
  return (
    <div className="MainLockUp">
      <MainLockUp_Left />
      <MainLockUp_Right />
    </div>
  );
};

export default MainLockUp;
