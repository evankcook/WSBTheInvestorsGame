import { db } from "../config/firebase";
import {
  collection,
  getDoc,
  doc,
  setDoc,
  updateDoc,
  arrayUnion,
} from "firebase/firestore";

export async function post(collection, id, data) {
  try {
    if (id === "") {
      const ref = doc(collection(db, collection));
      let Uid = ref.id;
      await setDoc(ref, data);
      return Uid;
    } else {
      await setDoc(doc(db, collection, id), data);
      return id;
    }
  } catch (err) {
    alert(err);
  }
}

export async function postGame(collection, id, data) {
  try {
    if (id === "") {
      const ref = doc(collection(db, collection));
      let Uid = ref.id;
      await setDoc(ref, data);
      return Uid;
    } else {
      await setDoc(doc(db, collection, id), data);
      return id;
    }
  } catch (err) {
    alert(err);
  }
}
