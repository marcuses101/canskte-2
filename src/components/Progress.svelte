<script lang="ts">
	import { en } from 'resources/translations.json';
	import type {
		BadgeId,
		CheckmarkId,
		FundamentalAreaId,
		PossibleCheckmarks
	} from 'resources/progress';

	type Checkmark = Partial<Record<CheckmarkId, string>>;
	type Fundamental = Partial<Record<FundamentalAreaId, Checkmark>>;
	type ProgressSheetData = Partial<Record<BadgeId, Fundamental>>;

	const initialObject = [...Array(6)]
		.map((_, i) => (i + 1).toString())
		.reduce((acc, cur) => ({ ...acc, [cur]: { B: {}, C: {}, A: {} } }), {});
	const checkmarks = Object.entries(en).filter(([key]) => {
		const [stage, fundamental, checkmark] = key.split('-');
		return stage && fundamental && checkmark;
	});
	const progessStructure = checkmarks.reduce<Record<any, any>>(
		(acc, [checkmarkId, description]) => {
			const [badge, fund, check] = checkmarkId.split('-');
			acc[badge][fund][checkmarkId] = description;
			return acc;
		},
		initialObject
	);
	const badges = Object.entries(progessStructure);
</script>

<h1>Progress</h1>
<div class="grid">
	{#each badges as [badge, badgeContent]}
		<section class="card">
			<h2>{badge}</h2>
			{#each Object.entries(badgeContent) as [fund, checkmarks]}
				<article>
					<h3>{fund}</h3>
					{#each Object.values(checkmarks) as description}
						<p>{description}</p>
					{/each}
				</article>
			{/each}
		</section>
	{/each}
</div>

<style>
	article {
		padding-left: 1rem;
	}
	.card {
		border: 2px solid black;
		padding: 1rem;
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}
	.grid {
		display: grid;
		gap: 1rem;
		grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
	}
</style>
