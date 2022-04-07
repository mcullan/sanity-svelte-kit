import { session } from '$app/stores'
import type { SessionStore } from 'src/hooks'
import { derived } from 'svelte/store'
import { browser } from '$app/env'

export enum Theme {
    Light = 'light',
    Dark = 'dark'
}

export const theme = derived<SessionStore, Theme>
    (session as SessionStore, ($session, set) => {
        if ($session.theme) {
            set($session.theme)
        } else if (browser) {
            set(
                window.matchMedia('(prefers-color-scheme: dark)').matches
                    ? Theme.Dark
                    : Theme.Light
            )
        }
    })

export const setTheme = async (theme: Theme) => {
    session.update(($session) => ({ ...$session, theme }))
    fetch('/theme', { method: 'PUT', body: theme })
}