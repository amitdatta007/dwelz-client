import Image from "next/image";
import styles from "./SingleProperties.module.css";
import img from "@/assets/try.png";
import bedIcon from "@/assets/icons/bed-icon.svg";

const SingleProperties = () => {
    return (
        <div className={styles.single_properties}>
            <div>
                <Image alt="" src={img} />
            </div>
            <div>
                <h3>Seaside Serenity Villa</h3>
                <p>A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood... Read More</p>
            </div>
            <div className={styles.properties_info_overview}>
                <div>
                    <Image src={bedIcon} alt="" />
                    <span>4-Bedroom</span>
                </div>
                <div>
                    <Image src={bedIcon} alt="" />
                    <span>4-Bedroom</span>
                </div>
                <div>
                    <Image src={bedIcon} alt="" />
                    <span>4-Bedroom</span>
                </div>
            </div>
            <div className={styles.price_info}>
                <div>
                    <p>Price</p>
                    <h3>$550,000</h3>
                </div>
                <button>View Property Details</button>
            </div>
        </div>
    );
};

export default SingleProperties;