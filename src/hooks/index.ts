import { getCookieValue } from '$lib/getCookieValue.ts'
import type {GetSession, Handle} from '@sveltejs/kit'
import {isTheme} from '../types'

const getThemeFromCookie = (cookie: string) => {
	const theme = getCookieValue(cookie, 'theme')
	return isTheme(theme) ? theme : null
}

export const handle: Handle = async ({request, resolve}) => {
	const cookie = request.headers.cookie
	request.locals.theme = getThemeFromCookie(cookie)
	return resolve(request)
}

export const getSession: GetSession = ({locals}) => {
	const theme = locals.theme
	return {theme}
}
