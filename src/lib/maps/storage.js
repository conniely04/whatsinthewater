import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDde8g1s6p76piGjYOAetQQInbIAp8lPTc",
  authDomain: "whatsinthewater.firebaseapp.com",
  projectId: "whatsinthewater",
  storageBucket: "whatsinthewater.appspot.com",
  messagingSenderId: "54402324646",
  appId: "1:54402324646:web:b442552d3518a5e86abc67",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage();
const storageRef = ref(storage);
const imagesRef = ref(storage, "images");
const logoRef = ref(storage, "images/logo.png");

uploadBytes(storageRef, file).then((snapshot) => {
  console.log("Uploaded a blob or file!");
});

export { firebaseConfig, app, storage, storageRef, imagesRef, logoRef };
