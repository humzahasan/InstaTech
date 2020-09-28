import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyB7FRb4EdD8Vwwtsy4_kwbhvtalE_VPxqw',
  authDomain: 'insta-tech-community.firebaseapp.com',
  databaseURL: 'https://insta-tech-community.firebaseio.com',
  projectId: 'insta-tech-community',
  storageBucket: 'insta-tech-community.appspot.com',
  messagingSenderId: '265070409845',
  appId: '1:265070409845:web:a2f74684d51cab1dcf603c',
  measurementId: 'G-R7J8G46YRF',
});

const db = firebaseApp.firestore();

export default db;
