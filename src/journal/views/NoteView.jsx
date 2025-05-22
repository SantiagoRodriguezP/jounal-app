import { Gif, SaveOutlined } from '@mui/icons-material';
import { Button, Grid, TextField, Typography } from '@mui/material';
import { ImageGallery } from '../components';

export const NoteView = () => {
	return (
		<>
			<Grid
				container
				direction="row"
				justifyContent="space-between"
				alignItems="center"
				sx={{ mb: 1, padding: 2 }}
			>
				<Grid item>
					<Typography
						fontSize={39}
						fontWeight="light"
					>
						{' '}
						28 de agosto de 2023
					</Typography>
				</Grid>
				<Grid item>
					<Button
						color="primary"
						sx={{ padding: 2 }}
					>
						<SaveOutlined sx={{ mr: 1, fontSize: 30 }} />
						Guardar
					</Button>
				</Grid>
			</Grid>
			<Grid container>
				<TextField
					type="text"
					variant="filled"
					fullWidth
					placeholder="Ingresa un título"
					label="Titulo"
					sx={{ border: 'none', mb: 1 }}
				/>
				<TextField
					type="text"
					variant="filled"
					fullWidth
					multiline
					placeholder="¿Que sucedió en el día de hoy?"
					
					sx={{ border: 'none', mb: 1 }}
				/>
			</Grid>

            {/* Imagen gallery */}
            <ImageGallery />
		</>
	);
};
