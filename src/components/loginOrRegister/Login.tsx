import { Box } from "@mui/material";
import { useState } from "react";
import { auth } from "../../firebase";
import { UserEmailAndPassword } from "../../types";
import { Notification } from "../../utility";
import { Form } from "./Form";

export function Login() {
  const [error, setError] = useState({ msg: "" });

  const handleClick = ({ email, password }: UserEmailAndPassword) => {
    auth
      .loginUser({ email, password })
      .catch(({ code }) => setError({ msg: code }));
  };

  return (
    <>
      <Box>
        <Form afterSubmit={handleClick} onSubmitLabel="Login" />
      </Box>
      <Notification code={error} />
    </>
  );
}
