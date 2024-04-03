import { initializeApp } from "firebase/app";

const firebaseConfig = {
        apiKey : "AIzaSyDfwQMchsmpgOyRZTIw4vs8Yb3ZQkrrozA",
        authDomain : "vanslife-react-bc.firebaseapp.com",
        projectId : "vanslife-react-bc",
        storageBucket : "vanslife-react-bc.appspot.com",
        messagingSenderId: "423548564137",
        appId : "1:423548564137:web:1eb423692ac4b123e2efb8"
    };
    
// Initialize Firebase
export const app = initializeApp(firebaseConfig);

