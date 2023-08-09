import { Link as RouterLink } from 'react-router-dom';
import { Button, Grid, TextField, Typography, Link } from '@mui/material';
import { AuthLayout } from '../layout/AuthLayout';

export const Register = () => {
	return (
		<AuthLayout title={'Registrarse'}>
			<form>
				<Grid container gap={2} marginTop={4}>
					<Grid item xs={12}>
						<TextField
							id="outlined-basic"
							label="Nombre"
							fullWidth
							variant="outlined"
						/>
					</Grid>
					<Grid item xs={12}>
						<TextField
							id="outlined-basic"
							label="Correo"
							fullWidth
							variant="outlined"
						/>
					</Grid>
					<Grid item xs={12}>
						<TextField
							id="outlined-basic"
							label="Contraseña"
							fullWidth
							type="password"
							variant="outlined"
						/>
					</Grid>
					<Grid item xs={12}>
						<TextField
							id="outlined-basic"
							label="Confirmar contraseña"
							fullWidth
							type="password"
							variant="outlined"
						/>
					</Grid>

					<Grid item xs={12}>
						<Button variant="contained" fullWidth>
							Crear cuenta
						</Button>
					</Grid>
					<Grid item xs={12} marginTop={4}>
						<Typography textAlign={'center'}>
							¿Ya tienes cuenta?
							<Link component={RouterLink} to="/auth/login">
								{' '}
								Inicia sesión
							</Link>
						</Typography>
					</Grid>
				</Grid>
			</form>
		</AuthLayout>
	);
};
