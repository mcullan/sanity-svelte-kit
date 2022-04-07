import type {RequestHandler} from '@sveltejs/kit'

// PUT /theme
/** @type {import('./blog/[slug]').RequestHandler} */
export const put: RequestHandler = async ({request}) => {
	const theme = await request.text();
	return {
		headers: {
			'Set-Cookie': `theme=${theme}; SameSite=Strict; HttpOnly; Path=/`,
		},
	}
}