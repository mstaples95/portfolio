
import React from "react";
import './button-medium.scss'

interface ButtonProps{
    title: string;
    backgroundColor: string;
    textColor: string;
} 

const ButtonMedium: React.FC<ButtonProps> = ({title,backgroundColor, textColor}) => {
    const buttonStyle = {
        backgroundColor: backgroundColor,
        color: textColor,
    };

    return (
        <div className="button-medium" style={buttonStyle}>
            <p>{title}</p>
        </div>
    )
}

export default ButtonMedium;