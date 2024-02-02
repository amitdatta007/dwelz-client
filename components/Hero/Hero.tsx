import Link from "next/link";
import styles from "./Hero.module.css";
import bg from "@/assets/bg-1.png";
import Image from "next/image";

const Hero = () => {
    return (
        <section className={styles.hero_section}>

            <div className={styles.hero_info}>
                <div className="">
                    <h1>Discover Your Dream <br /> Property with Estatein</h1>
                    <p>Your journey to finding the perfect property begins here. Explore our listings to find the home that matches your dreams.</p>
                </div>
                <div className={styles.hero_btn_area}>
                    <Link className={styles.learn_more_btn} href=''>Learn More</Link>
                    <Link className={styles.properties_btn} href=''>Browse Properties</Link>
                </div>
                <div className={styles.service_info_area}>
                    <div>
                        <h2>200+</h2>
                        <p>Happy Customers</p>
                    </div>
                    <div>
                        <h2>200+</h2>
                        <p>Properties For Clients</p>
                    </div>
                    <div>
                        <h2>200+</h2>
                        <p>Years of Experience</p>
                    </div>
                </div>
            </div>

            <div className={styles.hero_image}>
                <Image src={bg} alt="" />
            </div>

        </section>
    );
};

export default Hero;