import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ fetch }) => {
	const fetchProducts = async () => {
		const res = await fetch('/api/products');
		return res.json();
	};
	return {
		products: fetchProducts()
	};
};
