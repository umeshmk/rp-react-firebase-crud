import { Grid } from "@mui/material";
import ReactLoading from "react-loading";

export function LoadingIcon() {
  return (
    <Grid
      container
      direction="column"
      spacing={5}
      justifyContent="center"
      alignContent="center"
      height="500px"
    >
      <Grid item>
        <ReactLoading type="spin" color="#333" height={50} width={50} />
      </Grid>
    </Grid>
  );
}
