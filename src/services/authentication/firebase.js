import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBsPH9VVcfKzPRFxGiLGj2t7N3qxRBqBSs',
  authDomain: 'mealstogo-cd759.firebaseapp.com',
  projectId: 'mealstogo-cd759',
  storageBucket: 'mealstogo-cd759.appspot.com',
  messagingSenderId: '859623962241',
  appId: '1:859623962241:web:9ed423cf9d40f8a53cbf80',
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
