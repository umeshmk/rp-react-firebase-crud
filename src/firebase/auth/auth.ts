import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { UserEmailAndPassword } from "../../types";
import { auth as authInit } from "../initialize";

// wrappers for login/logout/register

export function loginUser({ email, password }: UserEmailAndPassword) {
  return signInWithEmailAndPassword(authInit, email, password);
}

export function logoutUser() {
  return signOut(authInit);
}

export function registerUser({ email, password }: UserEmailAndPassword) {
  return createUserWithEmailAndPassword(authInit, email, password);
}
