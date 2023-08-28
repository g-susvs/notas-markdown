import { useEffect, useMemo, useState } from 'react';
import { Box, Button, Menu, TextField } from '@mui/material';
import { useNoteStore } from '../../hooks';
import { useForm } from '../../../hooks';
import { useUpdateNote } from '../../hooks/useUpdateNote';

export const TitleNote = () => {
	const { id, title: titleActive, onSetUpdateNote } = useNoteStore();
	const { updateNote } = useUpdateNote(id);
	const { title, onInputChange } = useForm({
		title: titleActive,
	});

	// eslint-disable-next-line react-hooks/exhaustive-deps
	const prevTitle = useMemo(() => titleActive, [updateNote.isLoading]);

	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
	const open = Boolean(anchorEl);

	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	const onBlurNewTitle = () => {
		if (prevTitle !== title) {
			updateNote.mutate({
				id,
				note: { title },
			});
		}
	};

	const onKeyUpNewTitle = (event: React.KeyboardEvent<HTMLDivElement>) => {
		if (event.key === 'Enter') {
			updateNote.mutate({
				id,
				note: { title },
			});
			setAnchorEl(null);
		}
	};

	useEffect(() => {
		if (!updateNote.isLoading && updateNote.isSuccess) {
			updateNote.reset();
		}
		onSetUpdateNote({ title });
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [title, updateNote]);

	return (
		<>
			<Button
				disabled={updateNote.isLoading}
				startIcon={'📄'}
				sx={{
					color: 'black',
					textTransform: 'none',
					':hover': {
						backgroundColor: 'primary.light',
					},
				}}
				aria-controls={open ? 'basic-menu' : undefined}
				aria-haspopup="false"
				aria-expanded={open ? 'true' : undefined}
				onClick={handleClick}
			>
				{title}
			</Button>
			<Menu
				id="basic-menu"
				anchorEl={anchorEl}
				open={open}
				onClose={handleClose}
				MenuListProps={{
					'aria-labelledby': 'basic-button',
				}}
			>
				<Box sx={{ paddingLeft: 1, paddingRight: 1 }}>
					<TextField
						variant="outlined"
						size="small"
						fullWidth
						name="title"
						value={title}
						onKeyUp={onKeyUpNewTitle}
						onChange={onInputChange}
						onBlur={onBlurNewTitle}
					/>
				</Box>
			</Menu>
		</>
	);
};
