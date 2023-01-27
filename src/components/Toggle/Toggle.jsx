import React from "react";
import Sun from "@iconscout/react-unicons/icons/uil-sun";
import Moon from "@iconscout/react-unicons/icons/uil-moon";
import "./Toggle.css";
import { themeContext } from "../../Context";
import { useContext } from "react";

const Toggle = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

    const themeToggleHandler = () => {
        theme.dispatch({ type: "toggle" });
    };

    return (
        <div className="toggle" onClick={themeToggleHandler}>
            <Moon />
            <Sun />
            <div
                className="t-button"
                style={darkMode ? { right: "2px" } : { left: "2px" }}
            ></div>
        </div>
    );
};

export default Toggle;
