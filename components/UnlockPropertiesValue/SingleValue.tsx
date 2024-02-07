import Image from 'next/image';
import React from 'react';
import styles from './UnlockPropertiesValue.module.css';

interface SingleValueProps {
    icon: string;
    title: string;
    description: string;
}

const SingleValue = ({ data }: { data: SingleValueProps }) => {
    const { icon, title, description } = data;
    return (
        <div className={styles.single_value}>
            <div>
                <Image src={icon} alt="" />
                <h3>{title}</h3>
            </div>
            <p>{description}</p>
        </div>
    );
};

export default SingleValue;