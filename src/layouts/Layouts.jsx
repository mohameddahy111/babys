import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from './components';
import { useTranslation } from 'react-i18next';

const Layouts = () => {
	const { t, locale } = useTranslation();
	return (
		<>
			<Navbar />
			<Outlet />
		</>
	);
};

export default Layouts;
