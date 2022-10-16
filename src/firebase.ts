// Import the functions you need from the SDKs you need
import { browser } from '$app/environment';
import { initializeApp, type FirebaseApp } from 'firebase/app';
import { Firestore, getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyB76nUQsQDe30_c5S-NlMXZ3JZhnDA8pIk',
	authDomain: 'canskate-2.firebaseapp.com',
	projectId: 'canskate-2',
	storageBucket: 'canskate-2.appspot.com',
	messagingSenderId: '462314651566',
	appId: '1:462314651566:web:11601ff2e6b5c0e0ed123f',
	measurementId: 'G-X3Z3XDR96C'
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

// export let app: FirebaseApp | undefined;
// export let db: Firestore | undefined;

// function initializeFirebase() {
// 	if (typeof app === 'undefined' && browser) {
// 		console.log('initializing firebase');
// 		app = initializeApp(firebaseConfig);
// 		db = getFirestore(app);
// 	}
// }

// initializeFirebase();
