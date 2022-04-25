import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Box } from '@mui/system';
import Background_Picture from '../../assets/images/pattern-bg.png';

export const FormContainer = styled(Box)(({ theme }) => ({
	backgroundImage: `url(${Background_Picture})`,
	backgroundSize: 'cover',
	height: '300px',

	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
}));

export const FormHeader = styled(Typography)(({ theme }) => ({
	fontSize: '28px',
	color: 'white',
	textAlign: 'center',
	fontWeight: '600',
	marginBottom: '1rem',
}));
