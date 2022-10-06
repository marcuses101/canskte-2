import { collection, onSnapshot, query } from 'firebase/firestore';
import { db } from './firebase';

export function getTodosStore() {
	let todos: string[] = [];
	let subs: ((value: string[]) => void)[] = [];

	const todoQuery = db && query(collection(db, 'todo'));
	const unsub =
		todoQuery &&
		onSnapshot(todoQuery, (querySnapShot) => {
			todos = querySnapShot.docs.map((doc) => doc.data().text);
			subs.forEach((sub) => sub(todos));
		});
	const subscribe = (handler: (value: string[]) => void) => {
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
