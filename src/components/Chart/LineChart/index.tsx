import { Box, ButtonGroup, Button } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import * as Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import moment from "moment";
import { IGetReport } from "../../../interface";

interface IProps {
  data?: IGetReport[];
}

const generateOptions = (data: IGetReport[]) => {
  const categories = data?.map((item: IGetReport) =>
    moment(item.Date).format("DD/MM/YYYY")
  );
  return {
    chart: {
      height: 500,
    },
    title: {
      text: "Tổng ca nhiễm",
    },
    xAxis: {
      categories: categories,
      crosshair: true,
    },
    colors: ["#F3585B"],
    yAxis: {
      min: 0,
      title: {
        text: null,
      },
      labels: {
        align: "right",
      },
    },
    tooltip: {
      headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
      pointFormat:
        '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
        '<td style="padding:0"><b>{point.y} ca</b></td></tr>',
      footerFormat: "</table>",
      shared: true,
      useHTML: true,
    },
    plotOptions: {
      column: {
        pointPadding: 0.2,
        borderWidth: 0,
      },
    },
    series: [
      {
        name: "Tổng Ca nhiễm",
        data: data?.map((item: IGetReport) => item.Confirmed),
      },
    ],
  };
};

const LineChart: React.FC<IProps> = ({ data }: IProps) => {
  const [options, setOptions] = useState<any>({});
  const [reportType, setReportType] = useState<number>(-1);

  useEffect(() => {
    if (data) {
      const customData: IGetReport[] =
        reportType > 0 ? data?.slice(data.length - Number(reportType)) : data;

      setOptions(generateOptions(customData));
    }
  }, [data, reportType]);

  return (
    <Box>
      <ButtonGroup
        size="small"
        style={{ display: "flex", justifyContent: "flex-end" }}
      >
        <Button
          onClick={() => setReportType(-1)}
          color={reportType === -1 ? "secondary" : "default"}
        >
          Tất cả
        </Button>
        <Button
          onClick={() => setReportType(30)}
          color={reportType === 30 ? "secondary" : "default"}
        >
          30 ngày
        </Button>
        <Button
          onClick={() => setReportType(7)}
          color={reportType === 7 ? "secondary" : "default"}
        >
          7 ngày
        </Button>
      </ButtonGroup>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </Box>
  );
};

export default LineChart;
