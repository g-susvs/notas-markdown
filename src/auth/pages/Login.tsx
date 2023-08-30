import { Link as RouterLink } from 'react-router-dom';
import { useForm, SubmitHandler } from 'react-hook-form';
import {
	Alert,
	Button,
	Grid,
	Link,
	TextField,
	Typography,
} from '@mui/material';
import { AuthLayout } from '../layout/AuthLayout';
import { useAuthStore } from '../../hooks/useAuthStore';

type FormFields = {
	email: string,
	password: string,
}

export const Login = () => {
	const { startLogin, errorMessage } = useAuthStore();

	const { register, handleSubmit, formState: { errors } } = useForm<FormFields>()

	const onSubmit: SubmitHandler<FormFields> = (data) => startLogin(data)

	return (
		<AuthLayout title={'Iniciar sesión'}>
			<form onSubmit={handleSubmit(onSubmit)}>
				<Grid container gap={2} marginTop={4}>
					<Grid item xs={12}>
						<TextField
							label="Correo"
							type="email"
							variant="outlined"
							fullWidth
							{...register("email", {
								required: "El correo es obligatorio",
								pattern: {
									value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
									message: 'El correo no es valido'
								}
							})}
							error={!!errors.email}
							helperText={errors.email?.message}
						/>
					</Grid>
					<Grid item xs={12}>
						<TextField
							label="Contraseña"
							fullWidth
							variant="outlined"
							type="password"
							{...register("password", {
								required: "La contraseña es obligatoria",
								minLength: {
									value: 6,
									message: "Debe tener más de 6 caracteres"
								}
							})}
							error={!!errors.password}
							helperText={errors.password?.message}
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
