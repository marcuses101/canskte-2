<script lang="ts">
	import { en } from 'resources/translations.json';
	import { getCheckmarksByRibbonId, getRibbonsByStageId, type StageId } from 'resources';
	export let stageId: StageId;
	const title = en[stageId];
	const ribbons = getRibbonsByStageId(stageId);
	console.log(ribbons);
</script>

<section class="card">
	<h3>{title}</h3>
	{#each ribbons as { fundamentalAreaId, id: ribbonId }}
		<h4>{en[fundamentalAreaId]}</h4>
		{#each getCheckmarksByRibbonId(ribbonId) as { id: checkmarkId }}
			<p>{en[checkmarkId]}</p>
		{/each}
	{/each}
</section>

<style>
	.card {
		border: 2px solid black;
		padding: 1rem;
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}
</style>
