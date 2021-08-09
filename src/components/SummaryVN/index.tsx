import { Box, Grid } from "@material-ui/core";
import React from "react";
import { IReportVN } from "../../interface";
import HighMap from "../HighMapVN";
import TableComponent from "../Table/CovidTable";

interface IProps {
  report?: IReportVN;
}

const Summary: React.FC<IProps> = ({ report }: IProps) => {
  const [mapData, setMapData] = React.useState<any>({});

  React.useEffect(() => {
    import(`@highcharts/map-collection/countries/vn/vn-all.geo.json`).then(
      (res) => {
        setMapData(res);
      }
    );
  }, []);
  
  return (
    <Box my={4}>
      <Grid container spacing={3}>
        <Grid item sm={8} xs={12}>
          <TableComponent data={report} />
        </Grid>
        <Grid item sm={4} xs={12}>
          <HighMap mapData={mapData} report={report} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Summary;
