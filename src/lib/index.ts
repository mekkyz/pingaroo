// place files you want to import through the `$lib` alias in this folder.
import { browser } from '$app/environment'

export function sleep(ms: number): Promise<void> {
	return new Promise((resolve) => setTimeout(resolve, ms))
}

export async function checkServiceHealth(endpoint: string, delay: number = 1000): Promise<boolean> {
	await sleep(delay) // wait for 1 second

	// if not in the browser, skip the fetch
	if (!browser) {
		return false
	}

	try {
		const response = await fetch(endpoint)
		return response.ok
	} catch (error) {
		return false
	}
}
