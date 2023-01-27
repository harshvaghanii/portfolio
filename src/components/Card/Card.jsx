import React, { useContext } from "react";
import "./Card.css";
import { themeContext } from "../../Context";
const Card = ({ emoji, heading, detail }) => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    return (
        <div className="card">
            <img src={emoji} alt="Emoji" />
            <span>{heading}</span>
            <span>{detail}</span>
            <button
                className="c-button"
                style={darkMode ? { background: "none" } : { background: "" }}
            >
                LEARN MORE
            </button>
        </div>
    );
};

export default Card;
