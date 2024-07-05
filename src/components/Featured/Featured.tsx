import React from "react";
import "./featured.scss";
import ProjectCard from "../Project-Card/Project-Card";
import sfdbThumb from "../../assets/images/sfdb-thumb.png";
import gggThumb from "../../assets/images/VOAoMl9.png";
import gw2Thumb from "../../assets/images/760bdpvp-update-01.jpg";
import gen2Thumb from "../../assets/images/paul-saveliev-gen-2.jpg";


const Featured: React.FC = () =>{
    return (
        <div className="featured">
            <div className="featured__header">
                <h1 className="featured__header-text">Featured Projects</h1>
                <p className="featured__subheader">Check out some of my recent web development projects.</p>    
            </div>
            <div className="featured__project-container">
                <ProjectCard title="GoGoGrocery" description="A meal planning web-app designed to help users figure out what they need at the grocery store." imgUrl={gggThumb}/>
                <ProjectCard title="Street Fighter DB" description="An open-source API project for developers and fans of street Fighter." imgUrl={sfdbThumb}/>
                <ProjectCard title="GW2 PVP Stats" description="A tool for players to see their ranked and unranked PVP progression." imgUrl={gw2Thumb}/>
                <ProjectCard title="Gen 2 Pokemon Quiz" description="A quiz app where you answer questions to find out what Pokemon matches your personality." imgUrl={gen2Thumb}/>
            </div>
        </div>
    )
}

export default Featured;