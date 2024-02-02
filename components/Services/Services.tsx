import Image from "next/image";
import styles from "./Services.module.css";
import service1 from "@/assets/services-icon/service-1.svg";
import service2 from "@/assets/services-icon/service-2.svg";
import service3 from "@/assets/services-icon/service-3.svg";
import service4 from "@/assets/services-icon/service-4.svg";
import arrow from "@/assets/services-icon/arrow.svg";

const Services = () => {
    return (
        <section className={styles.services_section}>
            <div className={styles.services}>
                <div>
                    <Image className={styles.arrow_icon} src={arrow} alt="" />
                    <Image src={service1} alt="" />
                    <p>Find Your Dream Home</p>
                </div>
                <div>
                    <Image className={styles.arrow_icon} src={arrow} alt="" />
                    <Image src={service2} alt="" />
                    <p>Unlock Property Value</p>
                </div>
                <div>
                    <Image className={styles.arrow_icon} src={arrow} alt="" />
                    <Image src={service3} alt="" />
                    <p>Effortless Property Management</p>
                </div>
                <div>
                    <Image className={styles.arrow_icon} src={arrow} alt="" />
                    <Image src={service4} alt="" />
                    <p>Smart Investments, Informed Decisions</p>
                </div>
            </div>
        </section>
    );
};

export default Services;