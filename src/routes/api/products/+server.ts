import type { RequestHandler } from '../$types';

export const GET: RequestHandler = async ({ fetch }) => {
	const res = await fetch('https://dummyjson.com/products/1');
	const data = await res.json();

	return new Response(JSON.stringify(data), { status: 200 });
};
