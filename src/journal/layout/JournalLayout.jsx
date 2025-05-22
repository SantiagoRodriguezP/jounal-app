import { Box } from '@mui/material';
import { NavBar } from '../components/NavBAr';
import { SideBar } from '../components/SideBar';

const drawerWidth = 240;

export const JournalLayout = ({ children }) => {
	return (
		<Box sx={{ display: 'flex' }}>
			{/* NavBar */}
			<NavBar drawerWidth={drawerWidth} />
			{/* Sidebar */}
			<SideBar draweWidth={drawerWidth} />
			<Box
				component="main"
				sx={{ flexGrow: 1, p: 10 }}
			>
				{children}
			</Box>
		</Box>
	);
};
