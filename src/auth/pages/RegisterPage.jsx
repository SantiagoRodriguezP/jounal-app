import { Google } from '@mui/icons-material';
import { Button, Grid, Link, TextField, Typography, Box } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { AuthLayout } from '../layout/AuthLayout';

export const RegisterPage = () => {
    return (
			<AuthLayout titulo="Crear cuenta">
				<Box
					component="form"
					noValidate
					autoComplete="off"
					sx={{
						width: '100%',
						display: 'flex',
						justifyContent: 'center',
						mt: 2,
					}}
				>
					<Grid
						container
						direction="column"
						alignItems="center"
						spacing={2}
						sx={{
							width: '100%',
							maxWidth: 400,
							backgroundColor: 'white',
							p: 3,
							borderRadius: 2,
							boxShadow: 3,
						}}
					>
						<Grid
							item
							xs={12}
							width={{ xs: 350, md: 350 }}
						>
							<TextField
								label="Nombre completo"
								type="text"
								placeholder="Nombre completo"
								fullWidth
								sx={{ width: '100%' }}
							/>
						</Grid>
						<Grid
							item
							xs={12}
							width={{ xs: 350, md: 350 }}
						>
							<TextField
								label="Correo"
								type="email"
								placeholder="correo@correo.com"
								fullWidth
								sx={{ width: '100%' }}
							/>
						</Grid>
						<Grid
							item
							xs={12}
							width={{ xs: 350, md: 350 }}
						>
							<TextField
								label="Contraseña"
								type="password"
								placeholder="Contraseña"
								fullWidth
								sx={{ width: '100%' }}
							/>
						</Grid>
						<Grid
							item
							xs={12}
						>
							<Button
								variant="contained"
								fullWidth
								sx={{ mt: 1 }}
							>
								Crear cuenta
							</Button>
						</Grid>
						<Grid
							item
							xs={12}
						>
							<Box
								display="flex"
								justifyContent="flex-end"
								alignItems="center"
								mt={1}
							>
								<Typography
									variant="body2"
									sx={{ mr: 1 }}
								>
									¿Ya tienes cuenta?
								</Typography>
								<Link
									component={RouterLink}
									color="primary"
									to="/auth/login"
									underline="hover"
								>
									Ingresar
								</Link>
							</Box>
						</Grid>
					</Grid>
				</Box>
			</AuthLayout>
		);
};
