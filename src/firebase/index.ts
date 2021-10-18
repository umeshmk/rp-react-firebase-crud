// authentication
import { registerUser } from "./auth/register";
import { loginUser, logoutUser } from "./auth/login";
import { useAuthObserver } from "./auth/useAuthObserver";
export const auth = {
  register: registerUser,
  loginUser,
  useAuthObserver,
  logoutUser,
};

// collection
import { posts } from "./posts";
export const db = { posts };
