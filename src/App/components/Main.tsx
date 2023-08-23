import { Box } from '@mui/material';
import { Editor, NavBar } from '.';
import { useLocation } from 'react-router-dom';
import { useNote, useNoteStore } from '../hooks';
import { useEffect } from 'react';
import { Note } from '../../api';
import { NothingSelected, LodingNoteEditor } from '../views';
export const Main = () => {
	const { status, onSetNote, onLoadingNote } = useNoteStore();
	const location = useLocation();

	const searchParams = new URLSearchParams(location.search);

	const { note = '' } = Object.fromEntries(searchParams);

	const { noteQuery } = useNote(note);

	useEffect(() => {
		if (noteQuery.isLoading) {
			onLoadingNote();
		}
		if (note !== '' && !noteQuery.isLoading) {
			onSetNote(noteQuery.data?.body as Note);
		}
	}, [
		note,
		noteQuery.data?.body,
		noteQuery.isFetching,
		noteQuery.isLoading,
		onLoadingNote,
		onSetNote,
	]);

	return (
		<Box sx={{ width: '100%' }}>
			<NavBar />
			{status === 'active' && <Editor />}
			{status === 'loading' && <LodingNoteEditor />}
			{status === 'nothing-selected' && <NothingSelected />}
		</Box>
	);
};
