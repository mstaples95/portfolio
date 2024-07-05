import React from "react";
import "./about.scss";
import ButtonMedium from "../Button-Medium/Button-Medium";

const About: React.FC = () =>{
    return (
        <div className="about">
            <div className="about__header">
                <h1 className="about__header-text">About Me</h1>
                <div className="about__button-container">
                <ButtonMedium textColor="white" backgroundColor="black" title="Hire Me"/>
                <ButtonMedium textColor="black" backgroundColor="grey" title="Download CV"/>
                </div>
            </div>
            <div className="about__text-content">
                <div className="about__main-text">
                    <p>
                        I'm a skilled freelance web developer with 2 years of experience in the industry. I specialize in building modern, responsive, and user-friendly websites and web applications using the latest front-end technologies.
                    </p>
                </div>
                <div className="about__subheading">
                    <div className="about__subheading-left">
                        <h3 className="about__subheader">Skills</h3>
                        <ul>
                            <li>HTML/CSS</li>
                            <li>JavaScript</li>
                            <li>React</li>
                            <li>Node.js</li>
                        </ul>
                    </div>
                    <div className="about__subheading-right">
                        <h3 className="about__subheader">Experience</h3>
                        <ul>
                            <li>Worked with clients in various industries</li>
                            <li>Delivered high-quality, responsive websites</li>
                            <li>Created wireframes, mockups, and prototypes to visualize website designs</li>
                            <li>Integrated back-end services and APIs to enhance website functionality</li>
                        </ul>
                    </div>
                </div>

            </div>
            
        </div>
    )
}

export default About;