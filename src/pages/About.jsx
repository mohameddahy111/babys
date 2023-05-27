import React, { useState } from 'react';
import { Helmet } from 'react-helmet';

import { useTranslation } from 'react-i18next';

const About = () => {
	const { t, locale } = useTranslation();

	return (
		<div>
			<Helmet>
				<title>{t('superTitle.about')}</title>
			</Helmet>
			about
		</div>
	);
};

export default About;
