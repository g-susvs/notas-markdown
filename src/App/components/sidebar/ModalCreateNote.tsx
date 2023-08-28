import { Box, Button, Modal, TextField } from '@mui/material';
import { useForm, useUiStore } from '../../../hooks';
import { useEffect } from 'react';
import { useCreateNote } from '../../hooks/useCreateNote';
import { useNavigate } from 'react-router-dom';

const style = {
	position: 'absolute' as const,
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: '70%',
	bgcolor: 'background.paper',
	border: '2px solid #000',
	boxShadow: 24,
	p: '40px 50px',
};

export const ModalCreateNote = () => {
	const navigate = useNavigate();
	const { openCreateNoteModal, onToggleOpenCreateNoteModal } = useUiStore();
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

	const onSaveNote = () => {
		if (title.length > 2) {
			noteCreated.mutate(formState);
		}
	};

	useEffect(() => {
		if (openCreateNoteModal && noteCreated.isSuccess) {
			navigate(`/home/${noteCreated.data?.body?.id}`);
			onToggleOpenCreateNoteModal();
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
			<Box sx={style}>
				<Box
					sx={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'space-between',
						gap: 4,
					}}
				>
					<TextField
						label="Título"
						variant="outlined"
						size="small"
						fullWidth
						value={title}
						name="title"
						onChange={onInputChange}
					/>
					<Box sx={{ display: 'flex', alignItems: 'center', gap: 4 }}>
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
					</Box>
				</Box>
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
