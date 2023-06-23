import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
// import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Linkedin from "@iconscout/react-unicons/icons/uil-linkedin";
import Github from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
    const aStyle = {
        textDecoration: "none",
        color: "white",
    };
    return (
        <div className="footer">
            <img
                src={Wave}
                alt="Footer"
                style={{
                    width: "100%",
                }}
            />
            <div className="f-content">
                <a
                    href="mailto:harshvaghani98@gmail.com"
                    target="_blank"
                    style={aStyle}
                    rel="noreferrer"
                >
                    <span>harshvaghani98@gmail.com</span>
                </a>
                <div className="f-icons">
                    <a
                        style={aStyle}
                        href="https://www.instagram.com/harshvaghanii/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <Insta color={"white"} size="3rem" />
                    </a>
                    <a
                        style={aStyle}
                        href="https://www.linkedin.com/in/harshvaghanii/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <Linkedin color={"white"} size="3rem" />
                    </a>
                    <a
                        style={aStyle}
                        href="https://github.com/harshvaghanii"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <Github color={"white"} size="3rem" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Footer;
