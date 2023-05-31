import React from "react";
import './services.css';

const Services = () => {
    return(
        <section className="services section" id="services">
            <h2 className="section_title">Services</h2>
            <span className="section_subtitle">What I Offer</span>

            <div className="services_container container grid">
                <div className="services_content">
                    <i className="ui ui services__icon"></i>
                    <h3 className="services_title"></h3>
                </div>

                <span className="services_button">View More 
                <i className="uil uil-arrow-right services__button-icon"></i>
                </span>

                <div className="services_modal">
                    <div className="services_modal-content">
                        <i className="uil uil-times services_modal-close"></i>

                        <h3 className="services_modal-title"></h3>

                        <p className="services_modal-description">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus ipsam similique totam laborum laudantium, magni eveniet odit optio nobis dicta, beatae suscipit eum molestias aut corporis adipisci ut incidunt quo?</p>
                        
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Services;