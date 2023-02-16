import React, { useContext } from "react";
import Github from "../../img/github.png";
import Linkedin from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy from "../../img/boy.png";
import thumbup from "../../img/thumbup.png";
import Crown from "../../img/crown.png";
import glassesemoji from "../../img/glassesemoji.png";
import FloatingDiv from "../FloatingDiv/FloatingDiv";
import "./Intro.css";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
// End of Imports

const Intro = () => {
    const transition = {
        duration: 2,
        type: "spring",
    };

    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    return (
        <div className="intro">
            <div className="i-left">
                <div className="i-name">
                    <span style={darkMode ? { color: "white" } : { color: "" }}>
                        Hi! I Am{" "}
                    </span>
                    <span>Harsh Vaghani</span>
                    <span>
                        An Engineer equipped with array of experience and
                        Expertise such as Software Development,<br /> 
                        Business
                        Analysis and on a mission to produce Quality Work!
                    </span>
                </div>
                <Link spy={true} smooth={true} to={"Contact"}>
                    <button className="button i-button">Hire me!</button>
                </Link>
                <div className="i-icons">
                    <a
                        href="https://github.com/harshvaghanii"
                        target={"_blank"}
                        rel="noopener noreferrer"
                    >
                        <img src={Github} alt="Github Logo" />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/harshvaghanii/"
                        target={"_blank"}
                        rel="noopener noreferrer"
                    >
                        <img src={Linkedin} alt="Linkedin Logo" />
                    </a>
                    <a
                        href="https://www.instagram.com/harshvaghanii/"
                        target={"_blank"}
                        rel="noopener noreferrer"
                    >
                        <img src={Instagram} alt="Instagram Logo" />
                    </a>
                </div>
            </div>
            <div className="i-right">
                <img src={Vector1} alt="Vector 1" />
                <img src={Vector2} alt="Vector 2" />
                <img src={boy} alt="Boy" />
                <motion.img
                    initial={{ left: "-36%" }}
                    whileInView={{ left: "-24%" }}
                    transition={transition}
                    src={glassesemoji}
                    alt="Glasses Emoji"
                />

                <motion.div
                    initial={{ top: "-4%", left: "74%" }}
                    whileInView={{ left: "68%" }}
                    transition={transition}
                    className="floating-div"
                >
                    <FloatingDiv
                        image={Crown}
                        txt1={"Software"}
                        txt2={"Developer"}
                    />
                </motion.div>

                <motion.div
                    initial={{ left: "9rem", top: "18rem" }}
                    whileInView={{ left: "5rem" }}
                    transition={transition}
                    className="floating-div"
                >
                    <FloatingDiv
                        image={thumbup}
                        txt1={"Technical"}
                        txt2={"Analyst"}
                    />
                </motion.div>

                {/* Blur Divs */}
                <div
                    className="blur"
                    style={{
                        backgroundColor: "rgb(238 210 255)",
                    }}
                ></div>
                <div
                    className="blur"
                    style={{
                        backgroundColor: "#c1f5ff",
                        top: "17rem",
                        width: "21rem",
                        height: "11rem",
                        left: "-9rem",
                    }}
                ></div>
            </div>
        </div>
    );
};

export default Intro;
