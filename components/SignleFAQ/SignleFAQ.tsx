import React from 'react';
import styles from './SignleFAQ.module.css';

const SingleFAQ = () => {
    return (
        <div className={styles.single_faq}>
            <h3>How do I search for properties on Estatein?</h3>
            <p>Learn how to use our user-friendly search tools to find properties that match your criteria.</p>
            <button>Read More</button>
        </div>
    );
};

export default SingleFAQ;