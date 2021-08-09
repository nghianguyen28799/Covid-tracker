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
    if (props.type === "totalPlanned")
      return { borderLeft: "5px solid #7d58cc" };
    else if (props.type === "totalRealistic")
      return { borderLeft: "5px solid #28a745" };
    else return { borderLeft: "5px solid #ce6634" };
  },
  title: {
    fontSize: 18,
  },
  count: {
    fontWeight: "bold",
    fontSize: 20,
    margin: "5px 0",
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
      </CardContent>
    </Card>
  );
};

export default HighlightCard;
