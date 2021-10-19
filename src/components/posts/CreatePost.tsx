import { Box, Grid } from "@mui/material";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import React, { FormEventHandler, useState } from "react";
import { db } from "../../firebase";

export function CreatePost() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const isFormValid = title && description;

  const handleSubmit: FormEventHandler = (e) => {
    e.preventDefault();

    if (!isFormValid) return;

    db.posts
      .create({
        title,
        description,
      })
      .then(() => {
        setTitle("");
        setDescription("");
      });
  };

  return (
    <>
      <Box component="form" onSubmit={handleSubmit}>
        <Grid container spacing={1.5}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              id="title"
              label="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              id="description"
              label="Description"
              multiline
              rows={6}
              variant="filled"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} mt={2}>
            <Button
              fullWidth
              type="submit"
              size="large"
              variant="contained"
              color="primary"
              disabled={!isFormValid}
            >
              Create Post
            </Button>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
