import { createUserWithEmailAndPassword } from "firebase/auth";
import { UserEmailAndPassword } from "../../types";
import { auth } from "../initialize";

export function registerUser({ email, password }: UserEmailAndPassword) {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log("User status : Registered");
    })
    .catch((error) => {
      console.log("xxxx Register error xxxx");
      console.log(error);
    });
}
