<script lang="ts">
	import Status from '$src/routes/component.svelte'
	import services from '../services.json'
</script>

<h1>Service Status</h1>

{#each services as service}
	<Status {service} />
{/each}
