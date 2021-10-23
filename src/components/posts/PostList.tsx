import { Grid } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { db } from "../../firebase";
import { Post } from "../../types";
import { CreatePost } from "./CreatePost";
import { Post as PostComponent } from "./Post";

export const PostList = () => {
  const [postList, setPostList] = useState<Post[]>([]);
  const [isInEditMode, setIsInEditMode] = useState<null | Post>();
  const isMounted = useRef(true);

  useEffect(() => {
    if (isMounted.current) {
      db.posts.get().then((data) => {
        if (data) setPostList(data);
      });
    }

    // Clean up method is a MUST
    // Else it will create many number of anonymous async request which will exhaust firestore usage quota
    return () => {
      isMounted.current = false;
    };
  }, []);

  const handleEditMode = (post: Post) => {
    setIsInEditMode(post);
  };

  // Handle = create, update, remove posts fron posts list
  const handleCreate = async (post: Post) => {
    let newPosts = [post, ...postList];
    await db.posts
      .update(newPosts)
      .then((success) => success && setPostList(newPosts));
  };
  const handleUpdate = async (updatedPost: Post) => {
    let newPosts = postList.map((post) =>
      post.id === updatedPost.id ? updatedPost : post
    );
    await db.posts.update(newPosts).then(() => setPostList(newPosts));
  };
  const handleRemove = (postId: string) => {
    let newPosts = postList.filter((post) => post.id !== postId);
    db.posts.update(newPosts).then(() => setPostList(newPosts));
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
