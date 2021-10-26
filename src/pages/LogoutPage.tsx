import { Box, Button } from "@mui/material";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../firebase";
import { LoadingIcon, useTitleEffect } from "../utility";

export function LogoutPage() {
  const [loading, setLoading] = useState(true);

  useTitleEffect("Logout");

  useEffect(() => {
    (async () => {})();
    auth.logoutUser().then(() => {
      setLoading(false);
    });
  }, []);

  return (
    <Box textAlign="center" p={{ xs: 10, lg: 20 }}>
      {loading && <LoadingIcon />}
      "You are successfully Logged out."
      <Box>
        <Button component={Link} to="/login">
          Login
        </Button>
      </Box>
    </Box>
  );
}
