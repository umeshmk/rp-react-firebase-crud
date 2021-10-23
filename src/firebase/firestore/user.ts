import {
  doc,
  DocumentData,
  DocumentReference,
  setDoc,
} from "firebase/firestore/lite";
import { v4 as uuidv4 } from "uuid";
import { UserDocument } from "../../types";
import { auth, collectionName, firestore } from "../initialize";

// types
type CreateNewDoc = () => Promise<void>;
type UserDocRef = () => DocumentReference<DocumentData> | null;

// will always ref to current auth user document
export const userDocRef: UserDocRef = () => {
  if (!auth.currentUser) return null;
  return doc(firestore, collectionName, auth.currentUser.email as string);
};

// When user registers we create a new document to hold all user data including posts
const createNewDoc: CreateNewDoc = async () => {
  let docRef = userDocRef();
  if (!docRef) return;

  let docData: UserDocument = {
    id: docRef.id, // is emailid of authenticated user
    posts: [
      {
        id: uuidv4().substring(0, 13),
        title: "Demo Post",
        description: "My Demo post Description.",
      },
    ],
  };

  try {
    await setDoc(docRef, docData);
    // console.log("User Doc Created ");
  } catch (e) {
    console.error("Error Creating User document ", e);
  }
};

export const user = {
  //   userDocRef,
  createNewDoc,
};
