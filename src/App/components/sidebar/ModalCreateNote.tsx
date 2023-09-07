import { Box, Button, Modal, TextField, Stack } from '@mui/material';
import { useUiStore } from '../../../hooks';
import { useEffect, useRef } from 'react';
import { useCreateNote } from '../../hooks/useCreateNote';
import { useNavigate } from 'react-router-dom';
import { useCustomMQ } from '../../hooks';
import { SubmitHandler, useForm } from 'react-hook-form';

const styleSm = {
	position: 'absolute' as const,
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: '70%',
	bgcolor: 'background.paper',
	borderRadius: '5px',
	boxShadow: 24,
	p: '30px 30px',
};
const styleXs = {
	position: 'absolute' as const,
	width: '100%',
	height: '100vh',
	bgcolor: 'background.paper',
	boxShadow: 24,
	p: '40px 20px',
};

interface FormFields {
	title: string;
	content: string;
}

export const ModalCreateNote = () => {
	const { mediaQuery } = useCustomMQ();

	const inputRef = useRef<HTMLInputElement>(null);
	const navigate = useNavigate();
	const { openCreateNoteModal, onToggleOpenCreateNoteModal, onCloseDrawer } =
		useUiStore();
	const { noteCreated } = useCreateNote();

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<FormFields>();

	const onSaveNote: SubmitHandler<FormFields> = data =>
		noteCreated.mutate(data);

	useEffect(() => {
		if (openCreateNoteModal && noteCreated.isSuccess) {
			navigate(`/home/${noteCreated.data?.body?.id}`);
			onToggleOpenCreateNoteModal();
			onCloseDrawer(); // movil
			reset();
			noteCreated.reset();
		}
	}, [noteCreated.isSuccess]);

	useEffect(() => {
		if (openCreateNoteModal) {
			setTimeout(() => {
				inputRef.current?.focus();
			}, 100);
		}
	}, [openCreateNoteModal]);

	return (
		<Modal
			open={openCreateNoteModal}
			aria-labelledby="modal-modal-title"
			aria-describedby="modal-modal-description"
		>
			<Box sx={mediaQuery ? styleSm : styleXs}>
				<form onSubmit={handleSubmit(onSaveNote)}>
					<Stack
						gap={2}
						direction={mediaQuery ? 'row' : 'column'}
						alignItems="center"
					>
						<TextField
							inputRef={inputRef}
							disabled={noteCreated.isLoading}
							label="Título"
							variant="outlined"
							placeholder="Ingresa el título de la nota"
							fullWidth
							size="small"
							{...register('title', {
								required: 'El titulo no debe estar vacío',
								validate: (value: string) =>
									value.trim().length > 0 || 'El titulo no debe estar vacío',
							})}
							error={!!errors.title}
							helperText={errors.title?.message}
						/>
						<Stack direction="row" justifyContent="space-between" gap={2}>
							<Button
								disabled={noteCreated.isLoading}
								variant="outlined"
								onClick={onToggleOpenCreateNoteModal}
								type="button"
							>
								Cerrar
							</Button>
							<Button
								disabled={noteCreated.isLoading}
								variant="outlined"
								color="success"
								type="submit"
							>
								Guardar
							</Button>
						</Stack>
					</Stack>
				</form>
				<textarea
					className="create-note-textarea"
					spellCheck={false}
					{...register('content')}
				/>
			</Box>
		</Modal>
	);
};
