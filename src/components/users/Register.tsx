import { Box } from "@mui/material";
import { auth } from "../../firebase";
import { UserEmailAndPassword } from "../../types";
import { Form } from "./Form";

export function Register() {
  const handleClick = ({ email, password }: UserEmailAndPassword) => {
    auth.register({ email, password });
  };

  return (
    <Box>
      <Form afterSubmit={handleClick} onSubmitLabel="Register" />
    </Box>
  );
}
