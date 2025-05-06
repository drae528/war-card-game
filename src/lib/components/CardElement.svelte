<script>
	import { Club, Diamond, Heart, Spade } from '@lucide/svelte';

	let { value, suit } = $props();
</script>

<div class="relative h-[18.75rem] w-[14rem] select-none font-medium rounded-sm bg-neutral-200">
	<div class="absolute top-2 left-3 w-fit h-fit flex flex-col items-center *:w-fit *:h-fit">
		<span>{value}</span>
		{#if suit === 'club'}
			<Club fill="var(--color-blue-400)" />
		{:else if suit === 'diamond'}
			<Diamond fill="var(--color-orange-400)" />
		{:else if suit === 'heart'}
			<Heart fill="var(--color-red-400)" />
		{:else if suit === 'spade'}
			<Spade fill="var(--color-black-400)" />
		{:else}
			<p>Error loading icon</p>
		{/if}
	</div>

	<div
		class="absolute top-1/2 text-3xl -translate-y-1/2 left-1/2 -translate-x-1/2 w-fit h-fit flex flex-col items-center *:w-fit *:h-fit"
	>
		<span class="absolute top-1/2 -translate-y-3/5">{value}</span>
		{#if suit === 'club'}
			<Club fill="var(--color-blue-400)" class="middle" />
		{:else if suit === 'diamond'}
			<Diamond fill="var(--color-orange-400)" class="middle" />
		{:else if suit === 'heart'}
			<Heart fill="var(--color-red-400)" class="middle" />
		{:else if suit === 'spade'}
			<Spade fill="var(--color-black-400)" class="middle" />
		{:else}
			<p>Error loading icon</p>
		{/if}
	</div>

	<div
		class="absolute bottom-2 right-3 w-fit h-fit flex flex-col items-center *:w-fit *:h-fit transform scale-y-[-1]"
	>
		<span>{value}</span>
		{#if suit === 'club'}
			<Club fill="var(--color-blue-400)" />
		{:else if suit === 'diamond'}
			<Diamond fill="var(--color-orange-400)" />
		{:else if suit === 'heart'}
			<Heart fill="var(--color-red-400)" />
		{:else if suit === 'spade'}
			<Spade fill="var(--color-black-400)" />
		{:else}
			<p>Error loading icon</p>
		{/if}
	</div>
</div>
