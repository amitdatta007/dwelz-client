"use client"

import React from 'react';
import styles from './FAQSlider.module.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SingleProperties from "../SingleProperties/SingleProperties";
import leftArrow from "@/assets/icons/left-arrow.svg";
import rightArrow from "@/assets/icons/right-arrow.svg";
import Image from "next/image";
import { useRef } from "react";
import SingleFAQ from '../SignleFAQ/SignleFAQ';

const FAQSlider = () => {
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
            <Slider ref={slides => (slider.current = slides)} className={styles.faq_slider} {...setting}>
                <SingleFAQ />
                <SingleFAQ />
                <SingleFAQ />
                <SingleFAQ />
            </Slider>
            <div className={styles.faq_slider_controll}>
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

export default FAQSlider;