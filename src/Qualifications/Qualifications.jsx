import React from "react";
import './qualifications.css'

const Qualifications = () => {
    return(
        <section className="qualification section">
            <h2 className="section_title">Qualifications</h2>
            <span className="section_subtitle">My Personal journey</span>

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

                
            </div>
        </section>
    );
}

export default Qualifications;