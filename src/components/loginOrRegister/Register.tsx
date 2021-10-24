import { Box } from "@mui/material";
import { auth, db } from "../../firebase";
import { UserEmailAndPassword } from "../../types";
import { Form } from "./Form";

export function Register() {
  async function handleClick({ email, password }: UserEmailAndPassword) {
    let user = await auth.register({ email, password });
    if (user?.email) await db.user.createNewDoc(user.email);
  }

  return (
    <Box>
      <Form afterSubmit={handleClick} onSubmitLabel="Register" />
    </Box>
  );
}
