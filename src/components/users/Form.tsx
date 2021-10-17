import { Box, Button, Grid, TextField } from "@mui/material";
import { ChangeEventHandler, FormEventHandler, useState } from "react";

export type Fields = { email: string; password: string };

interface IProps {
  afterSubmit: (x: Fields) => void;
  onSubmitLabel: string;
}

export function Form({ afterSubmit, onSubmitLabel }: IProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    let el = e.target;
    if (el.id === "Email") setEmail(el.value);
    if (el.id === "Password") setPassword(el.value);
  };

  const handleSubmit: FormEventHandler = (e) => {
    e.preventDefault();

    // register or login
    afterSubmit({ email, password });
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
          />
        </Grid>
        <Grid item xs={12} mt={2}>
          <Button fullWidth type="submit" variant="outlined">
            {onSubmitLabel}
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}
