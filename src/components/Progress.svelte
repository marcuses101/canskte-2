<script lang="ts">
	import { en as translations } from 'resources/translations.json';
	import { stages } from 'resources';
	import StageCard from './StageCard.svelte';
</script>

<h1>Progress</h1>
<div class="grid">
	{#each stages as { id: stageId }}
		<StageCard {stageId} />
	{/each}
</div>

<style>
	.grid {
		display: grid;
		gap: 1rem;
		grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
	}
</style>
