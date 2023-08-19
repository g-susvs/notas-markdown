import { FormEvent } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Button, Grid, TextField, Typography, Link } from '@mui/material';
import { AuthLayout } from '../layout/AuthLayout';
import { useForm } from '../../hooks/useForm';

export const Register = () => {
	const { formState, name, email, password, passwordConfirmed, onInputChange } =
		useForm({
			name: '',
			email: '',
			password: '',
			passwordConfirmed: '',
		});

	const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		console.log({ formState });
	};

	return (
		<AuthLayout title={'Registrarse'}>
			<form onSubmit={handleSubmit}>
				<Grid container gap={2} marginTop={4}>
					<Grid item xs={12}>
						<TextField
							label="Nombre"
							fullWidth
							variant="outlined"
							name="name"
							value={name}
							onChange={onInputChange}
						/>
					</Grid>
					<Grid item xs={12}>
						<TextField
							label="Correo"
							fullWidth
							variant="outlined"
							name="email"
							value={email}
							onChange={onInputChange}
						/>
					</Grid>
					<Grid item xs={12}>
						<TextField
							label="Contraseña"
							fullWidth
							type="password"
							variant="outlined"
							name="password"
							value={password}
							onChange={onInputChange}
						/>
					</Grid>
					<Grid item xs={12}>
						<TextField
							label="Confirmar contraseña"
							fullWidth
							type="password"
							variant="outlined"
							name="passwordConfirmed"
							value={passwordConfirmed}
							onChange={onInputChange}
						/>
					</Grid>

					<Grid item xs={12}>
						<Button type="submit" variant="contained" fullWidth>
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
