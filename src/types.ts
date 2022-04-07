const themes = ['light', 'dark'] as const
export type Theme = typeof themes[number]

export const isTheme = (theme: string): theme is Theme =>
	themes.includes(theme as Theme)

const desktops = ['desktop', 'mobile'] as const
export type Desktop = typeof desktops[number]

export const isDesktop = (desktop: string): desktop is Desktop =>
	desktops.includes(desktop as Desktop)