import React from "react";
import "./contact.scss"
import emailIcon from "../../assets/icons/icons8-email-50.png"
import phoneIcon from "../../assets/icons/icons8-phone-50.png"
import githubIcon from "../../assets/icons/icons8-github.svg"
import ButtonMedium from "../Button-Medium/Button-Medium";

const Contact: React.FC = () =>{
    return (
        <div className="contact">

            <div className="contact__header">
                <h1 className="contact__header-text">Get in Touch</h1>
                <p className="contact__header-subtext">I'd love to hear from you! Fill out the form below and I'll get back to you as soon as possible.</p>
            </div>

            <div className="contact__content">
                <form className="contact__form">
                    <label className="contact__label">Name</label>
                    <input className="contact__input" id="name" placeholder="John Doe"></input>
                    <label className="contact__label">Email</label>
                    <input className="contact__input" id="email" placeholder="john@example.com"></input>
                    <label className="contact__label">Message</label>
                    <textarea id="message" placeholder="Your message..."></textarea>
                    <ButtonMedium textColor="white" backgroundColor="black" title="Submit"/>
                </form>
            
            
                <div className="contact__info">
                    <ul className="contact__list"> 
                        <li className="contact__list-item">
                            <img className="contact__icon" src={emailIcon} alt="email"></img>
                            <p className="contact__text">mstaples95130@gmail.com</p>
                        </li>
                        <li className="contact__list-item">
                            <img className="contact__icon" src={phoneIcon} alt="phone"></img>
                            <p className="contact__text">+1(647)678-7313</p>
                        </li>
                        <li className="contact__list-item">
                            <img className="contact__icon" src={githubIcon} alt="github"></img>
                            <p className="contact__text">https://github.com/mstaples95</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Contact;