import React from 'react';
import { DataStore } from '../../context/Store';
import {
	Box,
	Button,
	Card,
	Container,
	Grid,
	Typography,
} from '@mui/material';
import { Delete, Done } from '@mui/icons-material';

const MeetingMap = () => {
	const { meetingList, setMeetingList, student, setStudent } = DataStore();
	const sortMeeting = meetingList.sort(
		(a, b) => new Date(a.date) - new Date(b.date)
	);
	// const toDay = new Date().toDateString();
	// console.log(typeof toDay);

	const refusedFun = (item) => {
		const list = meetingList.filter((x) => x.data.phone !== item.data.phone);
		setMeetingList(list);
		localStorage.setItem('meetingList', JSON.stringify(list));
	};
	const acceptableFun = (item) => {
		const list = [...student];
		list.push(item);
		setStudent(list);
		localStorage.setItem('student', JSON.stringify(list));
  refusedFun(item);
	};
	return (
		<>
			<Container>
				<Grid container spacing={1}>
					{sortMeeting.map((x, index) => (
						<Grid item md={4} xs={12} key={index}>
							<Card sx={{ p: '10px' }}>
								<Typography>
									client: {x.data.firstName} {''} {x.data.lastName}{' '}
								</Typography>
								<Typography>Email :{x.data.email} </Typography>
								<Typography>phone :{x.data.phone} </Typography>
								<Typography bgcolor={'#f0c000'}>Date :{x.date} </Typography>
								<Box display={'flex'} gap={1} p={1}>
									<Button
										startIcon={<Delete />}
										variant='contained'
										color='error'
										onClick={() => refusedFun(x)}
									>
										{' '}
										refused
									</Button>
									<Button
										onClick={() => acceptableFun(x)}
										startIcon={<Done />}
										variant='contained'
										color='success'
									>
										{' '}
										acceptable{' '}
									</Button>
								</Box>
							</Card>
						</Grid>
					))}
				</Grid>
			</Container>
		</>
	);
};

export default MeetingMap;
