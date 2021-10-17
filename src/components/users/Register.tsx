import { Box } from "@mui/material";
import { Form, Fields } from "./Form";

export function Register() {
  const onRegister = ({ email, password }: Fields) => {
    console.log(email, password);
  };

  return (
    <Box>
      <Form afterSubmit={onRegister} onSubmitLabel="Register" />
    </Box>
  );
}
