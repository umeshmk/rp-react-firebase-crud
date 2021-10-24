// single doc size limit - 1 MB

import { getDoc, serverTimestamp, updateDoc } from "firebase/firestore/lite";
import { Post, UserDocument } from "../../types";
import { userDocRef } from "./user";

// types
type Get = () => Promise<Post[]>;
type Update = (posts: Post[]) => Promise<boolean>;

// get all posts in user's document
const get: Get = async () => {
  let docRef = userDocRef();
  if (!docRef) return null;

  try {
    // # fetch single doc
    let docSnap = await getDoc(docRef);
    return docSnap.data()?.posts;
  } catch (e) {
    console.error(e);
  }
};

// create/update single post in user document.posts array
const update: Update = async (posts) => {
  let docRef = userDocRef();
  if (!docRef) return false;

  try {
    let userDoc = await getDoc(docRef);
    let docData: Partial<UserDocument> = {
      // ...(userDoc.data() as UserDocument),
      lastUpdatedAt: serverTimestamp(),
      posts,
    };
    await updateDoc(docRef, docData);
    return true;
  } catch (e) {
    console.error(e);
    return false;
  }
};

export const posts = {
  get,
  update,
};
