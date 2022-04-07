import type {RequestHandler} from '@sveltejs/kit'
import {isTheme, type Theme} from '$lib/../types'

// PUT /theme
/** @type {import('./[id]').RequestHandler} */
export const put: RequestHandler = async (request) => {
	const theme = request.body as Theme;
	console.log(theme)
	if (!isTheme(theme)) {
		return {
			status: 400,
			body: `not a valid theme value: ${theme}`,
		}
	}

	return {
		headers: {
			'Set-Cookie': `theme=${theme}; SameSite=Strict; HttpOnly; Path=/`,
		},
	}
}