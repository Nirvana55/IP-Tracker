import { styled } from '@mui/material/styles';
import { Box } from '@mui/system';

export const DetailsContainer = styled(Box)(({ theme }) => ({
	position: 'absolute',
	left: '30%',
	// top: '29%',
	zIndex: '1000',

	width: '60%',
	maxWidth: '700px',
	marginTop: '2rem',
}));

export const DetailsBody = styled('div')(({ theme }) => ({
	display: 'flex',
	alignItems: 'center',
	flexDirection: 'row',
	justifyContent: 'space-around',

	backgroundColor: 'white',
	padding: '2rem 1rem',
	borderRadius: '10px',
}));

export const DetailsList = styled('div')(({ theme }) => ({
	borderRight: '3px solid #f9f9f9',
	marginRight: '0.5rem',
	padding: '0rem 2rem',
}));
