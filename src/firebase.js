// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCt-lnXaKS0oWd-TGqHiRCfmWMDsp4uCsM",
  authDomain: "rentmilloh-production.firebaseapp.com",
  projectId: "rentmilloh-production",
  storageBucket: "rentmilloh-production.appspot.com",
  messagingSenderId: "546620586399",
  appId: "1:546620586399:web:b6a3f393b5210ce8c425aa",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);

// Firebase storage reference
export const storage = getStorage(app);

//Get All Properties
export const getProperties = async (setProperties) => {
  const docRef = await getDocs(collection(db, "Properties"));
  docRef.forEach((doc) => {
    console.log(doc.id);
    setProperties((prev) => {
      return [...prev, doc.id];
    });
  });
};

//Get All Properties
export const getFloors = async (propertyId, setFloors) => {
  const docRef = await getDocs(
    collection(db, `Properties/${propertyId}/Floors`)
  );
  docRef.forEach((doc) => {
    console.log(doc.id);
    setFloors((prev) => {
      return [...prev, doc.id];
    });
  });
};
