import React from "react";

const Card = ({ emoji, heading, detail }) => {
    return (
        <div className="card">
            <img src={emoji} alt="Emoji" />
            <span>{heading}</span>
            <span>{detail}</span>
            <button className="c-button">LEARN MORE</button>
        </div>
    );
};

export default Card;
