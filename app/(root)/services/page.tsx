import ServiceSectionInfo from '@/components/ServiceSectionInfo/ServiceSectionInfo';
import Services from '@/components/Services/Services';
import UnlockPropertiesValue from '@/components/UnlockPropertiesValue/UnlockPropertiesValue';
import React from 'react';

const ServicePage = () => {
    return (
        <main>
            <ServiceSectionInfo />
            <Services />
            <UnlockPropertiesValue />
        </main>
    );
};

export default ServicePage;