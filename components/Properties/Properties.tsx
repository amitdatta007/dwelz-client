/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import styles from "./Properties.module.css";
import threeStar from "@/assets/three-star.svg";
import PropertiesSlider from "../PropertiesSlider/PropertiesSlider";


const Properties = () => {
    return (
        <section className={styles.properties_section}>
            <Image src={threeStar} alt="" />
            <div className={styles.section_info}>
                <h2>Featured Properties</h2>
                <div>
                    <p>Explore our handpicked selection of featured properties. Each listing offers a glimpse into exceptional homes and investments available through Dwelz. <br /> <span>Click 'View Details' for more information.</span></p>
                    <button className={styles.view_btn_1}>View All Properties</button>
                </div>

                <PropertiesSlider />
            </div>
        </section>
    );
};

export default Properties;