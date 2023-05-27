import React from 'react';
import { Helmet } from 'react-helmet';
 import { useTranslation } from 'react-i18next';

const Home = () => {
    const {t, locale } =useTranslation()
    return (
        <>
        			<Helmet title={t('superTitle.home')}></Helmet>

            Home
        </>
    );
}

export default Home;
