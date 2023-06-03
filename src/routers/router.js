import { createBrowserRouter } from 'react-router-dom';
import Layouts from '../layouts/Layouts';
import {
	About,
	CompleteFile,
	Dashborad,
	Home,
	Login,
	MeetingMap,
	Meetings,
	Orders,
	Registration,
} from '../pages';
import AdminLayout from '../layouts/admin/AdminLayout';
const Routers = createBrowserRouter([
	{
		path: '/',
		element: <Layouts />,
		children: [
			{
				index: true,
				element: <Home />,
			},
			{
				path: '/about',
				element: <About />,
			},
			{
				path: '/login',
				element: <Login />,
			},
			{
				path: '/user/:userId/complete_file',
				element: <CompleteFile />,
			},
			{
				path: '/registration',
				element: <Registration />,
			},
		],
	},

	{
		path: '/admin',
		element: <AdminLayout />,
		children: [
			{
				index: true,
				element: <Dashborad />,
			},
			{
				path: '/admin/orders',
				element: <Orders />,
			},
			{
				path: '/admin/meetings_map',
				element: <MeetingMap />,
			},
			{
				path: '/admin/new_meetings/:id',
				element: <Meetings />,
			},
		],
	},
]);
export default Routers;
