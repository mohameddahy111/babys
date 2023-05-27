import {
	AppBar,
	Box,
	Button,
	Container,
	Toolbar,
	Typography,
} from '@mui/material';
import React from 'react';
import { Link, useNavigate, useRoutes } from 'react-router-dom';
import styles from '../layout.module.css';
import { DataStore } from '../../context/Store';

const Navbar = () => {
	const navigate = useNavigate();
	const { mobileDives } = DataStore();
	return (
		<>
			<AppBar position='static'>
				<Toolbar
					sx={{
						bgcolor: '#fff',
					}}
				>
					<Container className={mobileDives ? '' : styles.navContainer}>
						<Box display={'flex'} justifyContent={'center'}>
							<Box>
								<Link to={'/'}>
									<Typography
										component={'h1'}
										variant='h4'
										textTransform={'capitalize'}
										color={'#000'}
									>
										name
									</Typography>
								</Link>
							</Box>
							<Box p={2}>
								<Button
									variant='contained'
									onClick={() => {
										navigate('/registration');
									}}
								>
									registration
								</Button>
							</Box>
						</Box>
					</Container>
				</Toolbar>
			</AppBar>
		</>
	);
};

export default Navbar;
