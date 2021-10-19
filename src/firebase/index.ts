import { loginUser, logoutUser } from "./auth/login";
import { registerUser } from "./auth/register";
import { useAuthObserver } from "./auth/useAuthObserver";
import { posts } from "./firestore/posts";

export const auth = {
  register: registerUser,
  loginUser,
  useAuthObserver,
  logoutUser,
};

export const db = { posts };
