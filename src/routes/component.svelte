<script lang="ts">
	export let name: string
</script>

<p class="border border-blue-600 bg-red-300">
	<span>Hello</span>
	{name}!
</p>

<style lang="postcss">
	p {
		@apply m-5;

		span {
			@apply font-extrabold;
		}
	}
</style>
