import React from "react";
import { Grid, Button } from "@material-ui/core";
import { useHistory, useRouteMatch } from "react-router";

const Navigator: React.FC = () => {
  const history = useHistory();
  let match = useRouteMatch();
  const path = match?.path;
  const onChangePage = (uri: string) => {
    history?.push(`/${uri}`);
  };

  return (
    <Grid container spacing={0}>
      <Grid item xs={6}>
        <Button
          variant={path === "/in-the-world" ? "contained" : "outlined"}
          color="secondary"
          fullWidth
          onClick={() => onChangePage("in-the-world")}
        >
          Thế giới
        </Button>
      </Grid>
      <Grid item xs={6}>
        <Button
          variant={path === "/vietnam" ? "contained" : "outlined"}
          color="secondary"
          fullWidth
          onClick={() => onChangePage("vietnam")}
        >
          Việt Nam
        </Button>
      </Grid>
    </Grid>
  );
};

export default Navigator;
