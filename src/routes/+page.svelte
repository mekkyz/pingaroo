<script lang="ts">
	import { base } from '$app/paths'

	import Component from '$src/routes/component.svelte'
</script>

<h1>Welcome to SvelteKit</h1>
<p class="bg-green-300">
	Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a>
	to read the documentation: {base}
</p>
<Component name="world" />
