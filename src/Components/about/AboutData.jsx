import React from "react";

const Data = () => {
    return(
        <div className="about_data grid">
            <div className="about_box">
            <i className='bx bxs-award  about_icon' ></i>
                <h3 className="about_title">Experience</h3>
                <span className="about_subtitle">Fresher</span>
            </div>

            <div className="about_box">
            <i className='bx bx-briefcase about_icon' ></i>
                <h3 className="about_title">Completed</h3>
                <span className="about_subtitle">10+ projects</span>
            </div>

            <div className="about_box">
            <i className='bx bx-support about_icon' ></i>
                <h3 className="about_title">Support</h3>
                <span className="about_subtitle">online 24/7</span>
            </div>
        </div>
    )
}

export default Data;