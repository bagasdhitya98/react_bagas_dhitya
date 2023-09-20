import {initializeApp} from 'firebase/app'
import "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyCkhn1J6gqQHeREQJn78WkdEHPk55UduRo",
    authDomain: "fakestore-app-2111e.firebaseapp.com",
    projectId: "fakestore-app-2111e",
    storageBucket: "fakestore-app-2111e.appspot.com",
    messagingSenderId: "1016712721961",
    appId: "1:1016712721961:web:1c61797ba919fd5d120e38"
}

export const app = initializeApp(firebaseConfig)