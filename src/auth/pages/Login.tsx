import { FormEvent } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Button, Grid, Link, TextField, Typography } from '@mui/material';
import { AuthLayout } from '../layout/AuthLayout';
import { useForm } from '../../hooks/useForm';
import { useAuthStore } from '../../hooks/useAuthStore';
import { User } from '../../store/auth';

export const Login = () => {
	const { startLogin } = useAuthStore();
	const { email, password, onInputChange } = useForm({
		email: '',
		password: '',
	});

	const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		const customUser: User = {
			uid: '123abc',
			name: 'Jesús Valencia',
		};
		startLogin(customUser);
	};

	return (
		<AuthLayout title={'Iniciar sesión'}>
			<form onSubmit={handleSubmit}>
				<Grid container gap={2} marginTop={4}>
					<Grid item xs={12}>
						<TextField
							label="Correo"
							variant="outlined"
							fullWidth
							name="email"
							value={email}
							onChange={onInputChange}
						/>
					</Grid>
					<Grid item xs={12}>
						<TextField
							label="Contraseña"
							fullWidth
							variant="outlined"
							type="password"
							name="password"
							value={password}
							onChange={onInputChange}
						/>
					</Grid>
					<Grid item xs={12}>
						<Button type="submit" variant="contained" fullWidth>
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
