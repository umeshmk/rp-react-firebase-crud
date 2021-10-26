import { Box, Button, Grid, TextField } from "@mui/material";
import {
  ChangeEventHandler,
  FormEventHandler,
  useEffect,
  useState,
} from "react";
import { UserEmailAndPassword } from "../../types";
import { useValidation } from "../../utility";

interface IProps {
  afterSubmit: (x: UserEmailAndPassword) => void;
  onSubmitLabel: "Register" | "Login";
}

// a form with username & password fields
// Use in login & register both

export function Form({ afterSubmit, onSubmitLabel }: IProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);

  const isEmailValid = useValidation("email", email);
  const isPasswordValid = useValidation("password", password);

  useEffect(() => {
    email && password && isEmailValid && isPasswordValid
      ? setIsFormValid(true)
      : setIsFormValid(false);
  });

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const el = e.target;
    if (el.id === "Email") setEmail(el.value);
    if (el.id === "Password") setPassword(el.value);
  };

  const handleSubmit: FormEventHandler = (e) => {
    e.preventDefault();

    // register or login
    isFormValid ? afterSubmit({ email, password }) : null;
  };

  return (
    <Box
      component="form"
      border={1}
      borderColor="primary.light"
      p={5}
      onSubmit={handleSubmit}
    >
      <Grid container spacing={1.5}>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Email"
            id="Email"
            value={email}
            onChange={handleChange}
            error={email ? !isEmailValid : false}
            helperText={
              email && !isEmailValid ? "Invalid email eddress." : false
            }
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            type="password"
            label="Password"
            id="Password"
            value={password}
            onChange={handleChange}
            error={password ? !isPasswordValid : false}
            helperText={
              password && !isPasswordValid ? "Invalid password" : false
            }
          />
        </Grid>
        <Grid item xs={12} mt={2}>
          <Button
            fullWidth
            type="submit"
            variant="outlined"
            disabled={!isFormValid}
          >
            {onSubmitLabel}
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}
