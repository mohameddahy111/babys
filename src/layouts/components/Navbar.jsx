import {
	AppBar,
	Box,
	Button,
	Container,
	Toolbar,
	Typography,
} from '@mui/material';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
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
						<Box display={'flex'} justifyContent={'space-between'}>
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
							<Box p={2} display={'flex'} gap={1}>
								<Button
									variant='contained'
									onClick={() => {
										navigate('/registration');
									}}
								>
									registration
								</Button>
								<Button
									variant='contained'
									onClick={() => {
										navigate('/login');
									}}
								>
									login
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
