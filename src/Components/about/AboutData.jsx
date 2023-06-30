import React from "react";

const Data = () => {
  return (
    <div className="about-data grid">
      <div className="about-box">
        <i className="bx bxs-award about-icon"></i>
        <h3 className="about-title">Experience</h3>
        <span className="about-subtitle">Fresher</span>
      </div>

      <div className="about-box">
        <i className="bx bx-briefcase about-icon"></i>
        <h3 className="about-title">Completed</h3>
        <span className="about-subtitle">10+ projects</span>
      </div>

      <div className="about-box">
        <i className="bx bx-support about-icon"></i>
        <h3 className="about-title">Support</h3>
        <span className="about-subtitle">Online 24/7</span>
      </div>
    </div>
  );
};

export default Data;
