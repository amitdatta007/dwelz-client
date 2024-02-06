import React from 'react';
import styles from './AboutHero.module.css'
import Image from 'next/image';
import threeStar from "@/assets/three-star.svg";
import bg from "@/assets/bg-2.svg";
import hero from "@/assets/about-hero.png"

const AboutHero = () => {
    return (
        <section className={styles.about_us_hero_section}>
            <div className={styles.hero_info}>
                <div>
                    <Image className={styles.three_star} src={threeStar} alt="" />
                    <h2>Our Journey</h2>
                    <p>Our story is one of continuous growth and evolution. We started as a small team with big dreams, determined to create a real estate platform that transcended the ordinary. Over the years, we have expanded our reach, forged valuable partnerships, and gained the trust of countless clients.</p>
                </div>
                <div className={styles.service_info_area}>
                    <div>
                        <h3>200+</h3>
                        <p>Happy Customers</p>
                    </div>
                    <div>
                        <h3>200+</h3>
                        <p>Properties For Clients</p>
                    </div>
                    <div>
                        <h3>200+</h3>
                        <p>Years of Experience</p>
                    </div>
                </div>
            </div>
            <div className={styles.hero_image}>
                <Image className={styles.img_bg} src={bg} alt="" />
                <Image className={styles.img} src={hero} alt='' />
            </div>
        </section>
    );
};

export default AboutHero;