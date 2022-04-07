import Product from "@/models/product";
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
  doc,
  deleteDoc,
  updateDoc,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDCEM-TX9ZbvuJF_GAHlfDvEmRiEGgUH6k",
  authDomain: "calc-65580.firebaseapp.com",
  databaseURL: "https://calc-65580-default-rtdb.firebaseio.com",
  projectId: "calc-65580",
  storageBucket: "calc-65580.appspot.com",
  messagingSenderId: "16149562327",
  appId: "1:16149562327:web:34e9c7e4e8618ee20f4192",
  measurementId: "G-8G93S9Q999",
};

initializeApp(firebaseConfig);

const db = getFirestore();

const collRef = collection(db, "products");

export const getProducts = () => {
  return getDocs(collRef)
    .then((snapshot) => {
      const products: any = [];
      snapshot.docs.forEach((doc) => {
        products.push({ ...doc.data(), id: doc.id });
      });
      return products;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const addProduct = async (data: Product) => {
  await addDoc(collRef, data);
};

export const deleteProduct = async (id: string) => {
  const docRef = doc(db, "products", id);
  return await deleteDoc(docRef);
};

export const updateProduct = async (data: Product) => {
  const docRef = doc(db, "products", data.id);
  return await updateDoc(docRef, {
    isChecked: data.isChecked,
  });
};
