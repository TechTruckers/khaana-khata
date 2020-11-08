import firebase from 'firebase'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyCFasgzk3PQraP_YVlSk2M8r0sdBdqMQpo',
  authDomain: 'hackout-food-buddy.firebaseapp.com',
  databaseURL: 'https://hackout-food-buddy.firebaseio.com',
  projectId: 'hackout-food-buddy',
  storageBucket: 'hackout-food-buddy.appspot.com',
  messagingSenderId: '588544079563',
  appId: '1:588544079563:web:99c8adbaad30e41d06cd4e',
}

firebase.initializeApp(firebaseConfig)

let db = firebase.firestore()

export default db
