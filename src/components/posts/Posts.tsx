import { Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { db } from "../../firebase";
import { Post } from "../../types";
import { CreatePost } from "./CreatePost";

export const Posts = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    db.posts.getAll().then((posts) => setPosts(posts as []));
  }, []);

  return (
    <Grid container justifyContent="space-between" p={3}>
      <Grid
        item
        xs={12}
        lg={6}
        // border={1}
        borderRight={3}
        // mt={2}
        p={4}
        sx={{
          borderColor: "primary.light",
          // backgroundColor: "#fff",
        }}
      >
        <Typography variant="h4" color="primary.dark" py={3}>
          # Create New Post
        </Typography>
        <CreatePost />
      </Grid>
      <Grid item container xs={12} lg={6} p={4}>
        {posts.map((post) => (
          <Grid
            item
            xs={12}
            key={post.id}
            border={1}
            p={2}
            mt={2}
            sx={{ borderColor: "primary.main" }}
          >
            <Typography variant="h5" color="primary.dark">
              # {post.title}
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              mt={2}
              textAlign="justify"
            >
              {post.description}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};
