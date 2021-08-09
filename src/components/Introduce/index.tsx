import React from "react";
import {
  Box,
  Grid,
  Typography,
  makeStyles,
} from "@material-ui/core";
import Covid19Image from "../../config/images/3d-covid-19.jpg";

const useStyles = makeStyles({
  title: {
    margin: "60px 0",
  },
  image: {
    width: "100%",
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
});

const Introduce: React.FC = () => {
  const styles = useStyles();
  return (
    <Box py={3} display="flex" flexDirection="column" alignItems="center">
      <Typography variant="h3" className={styles.title}>
        GIỚI THIỆU
      </Typography>
      <Grid container spacing={4}>
        <Grid item sm={6} xs={12}>
          <img src={Covid19Image} alt="" className={styles.image} />
        </Grid>
        <Grid item sm={6} xs={12}>
          <Typography component="p" variant="h4" className={styles.issue}>
            COVID-19 là gì? (Corona-Virus)
          </Typography>
          <Typography
            component="p"
            variant="subtitle1"
            color="inherit"
            className={styles.paragraph}
          >
            Virus Corona là chủng virus mới chưa từng xuất hiện ở người, có tên
            gọi từ nguồn gốc tiếng Latin. Vi rút Corona là chủng virus được bao
            bọc bằng những chiếc gai bao bọc bên ngoài, tương tác với thụ thể
            trên tế bào, theo cơ chế tương tự chìa khóa và ổ khóa, từ đó cho
            phép virus xâm nhập vào bên trong.
          </Typography>
          <Typography
            component="p"
            variant="subtitle1"
            className={styles.paragraph}
          >
            Tên gọi vi rút Corona có nguồn gốc từ tiếng Latin, trong đó “corona”
            có nghĩa là “vương miện” hoặc “hào quang”. Virus này có những chiếc
            gai bao bọc bên ngoài, chúng tương tác với thụ thể trên tế bào, theo
            cơ chế tương tự chìa khóa và ổ khóa, từ đó cho phép virus xâm nhập
            vào bên trong.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Introduce;
