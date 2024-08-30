// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyCxNjXPVkbdWOSMqOZVvR0Z7eHRpjQUCQM',
	authDomain: 'namaste-netflix-7c14a.firebaseapp.com',
	projectId: 'namaste-netflix-7c14a',
	storageBucket: 'namaste-netflix-7c14a.appspot.com',
	messagingSenderId: '286306894852',
	appId: '1:286306894852:web:af1e97e1a88963f227e151',
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const auth = getAuth();
