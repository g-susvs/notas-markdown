import { Box } from '@mui/material';
import { useCustomMQ } from '../hooks';
import { useUiStore } from '../../hooks';

interface Props {
    children: JSX.Element | JSX.Element[]
}

export const LayoutContentView = ({ children }: Props) => {

    const { mediaQuery } = useCustomMQ()

    const { drawerWidth } = useUiStore()


    return (
        <Box
            sx={{
                bgcolor: 'background.default',
                p: 3,
                marginTop: 6,
                marginLeft: (!mediaQuery) ? '0px' : `${drawerWidth}px`,
            }}
        >
            {children}
        </Box>
    )
}
