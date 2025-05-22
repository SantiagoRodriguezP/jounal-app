import { Grid, Typography } from '@mui/material';

export const AuthLayout = ({ children, titulo = '' }) => {
	return (
		<Grid
			container
			spacing={0}
			direction="column"
			alignItems="center"
			justifyContent="center"
			sx={{ minHeight: '100vh', backgroundColor: 'primary.main', padding: 4 }}
		>
			<Grid
				item
				className="box-shadow" // corregido clasName -> className
				xs={12}
				sm={8}
				md={4}
				sx={{
					backgroundColor: 'white',
					padding: 3,
					borderRadius: 2,
					width: {md: 450, xs: 350,}, // ajusta el ancho
				}}
			>
				<Typography
					variant="h5"
					sx={{ mb: 1 }}
				>
					{titulo}
				</Typography>

				{children}
			</Grid>
		</Grid>
	);
};
