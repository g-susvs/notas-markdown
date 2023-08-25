import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useUiStore } from '../../../hooks';
import { Button } from '@mui/material';
import { useNoteStore } from '../../hooks';
import { useDeleteNote } from '../../hooks/useDeleteNote';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const style = {
	position: 'absolute' as const,
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 600,
	bgcolor: 'background.paper',
	borderRadius: '5px',
	boxShadow: 24,
	p: 4,
};
export const ModalDeleteNote = () => {
	const navigate = useNavigate();
	const { openDeleteNoteModal, onToggleDeleteNoteModal } = useUiStore();
	const { title, id, onNothingSelected } = useNoteStore();

	const { deleteNote } = useDeleteNote();

	const onDeleteNote = () => {
		deleteNote.mutate(id);
	};

	useEffect(() => {
		if (openDeleteNoteModal && deleteNote.isSuccess) {
			navigate('/home');
			onToggleDeleteNoteModal();
			onNothingSelected();
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [deleteNote]);

	return (
		<Modal
			open={openDeleteNoteModal}
			onClose={onToggleDeleteNoteModal}
			aria-labelledby="modal-modal-title"
			aria-describedby="modal-modal-description"
		>
			<Box sx={style}>
				<Typography id="modal-modal-title" sx={{ fontSize: '1.2rem' }}>
					¿Estas seguro que quieres eliminar la nota
					<strong>{` ${title} `}</strong>?
				</Typography>
				<br />
				<Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
					<Button
						onClick={onToggleDeleteNoteModal}
						disabled={deleteNote.isLoading}
						variant="outlined"
						color="info"
					>
						Cancelar
					</Button>
					<Button
						onClick={onDeleteNote}
						disabled={deleteNote.isLoading}
						variant="outlined"
						color="error"
					>
						Si, estoy seguro
					</Button>
				</Box>
			</Box>
		</Modal>
	);
};
