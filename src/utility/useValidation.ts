import { useEffect, useState } from "react";
import isEmail from "validator/es/lib/isEmail";
import isLength from "validator/es/lib/isLength";

type Types = "email" | "password";

// check validation for register & login forms

export function useValidation(type: Types, value: string) {
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    if (value) {
      switch (type) {
        case "email":
          setIsValid(isEmail(value));
          break;

        case "password":
          setIsValid(isLength(value, { min: 6, max: 20 }));
          break;
      }
    } else {
    }
  }, [value]);

  return isValid;
}
