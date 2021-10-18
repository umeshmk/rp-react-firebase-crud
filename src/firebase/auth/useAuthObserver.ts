import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { LoginStatus, CurrentUserType } from "../../types";
import { auth } from "../initialize";

export function useAuthObserver() {
  const [currentUser, setCurrentUser] = useState<CurrentUserType>(null);
  const [loginStatus, setLoginStatus] = useState<LoginStatus>("checking");

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in - https://firebase.google.com/docs/reference/js/firebase.User
        setCurrentUser(user);
        setLoginStatus(true);
      } else {
        // User is signed out
        setCurrentUser(null);
        setLoginStatus(false);
      }
    });
  });

  return { currentUser, loginStatus };
}
