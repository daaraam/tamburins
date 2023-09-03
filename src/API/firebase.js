import { initializeApp } from 'firebase/app';
import {
	GoogleAuthProvider,
	createUserWithEmailAndPassword,
	getAuth,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	signInWithPopup,
	signOut,
} from 'firebase/auth';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
	apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
	authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
	databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
	projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();
const database = getDatabase(app);

export { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword };

export function googleLogin() {
	signInWithPopup(auth, provider).catch(console.error);
}

export function logOut() {
	signOut(auth).catch(console.error);
}

export function userStateChange(callback) {
	onAuthStateChanged(auth, async user => {
		const updatedUser = user;
		callback(updatedUser);
	});
}
