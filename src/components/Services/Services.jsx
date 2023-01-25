import React from "react";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Card from "../Card/Card";
import Resume from "./resume.pdf";
import "./Services.css";
const Services = () => {
    return (
        <div className="services">
            {/* Left Side */}

            <div className="awesome">
                <span>My Awesome</span>
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
                <div
                    style={{
                        left: "14rem",
                    }}
                >
                    <Card
                        emoji={HeartEmoji}
                        heading={"Design"}
                        detail={"Figma, Sketch, Photoshop, Adobe XD"}
                    />
                </div>

                <div
                    style={{
                        left: "-4rem",
                        top: "12rem",
                    }}
                >
                    <Card
                        emoji={Glasses}
                        heading={"Developer"}
                        detail={"HTML5, CSS3, Javscript"}
                    />
                </div>

                <div
                    style={{
                        left: "12rem",
                        top: "19rem",
                    }}
                >
                    <Card
                        emoji={Humble}
                        heading={"UI/UX"}
                        detail={
                            "Lorem ipsum dummy text is a this very real dummy text and this is a very"
                        }
                    />
                </div>

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
