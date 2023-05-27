import { CastForEducationOutlined, GroupsOutlined, LocalLibraryOutlined, MapOutlined, MeetingRoomOutlined, NotificationsActive, ReportProblemOutlined, SchoolOutlined } from '@mui/icons-material';

export const sliderIconList = [
	{
		title: ' Students',
		icon :<CastForEducationOutlined/>,
		list: [
			{
				name: 'New Student',  
				path: '/admin/new_student',
				icon: <LocalLibraryOutlined />,
			},
			{
				name: 'All Student',
				path: '/admin/student',
				icon: <SchoolOutlined />,
			},
			{
				name: 'Reports',
				path: '/admin/reports',
				icon: <ReportProblemOutlined />,
			},
		],
	},
	{
		title: ' meetings',
		icon:<MeetingRoomOutlined/>,
		list: [
			// {
			// 	name: 'New Meeting',
			// 	path: '/admin/new_meetings',
			// 	icon: <GroupsOutlined />,
			// },
			{
				name: 'Meetings Map',
				path: '/admin/meetings_map',
				icon: <MapOutlined />,
			},
			{
				name: 'Meet Reports',
				path: '/admin/meet_reports',
				icon: <ReportProblemOutlined />,
			},
		],
	},
	{
		title :'Orders',
		icon:<NotificationsActive/>,
		path: '/admin/orders',
	},
];
