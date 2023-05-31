import React, { useState } from "react";
import './services.css';

const Services = () => {

    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
        setToggleState(index);
    }
    return(
        <section className="services section" id="services">
            <h2 className="section_title"
            style={{
                textAlign: "center",
                }}
                >Services</h2>

            <span className="section_subtitle"  
            style=
            {{ display: "block", 
            textAlign: "center" 
            }}
            >What I Offer</span>

            <div className="services_container container grid">
                <div className="services_content">
                    <i className="uil uil-web-grid services__icon"></i>
                    <h3 className="services_title">
                        Software Developer
                    </h3>

                    <span className="services_button" onClick={() => toggleTab(1)}>
                    View More 
                <i className="uil uil-arrow-right services__button-icon"></i>
                </span>
                    
                </div>

                

                <div className={toggleState===1 ? "services_modal active-modal" : "services_modal"}>
                    <div className="services_modal-content">
                        <i onClick={() => toggleTab(0)} className="uil uil-times services_modal-close"></i>

                        <h3 className="services_modal-title">Developer</h3>

                        <p className="services_modal-description">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus ipsam similique totam laborum laudantium, magni eveniet odit optio nobis dicta?</p>
                        
                        <ul className="services_modal-services grid">
                            <li className="services_modal-services">
                                <i className="uil uil-check-cirle services_modal-icon"></i>
                                <p className="services_modal-info">
                                    I develop Android applications.
                                </p>
                            </li>

                            <li className="services_modal-services">
                                <i className="uil uil-check-cirle services_modal-icon"></i>
                                <p className="services_modal-info">
                                    I develop React applications.
                                </p>
                            </li>

                            <li className="services_modal-services">
                                <i className="uil uil-check-cirle services_modal-icon"></i>
                                <p className="services_modal-info">
                                    I design UI & UX.
                                </p>
                            </li>

                            <li className="services_modal-services">
                                <i className="uil uil-check-cirle services_modal-icon"></i>
                                <p className="services_modal-info">
                                    I deploy them and maintain their scalability.
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Services;