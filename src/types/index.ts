import { User } from "@firebase/auth";

export type Post = {
  id: string;
  title: string;
  description: string;
};

export type LoginStatus = "checking" | true | false;
export type CurrentUserType = User | null;

export type UserEmailAndPassword = {
  email: string;
  password: string;
};
