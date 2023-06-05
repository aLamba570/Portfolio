import React from "react";
import './qualifications.css'

const Qualifications = () => {
    return(
        <div className="qualification section">
            <h2 className="section_title"
            style={{
                textAlign: "center",
                }}
                >Qualifications</h2>


            <span className="section_subtitle"
            style=
            {{ display: "block", 
            textAlign: "center" 
            }}
            >My Personal journey</span>

            <div className="qualification_container container">
                <div className="qualification_tabs">
                    <div className="qualification_button qualification-active button--flex">
                        <i className="uil uil-graduation-cap
                         qualification_icons"></i>{" "}
                         Education
                    </div>

                    <div className="qualification_button button--flex">
                        <i className="uil uil-briefcase-alt qualification_icons"></i>{" "}
                        Experience
                    </div>
                </div>

                <div className="qualifications_section">
                    <div className="qualifications_content qualifications_content-active">
                        <div className="qualifications_data">
                            <h3 className="qualifications_title">Web Development</h3>
                            <span className="qualifications_subtitle">VIT-Bhopal</span>
                            <div className="qualification_calender">
                                <i className="uil uil-calender-alt"></i>
                                2021-22
                            </div>
                        </div>

                        <span className="qualification_rounder"></span>
                        <span className="qualifications_line"></span>
                    </div>

                    <div className="qualifications_content qualifications_content-active">
                        <div className="qualifications_data">
                            <h3 className="qualifications_title">Android Development</h3>
                            <span className="qualifications_subtitle">VIT-Bhopal</span>
                            <div className="qualification_calender">
                                <i className="uil uil-calender-alt"></i>
                                2022-Present
                            </div>
                        </div>

                        <span className="qualification_rounder"></span>
                        <span className="qualifications_line"></span>
                    </div>
                    
                    <div className="qualifications_content qualifications_content-active">
                        <div className="qualifications_data">
                            <h3 className="qualifications_title">Java Developer</h3>
                            <span className="qualifications_subtitle">VIT-Bhopal</span>
                            <div className="qualification_calender">
                                <i className="uil uil-calender-alt"></i>
                                2022-Present
                            </div>
                        </div>

                        <span className="qualification_rounder"></span>
                        <span className="qualifications_line"></span>
                    </div>

                    <div className="qualifications_content qualifications_content-active">
                        <div className="qualifications_data">
                            <h3 className="qualifications_title">Data Analysis</h3>
                            <span className="qualifications_subtitle">VIT-Bhopal</span>
                            <div className="qualification_calender">
                                <i className="uil uil-calender-alt"></i>
                                2023-Present
                            </div>
                        </div>

                        <span className="qualification_rounder"></span>
                        <span className="qualification__line"></span>
                    </div>


                </div>
            </div>
        </div>
    );
}

export default Qualifications;