import React from 'react';

const Contact = () => {
    return (
        <section className="contact section" id="contact">
            <h2 className="section_title" 
            style={{
                textAlign: "center"
                }}
                >Get in touch</h2>
            <span className="section_subtitle"
            style=
            {{ display: "block", 
            textAlign: "center" 
            }}
            >Contact me</span>

            <div className="contact_container container grid">
                <div className="contact_content">
                    <h3 className="contact_title">Talk to me</h3>

                    <div className="contact_info">
                        <div className="contact__card">
                            <i className="bx bx-mail-send contact__card-icon"></i>

                            <h3 className="contact_card-title">Email</h3>
                            <span className="contact_card-data">alamba570@gmail.com</span>

                            <a href="mailto:alamba570@gmail.com.com" className="contact_button">
                                Write me{" "} <i className="bx bx-right-arrow-alt contact_button-icon"></i>
                            </a>
                        </div>

                        <div className="contact__card">
                            <i className="bx bxl-whatsapp contact__card-icon"></i>

                            <h3 className="contact_card-title">Whatsapp</h3>
                            <span className="contact_card-data">+91-9821816465</span>

                            <a href="https://wa.link/kgs94b" className="contact_button">
                                Write me <i className="bx bx-right-arrow-alt contact_button-icon"></i>
                            </a>
                        </div>


                        <div className="contact__card">
                            <i className="bx bxl-linkedin contact__card-icon"></i>

                            <h3 className="contact_card-title">Linkedin</h3>
                            <span className="contact_card-data">Ankush Lamba</span>

                            <a href="https://www.linkedin.com/in/ankush-lamba/" className="contact_button">
                                Write me <i className="bx bx-right-arrow-alt contact_button-icon"></i>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="contact_content">
                    <h3 className="contact_title">Write me Your proposal</h3>

                    <form className="contact_form">
                        <div className="contact_form-div">
                            <label htmlFor="" className="contact_form-tag">Name</label>
                            <input 
                            type="text" 
                            name='name' 
                            className="contact_form-input" 
                            placeholder='Insert Your Name'/>
                        </div>

                        <div className="contact_form-div">
                            <label htmlFor="" className="contact_form-tag">Mail</label>
                            <input 
                            type="email" 
                            name='email' 
                            className="contact_form-input" 
                            placeholder='Insert Your Email'/>
                        </div>

                        <div className="contact_form-div">
                            <label htmlFor="" className="contact_form-tag">Project</label>
                            <textarea 
                            name="project" 
                            className='contact_form-input' 
                            cols="30" 
                            rows="10"
                            placeholder='Write Your project'></textarea>
                        </div>
                    </form>
                </div>


            </div>    
        </section>
    );
};

export default Contact;