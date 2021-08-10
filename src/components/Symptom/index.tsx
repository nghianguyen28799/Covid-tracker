import React from "react";
import {
  Box,
  Grid,
  Typography,
  makeStyles,
} from "@material-ui/core";
import Symptom01 from "../../config/images/symp-a.png";
import Symptom02 from "../../config/images/symp-b.png";
import Symptom03 from "../../config/images/symp-c.png";
import Symptom04 from "../../config/images/symp-d.png";
import Symptom05 from "../../config/images/symp-e.png";
import Symptom06 from "../../config/images/symp-f.png";

const useStyles = makeStyles({
  title: {
    margin: "60px 0",
  },
  image: {
    width: 160,
    height: 140,
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

const Symptom: React.FC = () => {
  const styles = useStyles();
  return (
    <Box py={3} display="flex" flexDirection="column" alignItems="center">
      <Typography variant="h3" className={styles.title}>
        TRIỆU CHỨNG
      </Typography>
      <Grid container spacing={1}>
        <Grid item sm={4} xs={6} className={styles.gridArea}>
          <Box className={styles.gridItem}>
            <img src={Symptom01} alt="" className={styles.image} />
            <Typography variant="h6" color="primary">
              Dry Cough
            </Typography>
          </Box>
        </Grid>
        <Grid item sm={4} xs={6} className={styles.gridArea}>
          <Box className={styles.gridItem}>
            <img src={Symptom02} alt="" className={styles.image} />
            <Typography variant="h6" color="primary">
              Sore Throat
            </Typography>
          </Box>
        </Grid>
        <Grid item sm={4} xs={6} className={styles.gridArea}>
          <Box className={styles.gridItem}>
            <img src={Symptom03} alt="" className={styles.image} />
            <Typography variant="h6" color="primary">
              Cold
            </Typography>
          </Box>
        </Grid>
        <Grid item sm={4} xs={6} className={styles.gridArea}>
          <Box className={styles.gridItem}>
            <img src={Symptom04} alt="" className={styles.image} />
            <Typography variant="h6" color="primary">
              Fever
            </Typography>
          </Box>
        </Grid>
        <Grid item sm={4} xs={6} className={styles.gridArea}>
          <Box className={styles.gridItem}>
            <img src={Symptom05} alt="" className={styles.image} />
            <Typography variant="h6" color="primary">
              Headache
            </Typography>
          </Box>
        </Grid>
        <Grid item sm={4} xs={6} className={styles.gridArea}>
          <Box className={styles.gridItem}>
            <img src={Symptom06} alt="" className={styles.image} />
            <Typography variant="h6" color="primary">
              Vomiting
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Symptom;
