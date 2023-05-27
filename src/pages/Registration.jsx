import {
	Box,
	Button,
	Container,
	List,
	ListItem,
	TextField,
	Typography,
} from '@mui/material';
import { useFormik } from 'formik';
import React, { useState } from 'react';
import * as yup from 'yup';
import { DataStore } from '../context/Store';

const Registration = () => {
	const { orderList, setOrderList,orderListLength, setOrderListLength } = DataStore();
	const [dataSend, setDataSend] = useState(true);
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
			firstName: '',
			lastName: '',
			childrenName: '',
			phone: '',
			email: '',
			address: '',
			job: '',
			_data: new Date().toLocaleDateString(),
			_time: new Date().toLocaleTimeString(),
		},

		validationSchema: validationSchema,
		onSubmit: (values) => {
			const list = [...orderList];
			list.push(values);
			localStorage.setItem('orderList', JSON.stringify(list));
			setOrderList(list);
   const listLenght=orderListLength+1
   localStorage.setItem('orderListLength', JSON.stringify(listLenght));
   setOrderListLength(listLenght)
   setDataSend(false);
		},
	});
 const DeleteMeeting=(item)=>{

 }

	return (
		<>
			<Container>
				{dataSend ? (
					<form onSubmit={formik.handleSubmit}>
						<List>
							<ListItem
								sx={{ display: 'flex', justifyContent: 'center', gap: '10px' }}
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
								sx={{ display: 'flex', justifyContent: 'center', gap: '10px' }}
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
							<ListItem
								sx={{ display: 'flex', justifyContent: 'center', gap: '10px' }}
							>
								<Button variant='contained' size='large' type='submit'>
									Register
								</Button>
							</ListItem>
						</List>
					</form>
				) : (
					<Box>
						<Typography variant='h4' align='center' fontWeight={700}>
							thank you , our team will be contact with you soon
						</Typography>
					</Box>
				)}
			</Container>
		</>
	);
};

export default Registration;
