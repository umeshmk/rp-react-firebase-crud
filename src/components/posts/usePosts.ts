import { useEffect, useRef, useState } from "react";
import { db } from "../../firebase";
import { Post } from "../../types";

// Hook - create / update / remove post in postlist array

export const usePosts = () => {
  const [postList, setPostList] = useState<Post[]>([]);
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

  // Handle = create, update, remove posts fron posts list
  const handleCreate = async (addPost: Post) => {
    let newPosts = [addPost, ...postList];
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

  return { postList, handleCreate, handleRemove, handleUpdate };
};
