import React, { useContext } from "react";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Card from "../Card/Card";
import Resume from "./resume.pdf";
import "./Services.css";
import { motion } from "framer-motion";
import { themeContext } from "../../Context";
const Services = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    // transition
    const transition = {
        duration: 1,
        type: "spring",
    };
    return (
        <div className="services" id="Services">
            {/* Left Side */}

            <div className="awesome">
                <span style={{ color: darkMode ? "white" : "" }}>
                    My Technical
                </span>
                <span>Skills</span>
                <span>
                    A brief overview on the languages and technologies I am
                    skilled with.
                    <br />
                    For more information, view my Resume by clicking below.
                </span>

                <a href={Resume} target="_blank" rel="noopener noreferrer">
                    <button className="button s-button">View Resume</button>
                </a>
                <div
                    className="blur s-blur1"
                    style={{
                        background: "#ABF1FF94",
                    }}
                ></div>
            </div>

            {/* Right Side */}

            <div className="cards">
                <motion.div
                    initial={{ left: "25rem" }}
                    whileInView={{ left: "14rem" }}
                    transition={transition}
                >
                    <Card
                        emoji={HeartEmoji}
                        heading={"Programming Languages"}
                        detail={"Javascript, Java"}
                    />
                </motion.div>

                <motion.div
                    initial={{ left: "-11rem", top: "12rem" }}
                    whileInView={{ left: "-4rem" }}
                    transition={transition}
                >
                    <Card
                        emoji={Glasses}
                        heading={"Web Technologies"}
                        detail={
                            "HTML5, CSS3, Javscript, ReactJS, NodeJS, ExpressJS"
                        }
                    />
                </motion.div>

                <motion.div
                    initial={{ top: "19rem", left: "25rem" }}
                    whileInView={{ left: "12rem" }}
                    transition={transition}
                >
                    <Card
                        emoji={Humble}
                        heading={"Other Technologies"}
                        detail={"Git, Github, MongoDB, SQL"}
                    />
                </motion.div>

                <div
                    className="blur s-blur2"
                    style={{
                        background: "var(--purple)",
                    }}
                ></div>
            </div>
        </div>
    );
};

export default Services;
