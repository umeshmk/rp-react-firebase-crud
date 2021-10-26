import { Alert, Snackbar } from "@mui/material";
import { useEffect, useState } from "react";

// A Notification popup in bottom left corner of screen

// same msg in different {} will still trigger notification
// eg: wrong pass multiple times text msg is same always

interface IProps {
  code: { msg: string };
}

export function Notification({ code }: IProps) {
  const [open, setOpen] = useState(false);

  const show = () => setOpen(true);
  const hide = () => setOpen(false);

  useEffect(() => {
    if (code.msg) show();
  }, [code]);

  return (
    <>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={hide}
        // message={code.msg}
      >
        <Alert
          onClose={hide}
          elevation={6}
          variant="filled"
          severity="error"
          sx={{ width: "100%" }}
        >
          {code.msg}
        </Alert>
      </Snackbar>
    </>
  );
}
