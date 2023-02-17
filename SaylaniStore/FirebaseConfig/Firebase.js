import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyA-vsLxF_rkMQoygQx5kOyLeBDZCdJswEw",
    authDomain: "saylani-mart-react-native.firebaseapp.com",
    projectId: "saylani-mart-react-native",
    storageBucket: "saylani-mart-react-native.appspot.com",
    messagingSenderId: "980203438182",
    appId: "1:980203438182:web:8ac31501ca013d0cda6da7",
    measurementId: "G-HQ1NMXGLR7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);