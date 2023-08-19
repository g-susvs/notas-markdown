import { Box } from '@mui/material';
import { ChangeEvent, useState } from 'react';
import ReactMarkdown from 'react-markdown';
// import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import { MenuEditor } from './MenuEditor';
import { useUiStore } from '../../../hooks/useUiStore';

export const Editor = () => {
	const { openEditor } = useUiStore();

	const [markdownInput, setMarkdownInput] = useState<string>('# Hola mundo');

	const handleChange = ({ target }: ChangeEvent<HTMLTextAreaElement>) => {
		const { value } = target;

		setMarkdownInput(value);
	};

	return (
		<Box
			component="main"
			sx={{ bgcolor: 'background.default', p: 3, marginTop: 6 }}
		>
			<MenuEditor />
			{openEditor ? (
				<textarea
					autoFocus
					className="textarea"
					value={markdownInput}
					onChange={handleChange}
				></textarea>
			) : (
				<ReactMarkdown
					children={markdownInput}
					// components={{
					//     code: MarkComponent,
					// }}
				/>
			)}
		</Box>
	);
};

// const MarkComponent = ({ value, language }: any) => {
//     return (
//         <SyntaxHighlighter showLineNumbers={true} language={language ?? null} style={docco}>
//             {value ?? ''}
//         </SyntaxHighlighter>
//     )
// }
