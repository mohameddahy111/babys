import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { DataStore } from '../../context/Store';
import { useFormik } from 'formik';
import dayjs from 'dayjs';
import * as yup from 'yup';
import {
	Box,
	Button,
	Chip,
	Container,
	Divider,
	List,
	ListItem,
	TextField,
	Typography,
} from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { StaticDateTimePicker, TimePicker } from '@mui/x-date-pickers';
const Meetings = () => {
	const { orderList, meetingList, setMeetingList, setOrderList } = DataStore();
	const parmas = useParams();
	const item = orderList.find((x) => x.phone === parmas.id);
	const [resetDate, setResetDate] = useState([null, null]);
	const navigate = useNavigate();
	// const [time, setTime] = useState(dayjs('2023-05-17T15:30'));

	const validationSchema = yup.object({
		firstName: yup
			.string('First Name is required')
			.min(3, 'the input not vild')
			.required('First Name is required'),
		lastName: yup
			.string('Last Name is required')
			.min(3, 'the input not vild')
			.required(''),
		childrenName: yup
			.string('Children Name is required')
			.min(3, 'the input not vild')
			.required(''),
		phone: yup
			.number('phone is required')
			.min(11, 'the input not vild')
			.required(''),
		email: yup.string('Email is required').email('').required(''),
		address: yup.string('Address is required').required(''),
		job: yup.string('Job is required').required(''),
	});
	const formik = useFormik({
		initialValues: {
			firstName: `${item.firstName}`,
			lastName: `${item.lastName}`,
			childrenName: `${item.childrenName}`,
			phone: `${item.phone}`,
			email: `${item.email}`,
			address: `${item.address}`,
			job: `${item.job}`,
			// _data: new Date().toLocaleDateString(),
			// _time: new Date().toLocaleTimeString(),
		},

		validationSchema: validationSchema,
		onSubmit: (values) => {
			const meet = [...meetingList];
			meet.push({
				date: resetDate.format('LLL'),
				data: values,
			});
			localStorage.setItem('meetingList', JSON.stringify(meet));
			setMeetingList(meet);
			DeleteMeeting(item);
		},
	});
	const DeleteMeeting = (item) => {
		const list = orderList.filter((x) => x.phone !== item.phone);
		setOrderList(list);
		localStorage.setItem('orderList', JSON.stringify(list));
		navigate('/admin/meetings_map');
	};

	return (
		<>
			<Container>
				<Box p={4}>
					<Typography variant='h5' fontWeight={700} align='center'>
						Create Meeting
					</Typography>
				</Box>
				<Divider>
					<Chip label='customer information' />
				</Divider>
				<Box p={2} display={'flex'} alignContent={'center'}>
					<form onSubmit={formik.handleSubmit}>
						<List>
							<ListItem
								sx={{ display: 'flex', justifyContent: 'start', gap: '10px' }}
							>
								<TextField
									name='firstName'
									value={formik.values.firstName}
									inputProps={{ type: 'text' }}
									label='First Name'
									error={
										formik.touched.firstName && Boolean(formik.errors.firstName)
									}
									helperText={
										formik.touched.firstName && formik.errors.firstName
									}
									onChange={formik.handleChange}
								/>
								<TextField
									name='lastName'
									value={formik.values.lastName}
									inputProps={{ type: 'text' }}
									label='last Name'
									error={
										formik.touched.lastName && Boolean(formik.errors.lastName)
									}
									helperText={formik.touched.lastName && formik.errors.lastName}
									onChange={formik.handleChange}
								/>
								<TextField
									name='childrenName'
									value={formik.values.childrenName}
									inputProps={{ type: 'text' }}
									label='Children Name'
									error={
										formik.touched.childrenName &&
										Boolean(formik.errors.childrenName)
									}
									helperText={
										formik.touched.childrenName && formik.errors.childrenName
									}
									onChange={formik.handleChange}
								/>
							</ListItem>
							<ListItem
								sx={{ display: 'flex', justifyContent: 'start', gap: '10px' }}
							>
								<TextField
									name='phone'
									value={formik.values.phone}
									inputProps={{ type: 'text' }}
									label='Phone'
									error={formik.touched.phone && Boolean(formik.errors.phone)}
									helperText={formik.touched.phone && formik.errors.phone}
									onChange={formik.handleChange}
								/>
								<TextField
									name='email'
									value={formik.values.email}
									inputProps={{ type: 'email' }}
									label='Email'
									error={formik.touched.email && Boolean(formik.errors.email)}
									helperText={formik.touched.email && formik.errors.email}
									onChange={formik.handleChange}
								/>
								<TextField
									name='address'
									value={formik.values.address}
									inputProps={{ type: 'text' }}
									label='Address'
									error={
										formik.touched.address && Boolean(formik.errors.address)
									}
									helperText={formik.touched.address && formik.errors.address}
									onChange={formik.handleChange}
								/>
							</ListItem>
							<ListItem
								sx={{ display: 'flex', justifyContent: 'start', gap: '10px' }}
							>
								<TextField
									name='job'
									value={formik.values.job}
									inputProps={{ type: 'text' }}
									label='Job'
									error={formik.touched.job && Boolean(formik.errors.job)}
									helperText={formik.touched.job && formik.errors.job}
									onChange={formik.handleChange}
								/>
							</ListItem>
							<Divider>
								<Chip label='Interlocutor information' />
							</Divider>
							<ListItem
								sx={{
									display: 'flex',
									justifyContent: 'start',
									gap: '10px',
									pt: '30px',
								}}
							>
								<TextField
									name='firstName'
									value={formik.values.firstName}
									inputProps={{ type: 'text' }}
									label='First Name'
									error={
										formik.touched.firstName && Boolean(formik.errors.firstName)
									}
									helperText={
										formik.touched.firstName && formik.errors.firstName
									}
									onChange={formik.handleChange}
								/>
								<TextField
									name='lastName'
									value={formik.values.lastName}
									inputProps={{ type: 'text' }}
									label='last Name'
									error={
										formik.touched.lastName && Boolean(formik.errors.lastName)
									}
									helperText={formik.touched.lastName && formik.errors.lastName}
									onChange={formik.handleChange}
								/>
								<TextField
									name='childrenName'
									value={formik.values.childrenName}
									inputProps={{ type: 'text' }}
									label='Children Name'
									error={
										formik.touched.childrenName &&
										Boolean(formik.errors.childrenName)
									}
									helperText={
										formik.touched.childrenName && formik.errors.childrenName
									}
									onChange={formik.handleChange}
								/>
								{/* <LocalizationProvider
									dateAdapter={AdapterDayjs}
									// dateFormats={{ fullDateTime12h: 'DD/MM/YYYY hh:mm' }}
								>
									<DemoContainer components={['DatePicker']}>
										<DatePicker
											value={resetDate}
											onChange={(newValue) => setResetDate(newValue)}
										/>
									</DemoContainer>
								</LocalizationProvider> */}
							</ListItem>
							<ListItem>
								{/* <LocalizationProvider dateAdapter={AdapterDayjs}>
									<DemoContainer components={['TimePicker']}>
										<TimePicker
											label='Controlled picker'
											value={time}
											onChange={(newValue) => setTime(newValue)}
										/>
									</DemoContainer>
								</LocalizationProvider> */}
								<LocalizationProvider dateAdapter={AdapterDayjs}>
									<StaticDateTimePicker
										orientation='landscape'
										value={resetDate}
										onChange={(e) => setResetDate(e)}
									/>
								</LocalizationProvider>
							</ListItem>

							<ListItem
								sx={{ display: 'flex', justifyContent: 'center', gap: '10px' }}
							>
								<Button variant='contained' size='large' type='submit'>
									Register
								</Button>
							</ListItem>
						</List>
					</form>
				</Box>
			</Container>
		</>
	);
};

export default Meetings;
