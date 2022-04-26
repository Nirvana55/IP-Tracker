import Paper from '@mui/material/Paper';
import { useForm, Controller } from 'react-hook-form';

import { IconButton, InputAdornment, TextField } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useFindIpAddress } from '../../api/IpTracker/mutation';
import { FormContainer, FormHeader } from './style';
import Details from '../../components/Details/Details';
import Map from '../../components/Map';

interface UserInput {
	ipAddress?: string;
}

const Home = () => {
	const { handleSubmit, control } = useForm<UserInput>({
		defaultValues: {
			ipAddress: '',
		},
	});
	const getUserIp = useFindIpAddress();

	const onSubmit = (data: UserInput) => {
		getUserIp.mutate({
			apiKey: data.ipAddress,
		});
	};

	return (
		<>
			<FormContainer>
				<div>
					<FormHeader>IP Address Tracker</FormHeader>
					<Paper sx={{ p: 1 }}>
						<form onSubmit={handleSubmit(onSubmit)}>
							<Controller
								name='ipAddress'
								control={control}
								render={({ field }) => (
									<TextField
										fullWidth
										id='Ip tracker'
										placeholder='Input API Key'
										variant='outlined'
										InputProps={{
											endAdornment: (
												<InputAdornment
													sx={{ pr: '0 !important' }}
													position='end'>
													<IconButton type='submit'>
														<ArrowForwardIosIcon
															fontSize='small'
															sx={{ color: 'black' }}
														/>
													</IconButton>
												</InputAdornment>
											),
										}}
										{...field}
									/>
								)}
							/>
						</form>
					</Paper>
					<Details data={getUserIp.data} />
				</div>
			</FormContainer>
			<Map data={getUserIp.data} />
		</>
	);
};

export default Home;
