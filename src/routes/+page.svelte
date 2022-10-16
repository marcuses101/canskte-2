<script lang="ts">
	import { db } from '../firebase';
	import { collection, addDoc, deleteDoc, doc, Timestamp } from 'firebase/firestore';
	import { getTodosStore } from '../stores';
	import { Test } from 'components';
	let text: string = '';
	let todosStore = getTodosStore();

	function addTodo() {
		addDoc(collection(db, 'todo'), { text, creationTime: Timestamp.now() });
		text = '';
	}

	function removeTodo(id: string) {
		deleteDoc(doc(db, 'todo', id));
	}
	const formatter = new Intl.DateTimeFormat('en-CA', { dateStyle: 'long' }).format;
</script>

<Test />
<form on:submit|preventDefault={addTodo}>
	<input bind:value={text} />
	<button type="submit">Add</button>
	<ul>
		{#each $todosStore as { id, text, creationTime }}
			<li>
				{text}
				<button
					type="button"
					on:click={() => {
						removeTodo(id);
					}}>x</button
				>
				{formatter(creationTime)}
			</li>
		{/each}
	</ul>
</form>
