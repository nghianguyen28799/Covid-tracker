import React from "react";
import CountrySelector from "../../components/CountrySelector";
import { Box, Grid, Typography } from "@material-ui/core";
import Summary from "../../components/Summary";
import Introduce from "../../components/Introduce";
import Symptom from "../../components/Symptom";
import Highlight from "../../components/Highlight";
import Prevent from "../../components/Symptom";
import moment from "moment";
import NavigatorComponent from "../../components/Navigator";
import lottie from "lottie-web";
import Footer from "../../components/Footer";
import { getCountries, getReportByCountry, getReportGlobal } from "../../api";
import { ICountry, IGetReport, IGlobalReport } from "../../interface";
// import { Container, createMuiTheme, ThemeProvider } from "@material-ui/core";

const WorldScreen: React.FC = () => {
  const lottieRef = React.useRef<any>(null);
  const [countries, setCountries] = React.useState<ICountry[]>([]);
  const [global, setGblobal] = React.useState<IGlobalReport[]>([]);
  const [selectedCountryId, setSelectedCountryId] =
    React.useState<string>("Vietnam");
  const [countryIdToChart, setCountryIdToChart] = React.useState<string>("");
  const [report, setReport] = React.useState<IGetReport[]>([]);
  const [highlightData, setHighlightData] = React.useState<IGlobalReport>();

  React.useEffect(() => {
    lottie.loadAnimation({
      container: lottieRef?.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../../config/json/3d-covid-19.json"),
    });
  }, []);

  React.useEffect(() => {
    getCountries().then((res) => {
      setCountries(res.data);
    });

    getReportGlobal().then((res) => {
      setGblobal(res?.data);
    });
  }, []);

  const handleOnChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCountryId(event?.target?.value);
  };

  React.useEffect(() => {
    if (selectedCountryId) {
      const CountryData = global?.find(
        (item) => item?.country === selectedCountryId
      );
      setHighlightData(CountryData);
      const dataToChart = countries?.find(
        (item) =>
          item?.Country?.replace(/\s/g, "")?.toUpperCase() ===
          CountryData?.country?.replace(/\s/g, "")?.toUpperCase()
      );
      setCountryIdToChart(dataToChart?.ISO2 || undefined || "");

      dataToChart?.Slug &&
        getReportByCountry(dataToChart?.Slug).then((res) => {
          res.data.pop();
          setReport(res.data);
        });
    }
  }, [countries, global, selectedCountryId]);
  return (
    <>
      <Grid container spacing={1}>
        <Grid item sm={6} xs={12}>
          <Box py={1} display="flex" flexDirection="row" alignItems="center">
            <Typography component="span" variant="h2">
              C
            </Typography>
            <div
              ref={lottieRef}
              style={{
                width: 130,
                marginLeft: -20,
                marginRight: -20,
              }}
            />
            <Typography component="span" variant="h2">
              VID-19
            </Typography>
          </Box>
        </Grid>
        <Grid
          item
          sm={6}
          xs={12}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            margin: "10px 0",
          }}
        >
          <NavigatorComponent />
        </Grid>
      </Grid>

      <Typography>{moment().format("LLL")}</Typography>
      <Grid container spacing={1}>
        <Grid item sm={6} xs={12}>
          <CountrySelector
            countries={global}
            handleOnChange={handleOnChange}
            value={selectedCountryId}
          />
        </Grid>
        <Grid item sm={6} xs={12}>
          <Box display="flex" justifyContent="flex-end" alignItems="center">
            <Typography component="span" variant="h6">
              Dân số:
            </Typography>
            <Typography
              component="span"
              variant="h5"
              style={{ marginLeft: 10, fontWeight: 600 }}
            >
              {highlightData?.population.toLocaleString()}
            </Typography>
          </Box>
        </Grid>
      </Grid>

      <Highlight data={highlightData} />
      <Summary report={report} selectedCountryId={countryIdToChart} />
      <Introduce />
      <Symptom />
      <Prevent />
      <Footer />
    </>
  );
};

export default WorldScreen;
