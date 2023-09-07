import { Link as RouterLink } from 'react-router-dom';
import { useForm, SubmitHandler } from 'react-hook-form';
import {
	Button,
	Grid,
	TextField,
	Typography,
	Link,
	Alert,
} from '@mui/material';
import { AuthLayout } from '../layout/AuthLayout';
import { useAuthStore } from '../../hooks/useAuthStore';

type FormFields = {
	name: string;
	email: string;
	password: string;
	passwordConfirmed: string;
};
export const Register = () => {
	const { startRegister, errorMessage } = useAuthStore();

	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm<FormFields>();

	const onSubmit: SubmitHandler<FormFields> = data => startRegister(data);

	return (
		<>
			<AuthLayout title={'Registrarse'}>
				<form onSubmit={handleSubmit(onSubmit)}>
					<Grid container gap={2} marginTop={4}>
						<Grid item xs={12}>
							<TextField
								label="Nombre"
								fullWidth
								variant="outlined"
								{...register('name', { required: 'El nombre es oblegatorio' })}
								error={!!errors.name}
								helperText={errors.name?.message}
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								label="Correo"
								fullWidth
								variant="outlined"
								{...register('email', {
									required: 'El correo es obligatorio',
									pattern: {
										value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
										message: 'El correo no es valido',
									},
								})}
								error={!!errors.email}
								helperText={errors.email?.message}
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								label="Contraseña"
								fullWidth
								type="password"
								variant="outlined"
								{...register('password', {
									required: 'La contraseña es obligatoria',
									minLength: {
										value: 6,
										message: 'Debe tener más de 6 caracteres',
									},
								})}
								error={!!errors.password}
								helperText={errors.password?.message}
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								label="Confirmar contraseña"
								fullWidth
								type="password"
								variant="outlined"
								{...register('passwordConfirmed', {
									required: true,
									validate: (value: string) =>
										value === watch('password') ||
										'Las contraseñas no coinciden',
								})}
								error={!!errors.passwordConfirmed}
								helperText={errors.passwordConfirmed?.message}
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
		</>
	);
};
