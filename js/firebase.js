import { initializeApp } from "https://www.gstatic.com/firebasejs/9.20.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.20.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.20.0/firebase-firestore.js";

const firebaseConfig = {

    apiKey: "AIzaSyDvph8wR785NF3kCPUbk13xwM6_yFKAdX0",
    authDomain: "grimcon-auction.firebaseapp.com",
    databaseURL: "https://grimcon-auction-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "grimcon-auction",
    storageBucket: "grimcon-auction.appspot.com",
    messagingSenderId: "890874900405",
    appId: "1:890874900405:web:be33c9add1e883d96b73sfc"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);

        