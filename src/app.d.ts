/// <reference types="@sveltejs/kit" />
// See https://kit.svelte.dev/docs/types#the-app-namespace
// for information about these interfaces
declare namespace App {
	import type {Theme} from './types'

	interface Locals {
		theme: Theme | null
	}
	// interface Platform {}
	interface Session {
		theme: Theme | null
	}
	// interface Stuff {}
}
