import { AdminPanelSettingsOutlined } from '@mui/icons-material';
import {
	AppBar,
	Avatar,
	Box,
	Container,
	Toolbar,
	Typography,
} from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const AdminNav = () => {
	return (
		<>
			<AppBar position='static'>
				<Toolbar>
					<Container sx={{ display: 'flex', justifyContent: 'space-between' }}>
						<Box>
							<Link to={'/admin'}>
								<Typography variant='h5' color={'#fff'}>
									Name
								</Typography>
							</Link>
						</Box>
						<Box
							display={'flex'}
							justifyContent={'center'}
							gap={2}
							alignItems={'center'}
						>
							<AdminPanelSettingsOutlined />
							<Box>
								<Avatar sx={{ mb: '5px' }} />
								<span>Hi , moahmed</span>
							</Box>
						</Box>
					</Container>
				</Toolbar>
			</AppBar>
		</>
	);
};

export default AdminNav;
