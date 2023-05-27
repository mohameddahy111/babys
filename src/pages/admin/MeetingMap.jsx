import React from 'react';
import { DataStore } from '../../context/Store';
import { Card, CardHeader, Container, Grid, Typography } from '@mui/material';

const MeetingMap = () => {
	const { orderList, meetingList, setMeetingList, setOrderList } = DataStore();

	return (
		<>
			<Container>
				<Grid container spacing={1}>
					{meetingList.map((x, index) => (
						<Grid item md={4} xs={12} key={index}>
							<Card sx={{ p: '10px' }}>
								<Typography>
									client: {x.data.firstName} {''} {x.data.lastName}{' '}
								</Typography>
								<Typography>Email :{x.data.email} </Typography>
								<Typography>phone :{x.data.phone} </Typography>
								<Typography bgcolor={'#f0c000'}>Date :{x.date} </Typography>
							</Card>
						</Grid>
					))}
				</Grid>
			</Container>
		</>
	);
};

export default MeetingMap;
