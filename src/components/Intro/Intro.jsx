import React from "react";
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
// End of Imports

const Intro = () => {
    return (
        <div className="intro">
            <div className="i-left">
                <div className="i-name">
                    <span>Hi! I Am </span>
                    <span>Harsh Vaghani</span>
                    <span>
                        Frontend Developer with high level of experience in web
                        designing and development, producing the Quality work!
                    </span>
                </div>
                <button className="button i-button">Hire me!</button>
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
                <img src={glassesemoji} alt="Glasses Emoji" />

                <div
                    style={{
                        top: "-4%",
                        left: "58%",
                    }}
                >
                    <FloatingDiv
                        image={Crown}
                        txt1={"Web"}
                        txt2={"Developer"}
                    />
                </div>

                <div
                    style={{
                        top: "18rem",
                        left: "5rem",
                    }}
                >
                    <FloatingDiv
                        image={thumbup}
                        txt1={"Best Design"}
                        txt2={"Award"}
                    />
                </div>

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
