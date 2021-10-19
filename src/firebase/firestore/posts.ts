import { addDoc, collection, getDocs } from "firebase/firestore/lite";
import { v4 as uuidv4 } from "uuid";
import { Post } from "../../types";
import { firestore } from "../initialize";

const postsCollection = collection(firestore, "posts");

const getAll = async () => {
  try {
    const snapshot = await getDocs(postsCollection);
    const list = snapshot.docs.map((doc) => doc.data());
    return list;
  } catch (e) {
    console.error("Error fetching Posts", e);
  }
};

const create = async (post: Omit<Post, "id">) => {
  try {
    const docRef = await addDoc(postsCollection, {
      ...post,
      id: uuidv4(),
    });
    console.log("New Post created - DocumentID: ", docRef.id);
  } catch (e) {
    console.error("Error adding Post: ", e);
  }
};

export const posts = {
  getAll,
  create,
};
