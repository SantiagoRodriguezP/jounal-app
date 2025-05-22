import {  StarOutline,  } from '@mui/icons-material';
import { Grid, Typography } from '@mui/material';

export const NothingSelectedView = () => {
	return (
		<Grid
			container
			spacing={0}
			direction="column"
			alignItems="center"
			justifyContent="center"
			sx={{
				minHeight: '85vh',
				backgroundColor: 'primary.main',
				borderRadius: 3,
			}}
		>
			<Grid
				item
				xs={12}
			>
				<StarOutline sx={{ fontSize: 100, color: 'white' }} />
			</Grid>
			<Grid
				item
				xs={12}
			>
				<Typography
					color="white"
					sx={{ fontSize: 30 }}
				>
					Selecciona o crea una entrada
				</Typography>
			</Grid>
		</Grid>
	);
};
