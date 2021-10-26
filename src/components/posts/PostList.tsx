import { Grid } from "@mui/material";
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

  return (
    <Grid container justifyContent="space-between" p={3}>
      <Grid
        item
        xs={12}
        lg={6}
        borderRight={3}
        p={4}
        sx={{
          borderColor: "primary.light",
        }}
      >
        <CreatePost
          editPost={isInEditMode}
          handleCreate={handleCreate}
          handleUpdate={handleUpdate}
        />
      </Grid>
      <Grid item container xs={12} lg={6} p={4}>
        {postList.map((post) => (
          <PostComponent
            post={post}
            handleEditMode={() => handleEditMode(post)}
            handleRemove={handleRemove}
            key={post.id}
          />
        ))}
      </Grid>
    </Grid>
  );
};
