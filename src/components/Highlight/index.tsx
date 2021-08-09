import { Grid } from "@material-ui/core";
import React from "react";
import { IGlobalReport } from "../../interface";
import HighlightCard from "./HiglightCard";

interface IProps {
  data?: IGlobalReport;
}

const Highlight: React.FC<IProps> = ({ data }: IProps) => {
  const summary = [
    {
      title: "Số ca nhiễm",
      count: data?.cases,
      countToday: data?.todayCases,
      type: "confirmed",
    },
    {
      title: "Đang điều trị",
      count: data?.active,
      countToday: 0,
      type: "active",
    },
    {
      title: "Khỏi",
      count: data?.recovered,
      countToday: data?.todayRecovered,
      type: "recovered",
    },
    {
      title: "Tử vong",
      count: data?.deaths,
      countToday: data?.todayDeaths,
      type: "death",
    },
  ];

  return (
    <Grid container spacing={3} style={{ padding: "8px 0 " }}>
      {summary?.map((item, index) => {
        return (
          <Grid item sm={3} xs={12} key={index}>
            <HighlightCard
              count={item?.count}
              countToday={item?.countToday}
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
