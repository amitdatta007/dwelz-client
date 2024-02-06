import Image from 'next/image';
import styles from './Testimonials.module.css';
import threeStar from "@/assets/three-star.svg";
import TestimonialsSlider from '../TestimonialsSlider/TestimonialsSlider.';

const Testimonials = () => {
    return (
        <section className={styles.testimonials_section}>
            <Image src={threeStar} alt="" />
            <div className={styles.section_info}>
                <h2>Featured Properties</h2>
                <div>
                    <p>Explore our handpicked selection of featured properties. Each listing offers a glimpse into exceptional homes and investments available through Dwelz. <br /> <span>Click View Details for more information.</span></p>
                    <button className={styles.view_btn_1}>View All Properties</button>
                </div>
                <TestimonialsSlider />
            </div>
        </section>
    );
};

export default Testimonials;