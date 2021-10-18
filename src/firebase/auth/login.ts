import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { UserEmailAndPassword } from "../../types";
import { auth } from "../initialize";

export function loginUser({ email, password }: UserEmailAndPassword) {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log("User status : Loggedin");
    })
    .catch((error) => {
      console.log("xxxx Login error xxxx");
      console.log(error);
    });
}

export function logoutUser() {
  signOut(auth);
  console.log("User status : LoggedOut");
}
