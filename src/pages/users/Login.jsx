import React, { useState } from 'react';
import { DataStore } from '../../context/Store';
import {
	Box,
	Button,
	Chip,
	Divider,
	InputBase,
	TextField,
} from '@mui/material';
import { Check } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const Login = () => {
	const navigate = useNavigate();
	const [userName, setUserName] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	const [password, setPassword] = useState('');
	const [checkMarke, setCheckMarke] = useState(false);
	const [passwordCheke, setPasswordCheke] = useState(true);
	const { student, setStudent } = DataStore();
	const user = student.find((x) => x.data.email === userName);
	const checkUserName = () => {
		console.log(user);
		if (user) {
			setCheckMarke(true);
			if (user.data.password) {
				setPasswordCheke(true);
			} else {
				setPasswordCheke(false);
			}
		} else {
			setCheckMarke(false);
		}
	};
	const resetPassword = () => {
		if (password === confirmPassword) {
			const list = [...student];
			list.map((x) => {
				if (x.data.email === userName) {
					x.data.password = password;
				}
				return x;
			});
			localStorage.setItem('student', JSON.stringify(list));
			setStudent(list);
		} else {
		}
	};
	const checkPass = () => {
		if (user.data.password === password)
			navigate(`/user/${user.data.phone}/complete_file`);
	};
	return (
		<Box p={2}>
			<Box display={'flex'} alignItems={'center'} gap={1}>
				<TextField
					value={userName}
					onChange={(e) => setUserName(e.target.value)}
					label='Email'
					InputProps={{ type: 'email' }}
				/>
				{checkMarke && <Check sx={{ color: 'green' }} />}
				<Button onClick={() => checkUserName()}>check</Button>
			</Box>
			{passwordCheke ? (
				<Box pt={1}>
					<TextField
						value={password}
						onChange={(e) => {
							setPassword(e.target.value);
						}}
						disabled={!checkMarke}
						label='password'
						InputProps={{ type: 'password' }}
					/>
					<Button disabled={!checkMarke} onClick={() => checkPass()}>
						check
					</Button>
				</Box>
			) : (
				<Box pt={1}>
					<Divider>
						<Chip label='create new password' />
					</Divider>
					<form>
						<Box display={'flex'} gap={1}>
							<TextField
								value={password}
								onChange={(e) => {
									setPassword(e.target.value);
								}}
								label='password'
								InputProps={{ type: 'password' }}
							/>
							<TextField
								value={confirmPassword}
								onChange={(e) => {
									setConfirmPassword(e.target.value);
								}}
								label='confirm password'
								InputProps={{ type: 'password' }}
							/>
							<Button
								onClick={() => {
									resetPassword();
								}}
							>
								Confirm
							</Button>
						</Box>
					</form>
				</Box>
			)}
		</Box>
	);
};

export default Login;
