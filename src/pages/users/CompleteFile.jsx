import { Button, Container, Grid, TextField } from '@mui/material';
import { useFormik } from 'formik';
import React from 'react';
import { useParams } from 'react-router-dom';
import * as yup from 'yup';
import { DataStore } from '../../context/Store';

const CompleteFile = () => {
	const { student, setStudent } = DataStore();

	const params = useParams();
	const user = student.find((x) => x.data.phone === params.userId);
	const students = {
		parentsInfo: {
			firstName: user?.data.firstName,
			lastName: user?.data?.lastName,
			job: user?.data.job,
			address: user?.data.address,
			phone: user?.data.phone,
			email: user?.data.email,
		},
		studentInfo: {
			studentName: user?.data.childrenName,
			age: '',
			birthday: '',
			height: '',
			wight: '',
		},
	};

	const validationSchema = yup.object({
		firstName: yup
			.string('enter your first name')
			.min(3, `name length by more than 3 `)
			.required('required'),
		lastName: yup.string('').min(3).required(''),
		password: yup.string('').min(8, `required`).required(''),
		passwordConfirm: yup.string('').min(8).required('').matches(),
		phone: yup.string('').min(11, `required`).required().max(11, `required`),
		email: yup.string('').email().required(''),
		studentName: yup.string('').required(''),
		age: yup.number('').required(''),
		birthday: yup.date('dd/mm/yyyy').required(''),
		height: yup.string(''),
		wight: yup.string(''),
	});

	const formik = useFormik({
		initialValues: students,
		validationSchema: validationSchema,
		onSubmit: (values) => {
			window.alert('ok');
		},
	});

	return (
		<Container>
			<form onSubmit={formik.handleSubmit}>
				{Object.keys(students).map((x, index) => (
					<>
						<h1>{x} </h1>
						<Grid container spacing={2} p={2}>
							{Object.keys(students[x]).map((y, index) => (
								<Grid item xs={12} md={3}>
									<TextField
										fullWidth
										value={formik.values[x][y]}
										name={y}
										inputProps={{
											type:
												y === 'password' || y === 'passwordConfirm'
													? 'password'
													: y === 'email'
													? 'email'
													: 'text',
										}}
										placeholder={y}
										label={y}
										error={formik.touched[y] && Boolean(formik.errors[y])}
										helperText={formik.touched[y] && formik.errors[y]}
										onChange={formik.handleChange}
									/>
								</Grid>
							))}
						</Grid>
					</>
				))}
				<Button variant='contained' type='submit'>
					ok
				</Button>
			</form>
		</Container>
	);
};

export default CompleteFile;
