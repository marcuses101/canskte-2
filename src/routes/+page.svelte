<script lang="ts">
	import { app, db } from '../firebase';
	import { collection, addDoc } from 'firebase/firestore';
	import { getTodosStore } from '../stores';
	import { Test } from 'components';
	console.log({ app, db });
	let text: string = '';
	let todosStore = getTodosStore();

	function addTodo() {
		if (!db) return;
		addDoc(collection(db, 'todo'), { text });
		text = '';
	}
</script>

<Test />
<form on:submit|preventDefault={addTodo}>
	<input bind:value={text} />
	<button type="submit">Add</button>
	<ul>
		{#each $todosStore as todo}
			<li>{todo}</li>
		{/each}
	</ul>
</form>
