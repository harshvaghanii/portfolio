import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Ecommerce from "../../img/Ecommerce.jpg";
import NoteZipper from "../../img/NoteZipper.jpg";
import UnderConstruction from "../../img/UnderConstruction.png";
import { themeContext } from "../../Context";

const Portfolio = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    const projects = [
        {
            id: 1,
            img: NoteZipper,
            link: "https://github.com/harshvaghanii/notes",
            available: true,
        },
        {
            id: 2,
            img: Ecommerce,
            link: "https://toykart-3ba5e.web.app/",
            available: true,
        },
        {
            id: 3,
            img: UnderConstruction,
            link: "/",
            available: false,
        },
        {
            id: 4,
            img: UnderConstruction,
            link: "/",
            available: false,
        },
        {
            id: 5,
            img: UnderConstruction,
            link: "/",
            available: false,
        },
        {
            id: 6,
            img: UnderConstruction,
            link: "/",
            available: false,
        },
    ];

    return (
        <div className="portfolio" id="Portfolio">
            {/* Heading */}
            <span style={{ color: darkMode ? "white" : "" }}>
                Recent Projects
            </span>
            <span>Portfolio</span>

            {/* Slider */}

            <Swiper
                spaceBetween={30}
                slidesPerView={3}
                grabCursor={true}
                className={"portfolio-slider"}
            >
                {projects.map((project) => {
                    return (
                        <SwiperSlide key={project.id}>
                            <a
                                href={project.link}
                                target={project.available ? "_blank" : ""}
                                rel="noreferrer"
                            >
                                <img src={project.img} alt="" />
                            </a>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </div>
    );
};

export default Portfolio;
