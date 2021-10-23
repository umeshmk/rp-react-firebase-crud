import { createUserWithEmailAndPassword } from "firebase/auth";
import { CurrentUserType, UserEmailAndPassword } from "../../types";
import { auth } from "../initialize";

type RegisterUser = ({
  email,
  password,
}: UserEmailAndPassword) => Promise<CurrentUserType>;

export const registerUser: RegisterUser = async function ({ email, password }) {
  try {
    let userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log("User status : Registered");
    return userCredential.user;
  } catch (error) {
    console.log(error);
    return null;
  }
};
