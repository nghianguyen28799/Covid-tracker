import React from "react";
import { Box, Typography } from "@material-ui/core";

const Footer: React.FC = () => {
  return (
    <Box display="flex" justifyContent="center" py={6}>
      <Typography component="span" variant="subtitle1">
        Designed By:
      </Typography>
      <Typography
        component="span"
        variant="subtitle1"
        style={{ marginLeft: 5, fontWeight: 600 }}
        color="primary"
      >
        NghiaNT28799
      </Typography>
    </Box>
  );
};

export default Footer;
