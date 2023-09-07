import { initializeApp } from "firebase/app";

// firebase configuration
const app = initializeApp({
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
});

const apiKey = process.env.REACT_APP_API_KEY;
const PId = process.env.REACT_APP_PROJECT_ID;

// Using the variables in your code
console.log("API Key:", apiKey);
console.log("dom : ", process.env.REACT_APP_AUTH_DOMAIN);
console.log("Project ID:", PId);
console.log("st Bucket : ", process.env.REACT_APP_STORAGE_BUCKET);
console.log("Mess Sender Id : ", process.env.REACT_APP_MESSAGING_SENDER_ID);
console.log("AppID: ", process.env.REACT_APP_APP_ID);

// const app = initializeApp({
//   apiKey: "AIzaSyCcd1n5E8R7mPBKrwZRZYVH7PwIZ7k5hfU",
//   authDomain: "quize-app-dev-aa90a.firebaseapp.com",
//   projectId: "quize-app-dev-aa90a",
//   storageBucket: "quize-app-dev-aa90a.appspot.com",
//   messagingSenderId: "878754804861",
//   appId: "1:878754804861:web:7b953516a8624281bc6d14",
// });

export default app;
