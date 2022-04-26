import { Typography } from '@mui/material';
import { DetailsContainer, DetailsBody, DetailsList } from './styles';
import { UserData } from '../../interface/map';

interface Props {
	data: UserData;
}

const Details = ({ data }: Props) => {
	return (
		<DetailsContainer>
			<DetailsBody>
				<DetailsList>
					<Typography variant='body1'>IP tracker</Typography>
					<Typography style={{ fontWeight: 'bold' }} variant='h6'>
						{data ? data?.ip : 'N/A'}
					</Typography>
				</DetailsList>
				<DetailsList>
					<Typography variant='body1'>Location</Typography>
					<Typography style={{ fontWeight: 'bold' }} variant='h6'>
						{data ? data?.location.country : 'N/A'}
					</Typography>
				</DetailsList>
				<DetailsList>
					<Typography variant='body1'>TimeZone</Typography>
					<Typography style={{ fontWeight: 'bold' }} variant='h6'>
						{data ? data?.location.timezone : 'N/A'}
					</Typography>
				</DetailsList>
				<div
					style={{
						marginRight: '0.5rem',
						padding: '0rem 1rem',
					}}>
					<Typography variant='body1'>ISP</Typography>
					<Typography style={{ fontWeight: 'bold' }} variant='h6'>
						{data ? data?.isp : 'N/A'}
					</Typography>
				</div>
			</DetailsBody>
		</DetailsContainer>
	);
};

export default Details;
