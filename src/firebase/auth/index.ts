import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { UserEmailAndPassword } from "../../types";
import { auth as authInit } from "../initialize";
import { useAuthObserver } from "./useAuthObserver";

function loginUser({ email, password }: UserEmailAndPassword) {
  return signInWithEmailAndPassword(authInit, email, password);
}

function logoutUser() {
  return signOut(authInit);
}

function registerUser({ email, password }: UserEmailAndPassword) {
  return createUserWithEmailAndPassword(authInit, email, password);
}

export const auth = {
  registerUser,
  loginUser,
  logoutUser,
  useAuthObserver,
};
