import {
  doc,
  DocumentData,
  DocumentReference,
  serverTimestamp,
  setDoc,
} from "firebase/firestore/lite";
import { v4 as uuidv4 } from "uuid";
import { UserDocument } from "../../types";
import { auth, collectionName, firestore } from "../initialize";

// types
type CreateNewDoc = (email: string) => Promise<void>;
type UserDocRef = () => DocumentReference<DocumentData> | null;

// will always ref to current auth user document
export const userDocRef: UserDocRef = () => {
  return auth.currentUser
    ? doc(firestore, collectionName, auth.currentUser.uid)
    : null;
};

// When user registers we create a new document to hold all user data including posts
const createNewDoc: CreateNewDoc = async (email) => {
  let docRef = userDocRef();
  if (!docRef) return;

  let docData: UserDocument = {
    id: docRef.id, // is uid of authenticated user
    email: email,
    createdAt: serverTimestamp(),
    lastUpdatedAt: serverTimestamp(),
    posts: [
      {
        id: uuidv4().substring(0, 13),
        title: "Demo Post",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      },
    ],
  };

  try {
    await setDoc(docRef, docData);
    console.log("User Document Created ");
  } catch (e) {
    console.error("Error Creating User document ", e);
  }
};

export const user = {
  //   userDocRef,
  createNewDoc,
};
