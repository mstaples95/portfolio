import React from "react";
import './homepage.scss'
import ButtonMedium from "../../components/Button-Medium/Button-Medium";
import placeholderImg from "../../assets/images/Union2.png"
import Featured from "../../components/Featured/Featured";
import About from "../../components/About/About";
import Contact from "../../components/Contact/Contact";

const HomePage: React.FC = () => {
    return (

    <>
        <div className="hero">
                <div className="hero__main">
                    <div className="hero__text-content">
                        <h1 className="hero__header">
                            Matthew Staples
                        </h1>
                        <h2 className="hero__sub-header">Freelance Web Developer</h2>
                        <p className="hero__text">
                            I'm a skilled freelance web developer with a passion for creating beautiful and functional websites. I specialize in modern front-end technologies and have experience building responsive, scalable, and user-friendly web applications.
                        </p>
                    </div>
                    <div className="hero__button-container">
                        <ButtonMedium title="View Projects" backgroundColor="black" textColor="white"/>
                        <ButtonMedium title= "Contact Me" backgroundColor="grey" textColor="black"/>
                    </div>    
                </div>
                <div className="hero__img-container">
                    <img className="hero__img" src={placeholderImg} alt="placeholder" />   
                </div>   
        </div>
        <div>
         <Featured/>
         <About/>
         <Contact/>   
        </div>
    </> 
    )
}

export default HomePage;