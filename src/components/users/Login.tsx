import { Box } from "@mui/material";
import { Form, Fields } from "./Form";

export function Login() {
  const onLogin = ({ email, password }: Fields) => {
    console.log(email, password);
  };

  return (
    <Box>
      <Form afterSubmit={onLogin} onSubmitLabel="Login" />
    </Box>
  );
}
