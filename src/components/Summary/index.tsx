import { Box, Grid } from "@material-ui/core";
import React from "react";
import { IGetReport } from "../../interface";
import HighMap from "../Chart/HighMap";
import LineChart from "../Chart/LineChart";

interface IProps {
  report?: IGetReport[];
  selectedCountryId?: string;
}

const Summary: React.FC<IProps> = ({ report, selectedCountryId }: IProps) => {
  const [mapData, setMapData] = React.useState<any>({});
  
  React.useEffect(() => {
    if (selectedCountryId) {
      console.log(selectedCountryId);
      
      import(
        `@highcharts/map-collection/countries/${selectedCountryId.toLowerCase()}/${selectedCountryId.toLowerCase()}-all.geo.json`
      ).then((res) => {
        setMapData(res);
      });
    }
  }, [selectedCountryId]);
  
  return (
    <Box>
      <Grid container spacing={3}>
        <Grid item sm={8} xs={12}>
          <LineChart data={report} />
        </Grid>
        <Grid item sm={4} xs={12}>
          <HighMap mapData={mapData} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Summary;
