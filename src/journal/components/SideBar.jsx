import { InboxOutlined } from '@mui/icons-material';
import {
	Box,
	Divider,
	Drawer,
	Grid,
	List,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	Toolbar,
	Typography,
} from '@mui/material';

export const SideBar = ({ draweWidth }) => {
	return (
		<Box
			component="nav"
			sx={{ width: { sm: draweWidth }, flexShrink: { sm: 0 } }}
		>
			<Drawer
				variant="permanent"
				open
				onClose={() => {}}
				sx={{
					display: { xs: 'block', sm: 'block' },
					'& .MuiDrawer-paper': {
						boxSizing: 'border-box',
						width: draweWidth,
					},
				}}
			>
				<Toolbar>
					<Typography
						variant="h6"
						noWrap
						component="div"
					>
						Santiago Rodriguez
					</Typography>
				</Toolbar>
				<Divider />

				<List>
					{['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'].map(
						(text, index) => (
							<ListItem
								button
								key={text}
							>
								<ListItemButton>
									<ListItemIcon>
										<InboxOutlined />
									</ListItemIcon>
									<Grid container>
										<ListItemText primary={text} />
										<ListItemText secondary={'Hola como estas'} />
									</Grid>
								</ListItemButton>
							</ListItem>
						)
					)}
				</List>
			</Drawer>
		</Box>
	);
};
