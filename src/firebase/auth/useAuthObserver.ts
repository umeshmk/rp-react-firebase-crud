import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";

import { CurrentUserType, LoginStatus } from "../../types";
import { auth } from "../initialize";

export function useAuthObserver() {
  const [currentUser, setCurrentUser] = useState<CurrentUserType>(null);
  const [loginStatus, setLoginStatus] = useState<LoginStatus>("checking");

  let unSubscribe: ReturnType<typeof onAuthStateChanged>;

  useEffect(() => {
    unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // signed in - https://firebase.google.com/docs/reference/js/firebase.User
        setCurrentUser(user);
        setLoginStatus(true);
      } else {
        // signed out
        setCurrentUser(null);
        setLoginStatus(false);
      }
    });

    return () => {
      unSubscribe();
    };
  }, []);

  return { currentUser, loginStatus };
}
