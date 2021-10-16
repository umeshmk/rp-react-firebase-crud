import { Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { Post } from "../types";
import { db } from "./../firebase";

const Posts = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    (async () => {
      let arr = await db.posts.getAll();
      setPosts(arr as []);
    })();
  }, []);

  return (
    <Grid container mt={10}>
      {posts.map((post) => (
        <Grid
          item
          xs={12}
          key={post.id}
          border={1}
          p={2}
          mt={2}
          sx={{ borderColor: "text.secondary" }}
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
  );
};

export default Posts;
