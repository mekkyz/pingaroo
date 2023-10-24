<script lang="ts">
	import { onDestroy } from 'svelte'

	import { checkServiceHealth } from '$lib/index'

	export let service: { name: string; endpoint: string }
	let status: boolean | null = null

	async function fetchStatus() {
		status = null // reset status to 'Checking...'
		status = await checkServiceHealth(service.endpoint)
	}

	// call fetchStatus on component mount
	fetchStatus()

	// interval to recheck the service's health every *ms
	const intervalId = setInterval(fetchStatus, 5000)

	// clear interval
	onDestroy(() => {
		clearInterval(intervalId)
	})
</script>

<p>
	{service.name}: {status === null ? 'Checking...' : status ? 'Online' : 'Offline'}
</p>
