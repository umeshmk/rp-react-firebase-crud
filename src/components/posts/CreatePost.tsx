import { Box, Grid, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { FormEventHandler, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Post } from "../../types";

interface IProps {
  editPost?: Post | null;
  handleCreate: (post: Post) => Promise<void>;
  handleUpdate: (post: Post) => Promise<void>;
}

// create / edit single post

export function CreatePost({ editPost, handleCreate, handleUpdate }: IProps) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (editPost) {
      setTitle(editPost.title);
      setDescription(editPost.description);
    }
  }, [editPost]);

  const isFormValid = title && description;

  const resetForm = () => {
    setTitle("");
    setDescription("");
  };

  const handleSubmit: FormEventHandler = (e) => {
    e.preventDefault();

    // if (!isFormValid) return;

    let post: Post = {
      id: editPost ? editPost.id : uuidv4().substring(0, 13),
      title,
      description,
    };

    if (editPost) {
      handleUpdate(post).then(() => {
        resetForm();
      });
    } else {
      handleCreate(post).then(() => {
        resetForm();
      });
    }
  };

  return (
    <>
      <Typography variant="h4" color="primary.dark" py={3}>
        {!editPost ? "# Create New Post" : "# Edit Post"}
        {editPost && (
          <Typography variant="body1" color="text.secondary">
            {editPost.id}
          </Typography>
        )}
      </Typography>

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
              {editPost ? "Edit Post" : "Create Post"}
            </Button>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
