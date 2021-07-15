import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDYFlTOhP_ZXWsI6KvT3RQq3291W32Ip4c",
    authDomain: "nft-trader-coderhouse.firebaseapp.com",
    projectId: "nft-trader-coderhouse",
    storageBucket: "nft-trader-coderhouse.appspot.com",
    messagingSenderId: "855090504823",
    appId: "1:855090504823:web:89a61101512253a3915272"
}

const fb = firebase.initializeApp(firebaseConfig)

export const dataBase = fb.firestore()