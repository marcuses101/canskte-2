import { collection, onSnapshot, query, orderBy, Timestamp } from 'firebase/firestore';
import { db } from './firebase';

interface Todo {
	id: string;
	text: string;
	creationTime: Date;
}

export function getTodosStore() {
	let todos: Todo[] = [];
	let subs: ((value: Todo[]) => void)[] = [];
	const collectionReference = collection(db, 'todo');
	const todoQuery = query(collectionReference, orderBy('creationTime', 'desc'));
	const unsub = onSnapshot(todoQuery, (querySnapShot) => {
		todos = querySnapShot.docs.map((doc) => {
			const { text, creationTime } = doc.data();
			console.log({ creationTime });
			return { id: doc.id, text, creationTime: creationTime.toDate() };
		});
		subs.forEach((sub) => sub(todos));
	});

	const subscribe = (handler: (value: Todo[]) => void) => {
		subs = [...subs, handler]; // add handler to the array of subscribers
		handler(todos); // call handler with current value
		return () => {
			subs = subs.filter((sub) => sub !== handler);
			if (subs.length === 0 && typeof unsub === 'function') {
				unsub();
			}
		}; // return unsubscribe function
	};

	return {
		subscribe
	};
}
