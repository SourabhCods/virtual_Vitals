// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCvkFHvp3nkvadvrTvBQ1-xYt09NWb7m1Q",
  authDomain: "virtual-vitals-38517.firebaseapp.com",
  projectId: "virtual-vitals-38517",
  storageBucket: "virtual-vitals-38517.appspot.com",
  messagingSenderId: "148356878678",
  appId: "1:148356878678:web:486474baf8b8eb729906f7",
  measurementId: "G-R2DR819620"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);