import { Box } from '@mui/material';
import { ChangeEvent, useState, useEffect, useMemo } from 'react';
import ReactMarkdown from 'react-markdown';
// import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import { MenuEditor } from './MenuEditor';
import { useUiStore } from '../../../hooks/useUiStore';
import { useNoteStore } from '../../hooks';
import { useUpdateNote } from '../../hooks/useUpdateNote';
import { LayoutContentView } from '../../views/LayoutView';

export const Editor = () => {
	const { id, content, onSetUpdateNote } = useNoteStore();
	const { openEditor } = useUiStore();

	const [markdownInput, setMarkdownInput] = useState<string>(content);

	const { updateNote } = useUpdateNote(id);

	const prevContent = useMemo(() => content, [updateNote.isLoading]);

	const onBlurSaveContentNote = () => {
		if (prevContent !== content) {
			updateNote.mutate({ id, note: { content } });
		}
	};

	const handleChange = ({ target }: ChangeEvent<HTMLTextAreaElement>) => {
		const { value } = target;

		setMarkdownInput(value);
		onSetUpdateNote({ content: value });
	};

	useEffect(() => {
		if (updateNote.isSuccess) {
			updateNote.reset();
		}
		setMarkdownInput(content);
	}, [content, updateNote]);

	return (
		<LayoutContentView>
			<MenuEditor />
			<Box marginTop={8} onBlur={onBlurSaveContentNote}>
				{openEditor ? (
					<textarea
						spellCheck={false}
						className="editor-textarea"
						value={markdownInput}
						onBlur={onBlurSaveContentNote}
						onChange={handleChange}
					></textarea>
				) : (
					<div>
						{/* <Box> */}
						<ReactMarkdown
							children={markdownInput}
							// components={{
							//     code: MarkComponent,
							// }}
						/>
						{/* </Box> */}
					</div>
				)}
			</Box>
		</LayoutContentView>
	);
};

// const MarkComponent = ({ value, language }: any) => {
//     return (
//         <SyntaxHighlighter showLineNumbers={true} language={language ?? null} style={docco}>
//             {value ?? ''}
//         </SyntaxHighlighter>
//     )
// }
