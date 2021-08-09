import { Card, CardContent, makeStyles, Typography } from "@material-ui/core";
import React from "react";

interface IProps {
  title?: string;
  count?: number;
  type?: string;
  countToday?: number;
  dateLater?: string;
}

const useStyles = makeStyles({
  wrapper: (props: { type?: string }) => {
    if (props.type === "confirmed") return { borderLeft: "5px solid #c9302c" };
    else if (props.type === "active")
      return { borderLeft: "5px solid #ff9c00" };
    else if (props.type === "recovered")
      return { borderLeft: "5px solid #28a745" };
    else return { borderLeft: "5px solid gray" };
  },
  title: {
    fontSize: 18,
  },
  count: {
    fontWeight: "bold",
    fontSize: 20,
    margin: "5px 0",
  },
  countToday: (props: { type?: string }) => {
    if (props.type === "confirmed")
      return {
        fontWeight: "bold",
        fontSize: 16,
        color: "#c9302c",
      };
    else if (props.type === "recovered")
      return { fontWeight: "bold", fontSize: 16, color: "#28a745" };
    else return { fontWeight: "bold", fontSize: 16, color: "gray" };
  },

  countTodayOpacity: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#c9302c",
    opacity: 0,
    cursor: "context-menu",
  },
});

const HighlightCard: React.FC<IProps> = ({
  title,
  count,
  type,
  countToday,
}: IProps) => {
  const styles = useStyles({ type: type });

  return (
    <Card>
      <CardContent className={styles.wrapper}>
        <Typography component="p" variant="body2" className={styles.title}>
          {title?.toLocaleString()}
        </Typography>
        <Typography component="p" variant="body2" className={styles.count}>
          {count?.toLocaleString()}
        </Typography>
        <Typography
          component="p"
          variant="body2"
          className={
            type !== "active" ? styles.countToday : styles.countTodayOpacity
          }
        >
          + {countToday?.toLocaleString()}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default HighlightCard;
