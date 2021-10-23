import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { Box, Grid, Typography } from "@mui/material";
import { Post as PostType } from "../../types";

interface IProps {
  post: PostType;
  handleEditMode: (post: PostType) => void;
  handleRemove: (postId: string) => void;
}

export const Post = ({ post, handleEditMode, handleRemove }: IProps) => {
  const { id, title, description } = post;

  return (
    <Grid
      item
      xs={12}
      key={id}
      border={1}
      p={2}
      mt={2}
      sx={{
        // backgroundColor: "background.paper",
        borderColor: "primary.main",
        "&:hover .MuiBox-root": {
          display: "block",
          "&:hover": {
            color: "red",
            cursor: "pointer",
          },
        },
      }}
      position="relative"
    >
      <Typography variant="h5" color="primary.dark">
        # {title}
      </Typography>
      <Box
        display="none"
        position="absolute"
        top="0"
        right="30px"
        m={2}
        onClick={() => handleEditMode(post)}
      >
        <EditIcon fontSize="small" />
      </Box>
      <Box
        display="none"
        position="absolute"
        top="0"
        right="0"
        m={2}
        onClick={() => handleRemove(id)}
      >
        <DeleteIcon fontSize="small" />
      </Box>

      <Typography
        variant="body1"
        color="text.secondary"
        mt={2}
        textAlign="justify"
      >
        {description}
      </Typography>
    </Grid>
  );
};
