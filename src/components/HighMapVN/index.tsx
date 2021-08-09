import React from "react";
import * as Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import hightchartsMap from "highcharts/modules/map";
import { IReportVN } from "../../interface";

interface IProps {
  mapData?: any;
  report?: IReportVN;
}

interface IFeature {
  type?: string;
  id?: string;
  properties?: any;
  geometry?: any;
}
// load highcharts modules
hightchartsMap(Highcharts);

const initOptions = {
  chart: {
    height: "500",
  },
  title: {
    text: null,
  },
  mapNavigation: {
    enabled: true,
  },
  colorAxis: {
    min: 0,
    stops: [
      [0, "#ffc4aa6e"],
      [0.005, "#FFC4AA"],
      [0.01, "#FF8A66"],
      [0.1, "#FF392B"],
      [0.2, "#B71525"],
      [0.3, "	#7A0826"],
      [1, "#420817"],
    ],
  },
  legend: {
    layout: "vertical",
    align: "right",
    verticalAlign: "bottom",
  },
  series: [
    {
      name: "Số ca nhiễm",
      joinBy: ["hc-key", "key"],
    },
  ],
};

const HighMap: React.FC<IProps> = ({ mapData, report }: IProps) => {
  const [options, setOptions] = React.useState<any>();
  const chartRef = React.useRef<any>(null);
  const [configLoaded, setConfigLoaded] = React.useState(false);
  const [data, setData] = React.useState<{ case: string }[]>();
  const [rows, setRows] = React.useState<any>();

  React.useEffect(() => {
    const detail = report?.detail;
    const rows = detail && Object.entries(detail);
    setRows(rows);
  }, [report?.detail]);
  
  React.useEffect(() => {
    const findDistrict = (name: string) => {
      const detail = report?.detail;
      const rows = detail && Object.entries(detail);
      const find = rows?.find((item: any) => item[1]?.name === name);
      return find[1].cases;
    };
    if (rows?.length === 63) {
      setData(
        rows && [
          { case: 0 },
          { case: findDistrict("Quảng Ninh") },
          { case: findDistrict("Khánh Hòa") },
          { case: findDistrict("Tiền Giang") },
          { case: findDistrict("Bà Rịa - Vũng Tàu") },
          { case: findDistrict("Bình Thuận") },
          { case: findDistrict("Hồ Chí Minh") },
          { case: findDistrict("Bến Tre") },
          { case: findDistrict("Sóc Trăng") },
          { case: findDistrict("Phú Thọ") },
          { case: findDistrict("Yên Bái") },
          { case: findDistrict("Hải Dương") },
          { case: findDistrict("Bắc Ninh") },
          { case: findDistrict("Hưng Yên") },
          { case: findDistrict("Ninh Bình") },
          { case: findDistrict("Hà Nam") },
          { case: findDistrict("Hòa Bình") },
          { case: findDistrict("Vĩnh Phúc") },
          { case: findDistrict("Hà Nội") },
          { case: findDistrict("Bắc Giang") },
          { case: findDistrict("Thái Bình") },
          { case: findDistrict("Lâm Đồng") },
          { case: findDistrict("Bình Phước") },
          { case: findDistrict("Phú Yên") },
          { case: findDistrict("Bình Định") },
          { case: findDistrict("Gia Lai") },
          { case: findDistrict("Quảng Ngãi") },
          { case: findDistrict("Đồng Nai") },
          { case: findDistrict("Đồng Tháp") },
          { case: findDistrict("Long An") },
          { case: findDistrict("Hải Dương") },
          { case: findDistrict("Hậu Giang") },
          { case: findDistrict("Bạc Liêu") },
          { case: findDistrict("Vĩnh Long") },
          { case: findDistrict("Tây Ninh") },
          { case: findDistrict("Thái Nguyên") },
          { case: findDistrict("Lai Châu") },
          { case: findDistrict("Sơn La") },
          { case: findDistrict("Hà Giang") },
          { case: findDistrict("Nam Định") },
          { case: findDistrict("Hà Tĩnh") },
          { case: findDistrict("Nghệ An") },
          { case: findDistrict("Quảng Bình") },
          { case: findDistrict("Đắk Lắk") },
          { case: findDistrict("Ninh Thuận") },
          { case: findDistrict("Đắk Nông") },
          { case: findDistrict("Kon Tum") },
          { case: findDistrict("Quảng Nam") },
          { case: findDistrict("Quảng Trị") },
          { case: findDistrict("Thừa Thiên – Huế") },
          { case: findDistrict("Đà Nẵng") },
          { case: findDistrict("An Giang") },
          { case: findDistrict("Cà Mau") },
          { case: findDistrict("Trà Vinh") },
          { case: findDistrict("Cao Bằng") },
          { case: findDistrict("Kiên Giang") },
          { case: findDistrict("Lào Cai") },
          { case: findDistrict("Điện Biên") },
          { case: findDistrict("Lạng Sơn") },
          { case: findDistrict("Thanh Hóa") },
          { case: findDistrict("Bắc Kạn") },
          { case: findDistrict("Tuyên Quang") },
          { case: findDistrict("Bình Dương") },
          { case: findDistrict("Cần Thơ") },
        ]
      );
    }
  }, [report?.detail, rows]);

  React.useEffect(() => {
    if (mapData && Object.keys(mapData).length) {
      const fakeData = mapData?.features?.map(
        (feature: IFeature, index: number) => ({
          key: feature?.properties["hc-key"],
          value: data && Number(data[index]?.case),
        })
      );
      setOptions({
        ...initOptions,
        series: [
          {
            ...initOptions?.series[0],
            mapData: mapData,
            data: fakeData,
          },
        ],
      });
      if (!configLoaded) setConfigLoaded(true);
    }
  }, [mapData, configLoaded, data]);

  React.useEffect(() => {
    if (chartRef && chartRef.current) {
      chartRef.current.chart?.series[0].update({
        mapData,
      });
    }
  }, [mapData]);

  if (!configLoaded) return null;
  if (
    !options?.series[0].mapData &&
    !Object.keys(options?.series[0].mapData).length
  ) {
    return null;
  }

  return (
    <HighchartsReact
      highcharts={Highcharts}
      options={options}
      constructorType="mapChart"
      ref={chartRef}
    />
  );
};

export default HighMap;
