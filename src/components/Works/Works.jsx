import "./Works.css";
import React, { useContext } from "react";
import Oracle from "../../img/Oracle.png";
import HackerRank from "../../img/HackerRank.png";
import Sololearn from "../../img/Sololearn.png";
import Udemy from "../../img/Udemy.png";
import GFG from "../../img/GFG.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const Works = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    // transition
    const transition = {
        duration: 3.5,
        type: "spring",
    };
    return (
        <div className="works">
            {/* Left Side */}

            <div className="w-left">
                <div className="awesome">
                    <span style={{ color: darkMode ? "white" : "" }}>
                        Certifications from
                    </span>
                    <span>Renowned Organizations</span>
                    <span>
                        While learning to code, I acquired certificates from
                        various organizations. <br />
                        Feel free to get in touch or view my resume for more
                        details
                    </span>
                    <Link spy={true} smooth={true} to={"Contact"}>
                        <button className="button s-button">Hire Me</button>
                    </Link>
                    <div
                        className="blur s-blur1"
                        style={{
                            background: "#ABF1FF94",
                        }}
                    ></div>
                </div>
            </div>

            {/* Right Side */}
            <div className="w-right">
                <motion.div
                    initial={{ rotate: 45 }}
                    whileInView={{ rotate: 0 }}
                    viewport={{ margin: "-40px" }}
                    transition={transition}
                    className="w-mainCircle"
                >
                    <div className="w-secCircle">
                        <img src={HackerRank} alt="HackerRank Logo" />
                    </div>
                    <div className="w-secCircle">
                        <img src={Udemy} alt="Udemy Logo" />
                    </div>
                    <div className="w-secCircle">
                        <img src={Oracle} alt="Oracle Logo" />
                    </div>
                    <div className="w-secCircle">
                        <img src={Sololearn} alt="Sololearn Logo" />
                    </div>
                    <div className="w-secCircle">
                        <img src={GFG} alt="GFG Logo" />
                    </div>
                </motion.div>
                {/* Background Circles */}
                <div className="w-backCircle blueCircle"></div>
                <div className="w-backCircle yellowCircle"></div>
            </div>
        </div>
    );
};

export default Works;
