import React from "react";
import "./projectcard.scss";
import { useInView } from "react-intersection-observer";
import ButtonMedium from "../Button-Medium/Button-Medium";

interface CardProps {
title: string;
description: string;
imgUrl: string;
techIcon1: string;
techIcon2: string;
techIcon3: string;
techIcon4: string;
techIcon5: string;
}

const ProjectCard: React.FC<CardProps> = ({title, description, imgUrl ,techIcon1, techIcon2, techIcon3, techIcon4, techIcon5}) => {
    
    const { ref, inView} = useInView({
        triggerOnce: true,
        threshold: 0.1,
    })
    
    return (
        <div ref={ref} className={`project-card card ${inView ? 'visible' : ''}`}>
            <img className="project-card__img" src={imgUrl} alt={title}/>
            <div className="project-card__content">
                <h3 className="project-card__heading">{title}</h3>
                <div>
                    <p>Made with:</p>
                    <ul className="project-card__tech-icon-list">
                        <img className="project-card__icon" src={techIcon1} alt="javascript"/>
                        <img className="project-card__icon" src={techIcon2} alt=""/>
                        <img className="project-card__icon" src={techIcon3} alt=""/>
                        <img className="project-card__icon" src={techIcon4} alt=""/>
                        <img className="project-card__icon" src={techIcon5} alt=""/>
                    </ul>
                </div>
                <p className="project-card__text">{description}</p>

               <div className="project-card__button-container">
                    <ButtonMedium title="View Repo" textColor="white" backgroundColor="#674188"/>
                </div> 
            </div>
            
        </div>
    );
}

export default ProjectCard;