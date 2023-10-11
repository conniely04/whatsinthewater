import { initializeApp } from "firebase/app";
import { getStorage, ref, getDownloadURL } from "firebase/storage";

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
//const imagesRef = ref(storage, "images/logo.png");
//path to image
const logoRef = ref(storage, "images/logo.png");

//retrieval
let imageUrl = null;

try {
  //imageUrl.child(logoRef).getDownloadURL();
} catch (error) {
  console.error("Error fetching image:", error);
}

export { firebaseConfig, app, storage, storageRef, logoRef, getDownloadURL };
//group everything in a function and then  export only the function
