import { firestore } from "./initialize";
import { collection, getDocs } from "firebase/firestore/lite";

const postsCol = collection(firestore, "posts");

async function getAll() {
  const snapshot = await getDocs(postsCol);
  const list = snapshot.docs.map((doc) => doc.data());
  return list;
}
export const posts = {
  getAll,
};
