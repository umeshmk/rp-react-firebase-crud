import { User } from "@firebase/auth";
import { FieldValue } from "firebase/firestore/lite";

// a single post
export type Post = {
  id: string;
  title: string;
  description: string;
};

// doc type created in firestore
export type UserDocument = {
  id: string; // uid
  email: string; // emailid
  posts: Post[];
  createdAt: FieldValue;
  lastUpdatedAt: FieldValue;
};

// auth related
export type LoginOrRegisterOption = "login" | "register";
export type LoginStatus = "checking" | true | false;
export type CurrentUserType = User | null;
export type UserEmailAndPassword = {
  email: string;
  password: string;
};
