import { User } from "@firebase/auth";
import { FieldValue } from "firebase/firestore/lite";

export type Post = {
  id: string;
  title: string;
  description: string;
};

export type UserDocument = {
  id: string; // uid
  email: string; // emailid
  posts: Post[];
  createdAt: FieldValue;
  lastUpdatedAt: FieldValue;
};

export type LoginOrRegisterOption = "login" | "register";
export type LoginStatus = "checking" | true | false;
export type CurrentUserType = User | null;

export type UserEmailAndPassword = {
  email: string;
  password: string;
};
