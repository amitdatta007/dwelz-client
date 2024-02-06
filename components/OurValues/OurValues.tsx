import React from 'react';
import styles from './OurValues.module.css';
import Image from 'next/image';
import trust from '@/assets/values-icon/trust.svg';
import client from '@/assets/values-icon/client.svg';
import commitment from '@/assets/values-icon/commitment.svg';
import excellence from '@/assets/values-icon/excellence.svg';
import threeStar from "@/assets/three-star.svg";

const OurValues = () => {
    return (
        <section className={styles.our_values_section}>
            <div className={styles.section_info}>
                <Image className={styles.three_star} src={threeStar} alt="" />
                <h2>Our Values</h2>
                <p>Our story is one of continuous growth and evolution. We started as a small team with big dreams, determined to create a real estate platform that transcended the ordinary.</p>
            </div>
            <div className={styles.values}>
                <div>

                    <div className={styles.single_value}>
                        <div>
                            <div className={styles.values_icon}>
                                <Image src={trust} alt='' />
                            </div>
                            <h3>Trust</h3>
                        </div>
                        <p>Trust is the cornerstone of every successful real estate transaction.</p>
                    </div>

                    <div className={styles.single_value}>
                        <div>
                            <div className={styles.values_icon}>
                                <Image src={excellence} alt='' />
                            </div>
                            <h3>Excellence</h3>
                        </div>
                        <p>We set the bar high for ourselves. From the properties we list to the services we provide.</p>
                    </div>

                    <div className={styles.single_value}>
                        <div>
                            <div className={styles.values_icon}>
                                <Image src={client} alt='' />
                            </div>
                            <h3>Client-Centric</h3>
                        </div>
                        <p>Your dreams and needs are at the center of our universe. We listen, understand.</p>
                    </div>

                    <div className={styles.single_value}>
                        <div>
                            <div className={styles.values_icon}>
                                <Image src={commitment} alt='' />
                            </div>
                            <h3>Our Commitment</h3>
                        </div>
                        <p>We are dedicated to providing you with the highest level of service, professionalism, and support.</p>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default OurValues;