// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";
// import { GoogleAuthProvider, getAuth } from "firebase/auth";
// import { getStorage } from "firebase/storage";

// const firebaseConfig = {
//     apiKey: "AIzaSyD-Gju33KdfS96cfCwKfW1oqMPjSHJtDDQ",
//     authDomain: "medi-locator-webapp.firebaseapp.com",
//     databaseURL: "https://medi-locator-webapp-default-rtdb.firebaseio.com",
//     projectId: "medi-locator-webapp",
//     storageBucket: "medi-locator-webapp.appspot.com",
//     messagingSenderId: "976883160812",
//     appId: "1:976883160812:web:77480e2a4c2d7b8ccbb7c9",
//     measurementId: "G-L71LCK3Y0S"
// };

// const app = initializeApp(firebaseConfig);
// const provider = new GoogleAuthProvider(app);
// const db = getFirestore(app);
// const auth = getAuth(app);
// const storage = getStorage(app);

// export { db, auth, provider, storage };





import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyAP-9o-obtk-WsnnjGg09XroqBFNvzOwf4",
    authDomain: "medilocator.firebaseapp.com",
    projectId: "medilocator",
    storageBucket: "medilocator.firebasestorage.app",
    messagingSenderId: "821100000645",
    appId: "1:821100000645:web:30552afa42adf6fdf140ec",
    measurementId: "G-H8CXHT321S"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage, analytics };