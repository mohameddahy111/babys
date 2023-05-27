import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { StoreProvider } from '../../context/Store';
import { AdminNav } from './components';
import {
	Accordion,
	AccordionDetails,
	AccordionSummary,
	Badge,
	Divider,
	Grid,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	Typography,
} from '@mui/material';
import { sliderIconList } from '../../data';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { DataStore } from '../../context/Store';

const AdminLayout = () => {
	const [expanded, setExpanded] = useState(false);
	const { orderListLength, setOrderListLength } = DataStore();

	const handleChange = (panel) => (event, isExpanded) => {
		setExpanded(isExpanded ? panel : false);
	};
	const restart = () => {
		setOrderListLength(0);
		localStorage.setItem('orderListLength', JSON.stringify(0));
	};
	return (
		<>
			<AdminNav />
			<Grid container spacing={1} p={1}>
				{/* rright side */}
				<Grid item md={3}>
					{/*Accordion */}
					{sliderIconList.map((x, index) => (
						<>
							{x.list ? (
								<Accordion
									key={index}
									expanded={expanded === `panel${index}`}
									onChange={handleChange(`panel${index}`)}
								>
									<AccordionSummary
										expandIcon={<ExpandMoreIcon />}
										aria-controls='panel1bh-content'
										id='panel1bh-header'
									>
										<ListItemIcon>{x.icon} </ListItemIcon>
										<Typography sx={{ textTransform: 'capitalize' }}>
											{x.title}{' '}
										</Typography>
									</AccordionSummary>
									<AccordionDetails>
										<List>
											{x.list.map((y, index) => (
												<Link to={y.path}>
													<ListItem key={index}>
														<ListItemIcon>
															<Badge
																badgeContent={0}
																anchorOrigin={{
																	vertical: 'top',
																	horizontal: 'left',
																}}
																color='secondary'
																overlap='circular'
															>
																{y.icon}
															</Badge>
														</ListItemIcon>
														<ListItemText sx={{ textTransform: 'capitalize' }}>
															{y.name}
														</ListItemText>
													</ListItem>
												</Link>
											))}
										</List>
									</AccordionDetails>
								</Accordion>
							) : (
								<List>
									<Divider />
									<Link to={x.path} onClick={() =>restart()}>
										<ListItem>
											<ListItemIcon>
												<Badge
													badgeContent={orderListLength}
													anchorOrigin={{
														vertical: 'top',
														horizontal: 'left',
													}}
													color='secondary'
													overlap='circular'
												>
													{x.icon}
												</Badge>
											</ListItemIcon>
											<ListItemText>{x.title}</ListItemText>
										</ListItem>
									</Link>
								</List>
							)}
						</>
					))}
				</Grid>
				{/* left side */}
				<Grid item md={9}>
					<Outlet />
				</Grid>
			</Grid>
		</>
	);
};

export default AdminLayout;
