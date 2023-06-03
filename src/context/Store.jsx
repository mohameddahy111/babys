import { useMediaQuery } from '@mui/material';
import { createContext, useContext, useState } from 'react';

const Store = createContext();
export const StoreProvider = ({ children }) => {
	const mobileDives = useMediaQuery('(max-width:600px)');
	const [orderList, setOrderList] = useState(
		localStorage.orderList ? JSON.parse(localStorage.orderList) : []
	);
	const [meetingList, setMeetingList] = useState(
		localStorage.meetingList ? JSON.parse(localStorage.meetingList) : []
	);
	const [orderListLength, setOrderListLength] = useState(
		localStorage.orderListLength ? JSON.parse(localStorage.orderListLength) : 0
	);
	const [student, setStudent] = useState(
		localStorage.student ? JSON.parse(localStorage.student) : []
	);
	return (
		<Store.Provider
			value={{
				mobileDives,
				orderList,
				setOrderList,
				orderListLength,
				setOrderListLength,
				meetingList,
				setMeetingList,
				student, setStudent
			}}
		>
			{children}
		</Store.Provider>
	);
};
export const DataStore = () => {
	return useContext(Store);
};
