import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCd0BcP_wPfefJ7ZcmBRFP8TKeqRYBYE2U',
  authDomain: 'vue3-toolbox.firebaseapp.com',
  projectId: 'vue3-toolbox',
  storageBucket: 'vue3-toolbox.appspot.com',
  messagingSenderId: '412569976502',
  appId: '1:412569976502:web:f14e7e9a5004771b4cb017',
  measurementId: 'G-ZTK14VNNEL'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app)

export { app, auth }
