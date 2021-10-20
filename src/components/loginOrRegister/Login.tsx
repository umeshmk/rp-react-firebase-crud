import { Box } from "@mui/material";
import { auth } from "../../firebase";
import { UserEmailAndPassword } from "../../types";
import { Form } from "./Form";

export function Login() {
  const handleClick = ({ email, password }: UserEmailAndPassword) => {
    auth.loginUser({ email, password });
  };

  return (
    <Box>
      <Form afterSubmit={handleClick} onSubmitLabel="Login" />
    </Box>
  );
}
