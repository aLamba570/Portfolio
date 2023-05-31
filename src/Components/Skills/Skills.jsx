import React from "react";
import './skills.css'
import Front from'./Front';
import Back from './Back';

const Skills = () => {
    return(
        <sectiion className="skills section" id="skills">
            <h2 className="section_title" 
            style={{
                textAlign: "center",
                marginTop: "5rem"
                }}
                >Skills</h2>

            <span className="section_subtitle" 
            style=
            {{ display: "block", 
            textAlign: "center" 
            }}
            >My Technical Level</span>

            <div className="skills_container container grid">

            <div className="skills_box left">
          <Front />
        </div>
        <div className="skills_box right">
          <Back />
        </div>
            </div>

        </sectiion>
    );
};

export default Skills;