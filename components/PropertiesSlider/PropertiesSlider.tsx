"use client"

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./PropertiesSlider.module.css";
import SingleProperties from "../SingleProperties/SingleProperties";
import leftArrow from "@/assets/icons/left-arrow.svg";
import rightArrow from "@/assets/icons/right-arrow.svg";
import Image from "next/image";
import { useRef } from "react";

const PropertiesSlider = () => {
    const slider = useRef<any>();
    const setting = {
        infinite: true,
        slidesToShow: 3,
        swipeToSlide: false,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
                breakpoint: 1080,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 680,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };
    
    return (
        <>
            <Slider ref={slides => (slider.current = slides)} className={styles.properties_slider} {...setting}>
                <SingleProperties />
                <SingleProperties />
                <SingleProperties />
                <SingleProperties />
            </Slider>
            <div className={styles.properties_slider_controll}>
                <div>
                    <button className={styles.view_btn}>View All Properties</button>
                </div>
                <div className={styles.btns}>
                    <button onClick={() => slider.current.slickPrev()}>
                        <Image alt="" src={leftArrow} />
                    </button>
                    <button onClick={() => slider.current.slickNext()}>
                        <Image alt="" src={rightArrow} />
                    </button>
                </div>
            </div>
        </>
    );
};

export default PropertiesSlider;