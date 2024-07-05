import React from "react";
import "./projectcard.scss"

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
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default ProjectCard;