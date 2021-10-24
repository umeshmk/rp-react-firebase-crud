import { User } from "@firebase/auth";
import { Timestamp } from "@firebase/firestore/dist/lite";

export type Post = {
  id: string;
  title: string;
  description: string;
};

export type UserDocument = {
  id: string; // uid
  email: string; // emailid
  posts: Post[];
  createdAt: Timestamp;
  lastUpdatedAt: Timestamp;
};

export type LoginStatus = "checking" | true | false;
export type CurrentUserType = User | null;

export type UserEmailAndPassword = {
  email: string;
  password: string;
};
