import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const transactions = await fetch('https://aztrack.io/api/v1/transactions?page=1').then((res) => {
		return res.json();
	});

	return {
		transactions
	};
};
