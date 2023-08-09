import { Link as RouterLink } from 'react-router-dom';
import { Button, Grid, Link, TextField, Typography } from '@mui/material';
import { AuthLayout } from '../layout/AuthLayout';

export const Login = () => {
	return (
		<AuthLayout title={'Iniciar sesión'}>
			<form>
				<Grid container gap={2} marginTop={4}>
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
						<Button variant="contained" fullWidth>
							Iniciar sesión
						</Button>
					</Grid>
					<Grid item xs={12} marginTop={4}>
						<Typography textAlign={'center'}>
							¿No tienes cuenta?
							<Link component={RouterLink} to="/auth/register">
								{' '}
								Registrate
							</Link>
						</Typography>
					</Grid>
				</Grid>
			</form>
		</AuthLayout>
	);
};
