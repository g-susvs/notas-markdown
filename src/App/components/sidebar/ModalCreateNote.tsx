import { Box, Button, Modal, TextField, Stack, Alert } from '@mui/material';
import { useForm, useUiStore } from '../../../hooks';
import { useEffect, useState } from 'react';
import { useCreateNote } from '../../hooks/useCreateNote';
import { useNavigate } from 'react-router-dom';
import { useCustomMQ } from '../../hooks';

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

export const ModalCreateNote = () => {

	const { mediaQuery } = useCustomMQ()

	const navigate = useNavigate();
	const { openCreateNoteModal, onToggleOpenCreateNoteModal, onCloseDrawer } = useUiStore();
	const { noteCreated } = useCreateNote();

	const {
		formState,
		title,
		content,
		onInputChange,
		onTextAreaChange,
		onResetForm,
	} = useForm({
		title: '',
		content: '',
	});

	const [showAlert, setShowAlert] = useState(false)

	const onSaveNote = () => {
		if (title.trim().length === 0) {
			setShowAlert(true)
			setTimeout(() => {
				setShowAlert(false)
			}, 3000);
		} else {
			noteCreated.mutate(formState);
		}
	};

	useEffect(() => {
		if (openCreateNoteModal && noteCreated.isSuccess) {
			navigate(`/home/${noteCreated.data?.body?.id}`);
			onToggleOpenCreateNoteModal();
			onCloseDrawer() // movil
			onResetForm();
			noteCreated.reset();
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [noteCreated.isSuccess]);

	return (
		<Modal
			open={openCreateNoteModal}
			aria-labelledby="modal-modal-title"
			aria-describedby="modal-modal-description"
		>
			<Box sx={mediaQuery ? styleSm : styleXs}>
				<Alert
					severity="error"
					sx={{ marginBottom: 2, display: !showAlert ? 'none' : '' }}
				> El titulo no debe estar vacío</Alert>
				<Stack gap={2} direction={mediaQuery ? 'row' : 'column'}>
					<TextField
						label="Título"
						variant="outlined"
						placeholder='Ingresa el título de la nota'
						fullWidth
						size="small"
						value={title}
						name="title"
						onChange={onInputChange}
					/>
					<Stack direction="row" justifyContent="space-between" gap={2}>
						<Button
							disabled={noteCreated.isLoading}
							variant="outlined"
							onClick={onToggleOpenCreateNoteModal}
						>
							Cerrar
						</Button>
						<Button
							disabled={noteCreated.isLoading}
							variant="outlined"
							color="success"
							onClick={onSaveNote}
						>
							Guardar
						</Button>
					</Stack>

				</Stack>

				<textarea
					className="create-note-textarea"
					spellCheck={false}
					value={content}
					name="content"
					onChange={onTextAreaChange}
				/>
			</Box>
		</Modal>
	);
};
