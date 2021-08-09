import React from "react";
import {
  Box,
  Grid,
  Typography,
  makeStyles,
} from "@material-ui/core";
import Prevent01 from "../../config/images/prevent01.png";
import Prevent02 from "../../config/images/prevent02.png";
import Prevent03 from "../../config/images/prevent03.png";
import Prevent04 from "../../config/images/prevent04.png";
import Prevent05 from "../../config/images/prevent05.png";
import Prevent06 from "../../config/images/prevent06.png";

const useStyles = makeStyles({
  title: {
    margin: "60px 0",
  },
  image: {
    width: 90,
    height: 90,
    marginBottom: 10,
  },
  issue: {
    marginBottom: 10,
  },
  paragraph: {
    marginBottom: 10,
    lineHeight: 1.5,
    fontWeight: 600,
    color: "#3e3e3ec2",
  },
  gridArea: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  gridItem: {
    width: "100%",
    padding: 8,
    background: "#e1e0e6",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
});

const Prevent: React.FC = () => {
  const styles = useStyles();
  return (
    <Box py={3} display="flex" flexDirection="column" alignItems="center">
      <Typography variant="h3" className={styles.title}>
        TRIỆU CHỨNG
      </Typography>
      <Grid container spacing={1}>
        <Grid item sm={4} xs={6} className={styles.gridArea}>
          <Box className={styles.gridItem}>
            <img src={Prevent01} alt="" className={styles.image} />
            <Typography variant="h6" color="primary">
              Wear A Mask
            </Typography>
          </Box>
        </Grid>
        <Grid item sm={4} xs={6} className={styles.gridArea}>
          <Box className={styles.gridItem}>
            <img src={Prevent02} alt="" className={styles.image} />
            <Typography variant="h6" color="primary">
              Wash Your Hand
            </Typography>
          </Box>
        </Grid>
        <Grid item sm={4} xs={6} className={styles.gridArea}>
          <Box className={styles.gridItem}>
            <img src={Prevent03} alt="" className={styles.image} />
            <Typography variant="h6" color="primary">
              Consult Doctor
            </Typography>
          </Box>
        </Grid>
        <Grid item sm={4} xs={6} className={styles.gridArea}>
          <Box className={styles.gridItem}>
            <img src={Prevent04} alt="" className={styles.image} />
            <Typography variant="h6" color="primary">
              Avoid Touch
            </Typography>
          </Box>
        </Grid>
        <Grid item sm={4} xs={6} className={styles.gridArea}>
          <Box className={styles.gridItem}>
            <img src={Prevent05} alt="" className={styles.image} />
            <Typography variant="h6" color="primary">
              Avoid Contact
            </Typography>
          </Box>
        </Grid>
        <Grid item sm={4} xs={6} className={styles.gridArea}>
          <Box className={styles.gridItem}>
            <img src={Prevent06} alt="" className={styles.image} />
            <Typography variant="h6" color="primary">
              Clean Everyday
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Prevent;
