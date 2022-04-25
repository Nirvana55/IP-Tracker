import React from 'react';

import { FormContainer, FormHeader } from './style';
import UserInput from '../../components/Input';

const Home = () => {
	return (
		<FormContainer>
			<div>
				<FormHeader>IP Address Tracker</FormHeader>
				<UserInput />
			</div>
		</FormContainer>
	);
};

export default Home;
