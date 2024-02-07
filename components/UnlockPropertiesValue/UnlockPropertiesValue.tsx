import React from 'react';
import styles from './UnlockPropertiesValue.module.css';
import Image from 'next/image';
import threeStar from "@/assets/three-star.svg";
import valuation from '@/assets/icons/valuation.svg';
import stratagic from '@/assets/icons/stratagic.svg';
import negotiation from '@/assets/icons/negotiation.svg';
import closing from '@/assets/icons/closing.svg';
import SingleValue from './SingleValue';
import bg from '@/assets/bg-3.svg';

const valuesData = [
    { 
        icon: valuation,
        title: 'Valuation Mastery',
        description: 'Discover the true worth of your property with our expert valuation services.',
    },
    { 
        icon: stratagic,
        title: 'Strategic Marketing',
        description: 'Selling a property requires more than just a listing; it demands a strategic marketing approach.',
    },
    { 
        icon: negotiation,
        title: 'Negotiation Wizardry',
        description: 'Negotiating the best deal is an art, and our negotiation experts are masters of it.',
    },
    { 
        icon: closing,
        title: 'Closing Success',
        description: 'A successful sale is not complete until the closing. We guide you through the intricate closing process.',
    },
]

const UnlockPropertiesValue = () => {
    return (
        <section className={styles.unlock_value_section}>
            <div className={styles.section_info}>
                <Image src={threeStar} alt="" />
                <h2>Unlock Property Value</h2>
                <p>Selling your property should be a rewarding experience, and at Estatein, we make sure it is. Our Property Selling Service is designed to maximize the value of your property, ensuring you get the best deal possible. Explore the categories below to see how we can help you at every step of your selling journey</p>      
            </div>
            <div className={styles.values}>
                {
                    valuesData.map((value) => <SingleValue key={value.title} data={value} />)
                }
                <div className={styles.learn_more}>
                    <Image src={bg} alt='' />
                    <div>
                        <div>
                            <span>Unlock the Value of Your Property Today</span>
                            <button className={styles.btn}>Learn More</button>
                        </div>
                        <p>Ready to unlock the true value of your property? Explore our Property Selling Service categories and let us help you achieve the best deal possible for your valuable asset.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default UnlockPropertiesValue;