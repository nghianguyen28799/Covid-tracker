import { Grid } from "@material-ui/core";
import React from "react";
import { getReportVaccine } from "../../api";
import { IDataDailyVaccine } from "../../interface";
import HighlightCard from "./HighlightCard";

const Highlight: React.FC = () => {
  const [latestData, setLatestData] = React.useState<IDataDailyVaccine>();

  React.useEffect(() => {
    getReportVaccine().then((response) => {
      const data = response.data;
      const index = data.data.length - 1;
      if (index) {
        setLatestData(data.data[index]);
      }
    });
  }, []);

  const summary = [
    {
      title: "Tổng số vaccine",
      count: latestData?.total_vaccinations,
      type: "total_vaccinations",
    },
    {
      title: "Đã tiêm vaccine",
      count: latestData?.people_vaccinated,
      type: "people_vaccinated",
    },
    {
      title: "Đã tiêm 2 lần",
      count: latestData?.people_fully_vaccinated,
      type: "people_fully_vaccinated",
    },
    {
      title: "Đã tiêm 1 lần",
      count: latestData?.daily_vaccinations,
      type: "daily_vaccinations",
    },
  ];

  return (
    <Grid container spacing={3} style={{ padding: "8px 0 " }}>
      {summary?.map((item, index) => {
        return (
          <Grid item sm={3} xs={12} key={index}>
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
