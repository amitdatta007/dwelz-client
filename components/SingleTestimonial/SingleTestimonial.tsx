import Image from 'next/image';
import React from 'react';
import styles from './SingleTestimonial.module.css';
import profile from '@/assets/profile.png';
import star from "@/assets/icons/star.svg";

const SingleTestimonial = () => {
    return (
        <div className={styles.single_testimonial}>
            <div className={styles.rating}>
                <div>
                    <Image src={star} alt='' />
                </div>
                <div>
                    <Image src={star} alt='' />
                </div>
                <div>
                    <Image src={star} alt='' />
                </div>
                <div>
                    <Image src={star} alt='' />
                </div>
                <div>
                    <Image src={star} alt='' />
                </div>
            </div>
            <div className={styles.review}>
                <h3>Exceptional Service!</h3>
                <span>Our experience with Estatein was outstanding. Their teams dedication and professionalism made finding our dream home a breeze. Highly recommended!</span>
            </div>
            <div className={styles.customer}>
                <Image src={profile} alt='' />
                <div>
                    <h4>Wade Warren</h4>
                    <p>USA, California</p>
                </div>
            </div>
        </div>
    );
};

export default SingleTestimonial;