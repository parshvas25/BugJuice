import firebase from 'firebase';
var config = {
  apiKey: 'uAIzaSyDTPOjaA1gXWv2jv9ljRaQNqZXm5u1q1LU',
  authDomain: 'bugjuice-6807b.firebaseapp.com',
  databaseURL: 'https://bugjuice-6807b.firebaseio.com/',
  storageBucket: 'bugjuice-6807b.appspot.com',
  messagingSenderId: '123123123123'
};
var fire = firebase.initializeApp(config);
export default fire;
