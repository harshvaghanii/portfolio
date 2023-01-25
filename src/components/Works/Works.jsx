import "./Works.css";
import React from "react";
import Upwork from "../../img/Upwork.png";
import Fiverr from "../../img/fiverr.png";
import Amazon from "../../img/amazon.png";
import Shopify from "../../img/Shopify.png";
import Facebook from "../../img/Facebook.png";

const Works = () => {
    return (
        <div className="works">
            {/* Left Side */}

            <div className="w-left">
                <div className="awesome">
                    <span>Works for All these</span>
                    <span>Brands & Clients</span>
                    <span>
                        Lorem ipsum dolor sit, amet consectetur adipisicing.
                        <br />
                        Lorem ipsum, dolor sit amet consectetur adipisicing.
                        <br />
                        dolor sit amet consectetur adipisicing.
                        <br />
                        Lorem ipsum dolor sit amet consectetur adipisicing.
                    </span>
                    <button className="button s-button">Hire Me</button>
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
                <div className="w-mainCircle">
                    <div className="w-secCircle">
                        <img src={Upwork} alt="Upwork Logo" />
                    </div>
                    <div className="w-secCircle">
                        <img src={Fiverr} alt="Fiverr Logo" />
                    </div>
                    <div className="w-secCircle">
                        <img src={Amazon} alt="Amazon Logo" />
                    </div>
                    <div className="w-secCircle">
                        <img src={Shopify} alt="Shopify Logo" />
                    </div>
                    <div className="w-secCircle">
                        <img src={Facebook} alt="Facebook Logo" />
                    </div>
                </div>
                {/* Background Circles */}
                <div className="w-backCircle blueCircle"></div>
                <div className="w-backCircle yellowCircle"></div>
            </div>
        </div>
    );
};

export default Works;
