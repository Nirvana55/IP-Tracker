import { useMutation } from 'react-query';
import axios, { AxiosError } from 'axios';

import { UserKey } from '../../interface/map';

const findUserIpAddress = async ({ apiKey }: UserKey) => {
	const res = await axios.get(
		`https://geo.ipify.org/api/v2/country?apiKey=${apiKey}`
	);
	return res.data;
};

export const useFindIpAddress = () =>
	useMutation(findUserIpAddress, {
		onError: (err: AxiosError) => {
			console.log(err.message);
		},
	});
