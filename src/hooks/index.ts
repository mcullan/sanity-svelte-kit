import type { GetSession } from "@sveltejs/kit";
import type {Writable} from 'svelte/store';
import { Theme } from '$lib/stores/theme'


export type SessionData = {theme: Theme}
export type SessionStore = Writable<SessionData>

const getCookieValue = (
	cookie: string | null,
	name: string
): string | null =>
	cookie?.match('(^|;)\\s*' + name + '\\s*=\\s*([^;]+)')?.pop() || null


export const getSession: GetSession = ({request}) => {
    const cookie = request.headers.get('cookie');
    console.log(`Cookie: ${cookie}`)
    const theme = cookie   
        ? getCookieValue(cookie, 'theme') as Theme
        : Theme.Dark;

    return {theme}

}
