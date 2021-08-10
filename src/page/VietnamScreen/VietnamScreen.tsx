import React from "react";
import { Box, Grid, Typography } from "@material-ui/core";
import Highlight from "../../components/Highlight";
import { IDistributeVaccine, IGlobalReport, IReportVN } from "../../interface";
import moment from "moment";
import NavigatorComponent from "../../components/Navigator";
import lottie from "lottie-web";
import Summary from "../../components/SummaryVN";
import HighlightVaccine from "../../components/HighlightVaccine";
import CircularProgress from "@material-ui/core/CircularProgress";
import {
  getReportGlobal,
  getReportVaccineDistribution,
  getReportVN,
} from "../../api";
import VaccineTable from "../../components/Table/VaccineTable";
import HighLightDistribution from "../../components/HighlightDistribution";
import VaccineDistributionTable from "../../components/Table/VaccineDistributionTable";
import Footer from "../../components/Footer";
import ScrollToTop from "../../components/Scroll";

const VNScreen: React.FC = () => {
  const lottieRef = React.useRef<any>(null);
  const [reportVN, setReportVN] = React.useState<IReportVN>();
  const [reportVaccineDis, setReportVaccineDis] =
    React.useState<IDistributeVaccine>();
  const [highlightData, setHighlightData] = React.useState<IGlobalReport>();
  const [loading, setLoading] = React.useState<boolean>(true);

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
    getReportGlobal().then((res) => {
      const CountryData = res.data?.find(
        (item: IGlobalReport) => item?.country === "Vietnam"
      );
      setHighlightData(CountryData);
    });

    getReportVN().then((response) => {
      setReportVN(response.data);
    });

    getReportVaccineDistribution().then((response) => {
      setReportVaccineDis(response.data);
    });
  }, []);

  React.useEffect(() => {
    setTimeout(function () {
      setLoading(false);
    }, 2000);
  });
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
      {loading ? (
        <Box display="flex" justifyContent="center">
          <CircularProgress />
        </Box>
      ) : (
        <Box>
          <Typography>{moment().format("LLL")}</Typography>
          <Box
            display="flex"
            justifyContent="flex-end"
            alignItems="center"
            marginY={1}
          >
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
          <Box paddingY={4} display="flex" justifyContent="center">
            <Typography variant="h4" style={{ fontWeight: 600 }}>
              CA MẮC BỆNH
            </Typography>
          </Box>
          <Highlight data={highlightData} />
          <Summary report={reportVN} />
          <Box paddingY={4} display="flex" justifyContent="center">
            <Typography variant="h4" style={{ fontWeight: 600 }}>
              CHI TIẾT VACCINE
            </Typography>
          </Box>
          <HighlightVaccine />
          <Box mt={4}>
            <VaccineTable data={reportVaccineDis} />
          </Box>

          <Box paddingY={4} display="flex" justifyContent="center">
            <Typography variant="h4" style={{ fontWeight: 600 }}>
              PHÂN BỐ VACCINE
            </Typography>
          </Box>
          <HighLightDistribution data={reportVaccineDis?.totalDistribution} />
          <Box mt={4}>
            <VaccineDistributionTable data={reportVaccineDis} />
          </Box>
          <Footer />
        </Box>
      )}
      <ScrollToTop />
    </>
  );
};

export default VNScreen;
