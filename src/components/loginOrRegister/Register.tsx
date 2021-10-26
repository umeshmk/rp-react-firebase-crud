import { Box } from "@mui/material";
import { useState } from "react";
import { auth, db } from "../../firebase";
import { UserEmailAndPassword } from "../../types";
import { Notification } from "../../utility";
import { Form } from "./Form";

// register form

export function Register() {
  const [error, setError] = useState({ msg: "" });

  async function handleClick({ email, password }: UserEmailAndPassword) {
    await auth
      .registerUser({ email, password })
      .catch(({ code }) => setError({ msg: code }))
      .then((userCredential) => {
        let email = userCredential?.user?.email;
        if (email) {
          db.user.createNewDoc(email);
        }
      });
  }

  return (
    <>
      <Box>
        <Form afterSubmit={handleClick} onSubmitLabel="Register" />
      </Box>
      <Notification code={error} />
    </>
  );
}
