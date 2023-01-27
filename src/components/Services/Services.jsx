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
        <div className="services">
            {/* Left Side */}

            <div className="awesome">
                <span style={{ color: darkMode ? "white" : "" }}>
                    My Awesome
                </span>
                <span>Services</span>
                <span>
                    Lorem ipsum dolor sit, amet consectetur adipisicing.
                    <br />
                    Lorem ipsum, dolor sit amet consectetur adipisicing.
                </span>

                <a href={Resume} target="_blank" rel="noopener noreferrer">
                    <button className="button s-button">Download CV</button>
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
                        heading={"Design"}
                        detail={"Figma, Sketch, Photoshop, Adobe XD"}
                    />
                </motion.div>

                <motion.div
                    initial={{ left: "-11rem", top: "12rem" }}
                    whileInView={{ left: "-4rem" }}
                    transition={transition}
                >
                    <Card
                        emoji={Glasses}
                        heading={"Developer"}
                        detail={"HTML5, CSS3, Javscript"}
                    />
                </motion.div>

                <motion.div
                    initial={{ top: "19rem", left: "25rem" }}
                    whileInView={{ left: "12rem" }}
                    transition={transition}
                >
                    <Card
                        emoji={Humble}
                        heading={"UI/UX"}
                        detail={
                            "Lorem ipsum dummy text is a this very real dummy text and this is a very"
                        }
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
