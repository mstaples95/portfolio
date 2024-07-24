import React from "react";
import "./projectcard.scss";
import ButtonMedium from "../Button-Medium/Button-Medium";

interface CardProps {
title: string;
description: string;
imgUrl: string;
}

const ProjectCard: React.FC<CardProps> = ({title, description, imgUrl}) => {
    return (
        <div className="project-card">
            <img className="project-card__img" src={imgUrl} alt={title}/>
            <div className="project-card__content">
                <h3 className="project-card__heading">{title}</h3>
                <p className="project-card__text">{description}</p>
            </div>
            <div className="project-card__button-container">
                <ButtonMedium title="View Repo" textColor="white" backgroundColor="#674188"/>
            </div>
        </div>
    );
}

export default ProjectCard;