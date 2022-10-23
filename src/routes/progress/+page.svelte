<script lang="ts">
	import { page } from '$app/stores';
	import Progress from 'components/Progress.svelte';
	const {
		params: { test }
	} = $page;
	console.log(test);
</script>

<Progress />
