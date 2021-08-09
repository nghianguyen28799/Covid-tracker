import { Grid } from "@material-ui/core";
import React from "react";
import { ITotalDistribution } from "../../interface";
import HighlightCard from "./HighlightCard";

interface IProps {
  data?: ITotalDistribution;
}
const Highlight: React.FC<IProps> = ({ data }: IProps) => {
  const summary = [
    {
      title: "Tổng vaccine theo kế hoạch",
      count: data?.totalPlanned,
      type: "totalPlanned",
    },
    {
      title: "Tổng vaccine hiện có",
      count: data?.totalRealistic,
      type: "totalRealistic",
    },
    {
      title: "Tỉ lệ phân phối",
      count: data?.totalDistributedRate,
      type: "totalDistributedRate",
    },
  ];

  return (
    <Grid container spacing={3} style={{ padding: "8px 0 " }}>
      {summary?.map((item, index) => {
        return (
          <Grid item sm={4} xs={12} key={index}>
            <HighlightCard
              count={item?.count}
              title={item?.title}
              type={item?.type}
            />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default Highlight;
