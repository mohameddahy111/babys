import {
	Button,
	IconButton,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Typography,
} from '@mui/material';
import React from 'react';
import { DataStore } from '../../context/Store';
import { DoneOutline } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const Orders = () => {
	const navgiate = useNavigate();
	const { orderList, meetingList, setMeetingList, setOrderList } = DataStore();

	const meetingDone = (item) => {
		// const meet = [...meetingList];
		// meet.push(item);
		// localStorage.setItem('meetingList', JSON.stringify(meet));
		// setMeetingList(meet);
		navgiate(`/admin/new_meetings/${item.phone}`);
	};
	const DeleteMeeting = (item) => {
		const list = orderList.filter((x) => x.phone !== item.phone);
		setOrderList(list);
		localStorage.setItem('orderList', JSON.stringify(list));
	};

	return (
		<>
			<TableContainer>
				<Table>
					<TableHead>
						<TableRow>
							<TableCell>Full Name</TableCell>
							<TableCell>Children Name</TableCell>
							<TableCell>Job</TableCell>
							<TableCell>Phone</TableCell>
							<TableCell>Email</TableCell>
							<TableCell>Address</TableCell>
							<TableCell>Date</TableCell>
							<TableCell>Action</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{orderList.length > 0 ? (
							orderList.map((x, index) => (
								<TableRow key={index}>
									<TableCell>
										{x.firstName} {''} {x.lastName}{' '}
									</TableCell>
									<TableCell>{x.childrenName} </TableCell>
									<TableCell>{x.job} </TableCell>
									<TableCell>{x.phone} </TableCell>
									<TableCell>{x.email} </TableCell>
									<TableCell>{x.address} </TableCell>
									<TableCell
										sx={{
											display: 'flex',
											justifyItems: 'center',
											flexDirection: 'column',
										}}
									>
										<span>{x._data}</span> <span>{x._time} </span>
									</TableCell>
									<TableCell>
										<IconButton
											onClick={() => {
												meetingDone(x);
											}}
										>
											<DoneOutline color='success' />
										</IconButton>
									</TableCell>
								</TableRow>
							))
						) : (
							<Typography
								component={'h2'}
								variant='h4'
								textAlign={'center'}
								p={3}
							>
								no new orders
							</Typography>
						)}
					</TableBody>
				</Table>
			</TableContainer>
		</>
	);
};

export default Orders;
