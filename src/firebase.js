import { initializeApp } from "firebase/app";

//firebase config

const app = initializeApp({
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AuthDomain,
  projectId: process.env.REACT_APP_ProjectId,
  storageBucket: process.env.REACT_APP_StorageBucket,
  messagingSenderId: process.env.Msg_Sender_Id,
  appId: process.env.REACT_APP_AppID,
});
export default app;
