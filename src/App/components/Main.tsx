import { Box } from '@mui/material';
import { NavBar } from '.';
import { Outlet, useParams } from 'react-router-dom';
import { useNote, useNoteStore } from '../hooks';
import { useEffect } from 'react';
import { Note } from '../../api';
import { NothingSelected, LodingNoteEditor, NotFoundNote } from '../views';
export const Main = () => {
	const { status, onSetNote, onLoadingNote, onSetError } = useNoteStore();

	const { id = '' } = useParams();
	const { noteQuery } = useNote(id);

	useEffect(() => {
		if (id && noteQuery.isLoading) {
			onLoadingNote();
		}
		if (noteQuery.isError) {
			return onSetError();
		}
		if (id && !noteQuery.isFetching) {
			onSetNote(noteQuery.data?.body as Note);
			document.title = noteQuery.data?.body?.title as string;
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [
		id,
		noteQuery.data?.body,
		noteQuery.isError,
		noteQuery.isFetching,
		noteQuery.isLoading,
	]);

	return (
		<Box sx={{ width: '100%' }}>
			<NavBar />
			{status === 'nothing-selected' && <NothingSelected />}
			{status === 'loading' && <LodingNoteEditor />}
			{status === 'error' && <NotFoundNote />}
			{status === 'active' && <Outlet />}
		</Box>
	);
};
