import { Grid, Typography } from "@mui/material";
import { useState } from "react";
import { Post } from "../../types";
import { CreatePost } from "./CreatePost";
import { Post as PostComponent } from "./Post";
import { usePosts } from "./usePosts";

// Show postlist & create new Post form

export const PostList = () => {
  const { postList, handleCreate, handleRemove, handleUpdate } = usePosts();
  const [isInEditMode, setIsInEditMode] = useState<null | Post>();

  const handleEditMode = (post: Post) => {
    setIsInEditMode(post);
  };

  const handleStopEditMode = () => {
    setIsInEditMode(null);
  };

  return (
    <Grid container justifyContent="space-between" p={3}>
      <Grid
        item
        xs={12}
        lg={6}
        borderRight={{ xs: 0, lg: 4 }}
        p={{ xs: 0, lg: 4 }}
        sx={{
          "&": {
            borderColor: "primary.light",
          },
        }}
      >
        <CreatePost
          editPost={isInEditMode}
          handleStopEditMode={handleStopEditMode}
          handleCreate={handleCreate}
          handleUpdate={handleUpdate}
        />
      </Grid>
      <Grid item container xs={12} lg={6} p={{ xs: 1, lg: 4 }}>
        <Typography variant="h4" color="primary.dark" py={3}>
          # Posts
        </Typography>
        {postList.map((post) => (
          <PostComponent
            post={post}
            inEditMode={post.id === isInEditMode?.id}
            handleEditMode={() => handleEditMode(post)}
            handleRemove={handleRemove}
            key={post.id}
          />
        ))}
      </Grid>
    </Grid>
  );
};
