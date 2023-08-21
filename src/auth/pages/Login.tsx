import { FormEvent } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
	Alert,
	Button,
	Grid,
	Link,
	TextField,
	Typography,
} from '@mui/material';
import { AuthLayout } from '../layout/AuthLayout';
import { useForm } from '../../hooks/useForm';
import { useAuthStore } from '../../hooks/useAuthStore';

export const Login = () => {
	const { startLogin, errorMessage } = useAuthStore();
	const { formState, email, password, onInputChange } = useForm({
		email: '',
		password: '',
	});

	const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		if (password.length < 6) return;
		startLogin(formState);
	};

	return (
		<AuthLayout title={'Iniciar sesión'}>
			<form onSubmit={handleSubmit}>
				<Grid container gap={2} marginTop={4}>
					<Grid item xs={12}>
						<TextField
							label="Correo"
							type="email"
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
						<Alert
							severity="error"
							sx={{ marginBottom: 2, display: errorMessage ? '' : 'none' }}
						>
							{errorMessage}
						</Alert>
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
