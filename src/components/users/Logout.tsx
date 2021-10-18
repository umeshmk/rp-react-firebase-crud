import { Box, Button } from "@mui/material";
import { auth } from "../../firebase";

export function Logout() {
  const handleClick = () => {
    auth.logoutUser();
  };

  return (
    <Box>
      <Button variant="outlined" onClick={handleClick}>
        Logout
      </Button>
    </Box>
  );
}
