import React from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Sidebar from "../../img/sidebar.png";
import Ecommerce from "../../img/ecommerce.png";
import HOC from "../../img/hoc.png";
import MusicApp from "../../img/musicapp.png";

const Portfolio = () => {
    const projects = [
        {
            id: 1,
            img: Sidebar,
        },
        {
            id: 2,
            img: Ecommerce,
        },
        {
            id: 3,
            img: HOC,
        },
        {
            id: 4,
            img: MusicApp,
        },
        {
            id: 5,
            img: Sidebar,
        },
        {
            id: 6,
            img: Ecommerce,
        },
        {
            id: 7,
            img: HOC,
        },
    ];

    return (
        <div className="portfolio">
            {/* Heading */}
            <span>Recent Projects</span>
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
                            <img src={project.img} alt="" />
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </div>
    );
};

export default Portfolio;
