import { useMemo, useState } from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import EmojiPicker, { EmojiClickData } from 'emoji-picker-react';
import { useNoteStore } from '../../hooks';
import { useUpdateNote } from '../../hooks/useUpdateNote';


export const EmojiPickerButton = () => {

    const { id, emoji: emojiActive, onSetUpdateNote } = useNoteStore()

    const [emojiValue, setEmojiValue] = useState(emojiActive || '📄')

    const { updateNote } = useUpdateNote(id);

    const prevEmoji = useMemo(() => emojiActive, [emojiActive]);

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const onEmojiClick = (emojiObject: EmojiClickData) => {

        const emojiSelected = emojiObject.emoji

        if (prevEmoji === emojiSelected) {
            setAnchorEl(null)
            return
        }
        updateNote.mutate({ id, note: { emoji: emojiSelected } })
        setEmojiValue(emojiSelected)
        onSetUpdateNote({ emoji: emojiSelected })
        setAnchorEl(null)
    }


    return (
        <>
            <Button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                style={{ fontSize: '1.3rem', padding: '1px 0px', border: '1px solid #ccc', borderRadius: '5px' }}
            >
                {emojiValue}
            </Button>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                sx={{ backgroundColor: 'none', marginTop: 1 }}
            >
                <EmojiPicker onEmojiClick={onEmojiClick} />
            </Menu>
        </>
    );
}
