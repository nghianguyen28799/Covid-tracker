import React from "react";
import * as Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import hightchartsMap from "highcharts/modules/map";

interface IProps {
  mapData?: any;
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
      [0.2, "#FFC4AA"],
      [0.4, "#FF8A66"],
      [0.6, "#FF392B"],
      [0.8, "#B71525"],
      [1, "	#7A0826"],
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

const HighMap: React.FC<IProps> = ({ mapData }: IProps) => {
  const [options, setOptions] = React.useState<any>();
  const chartRef = React.useRef<any>(null);
  const [configLoaded, setConfigLoaded] = React.useState(false);

  React.useEffect(() => {
    if (mapData && Object.keys(mapData).length) {
      const fakeData = mapData?.features?.map(
        (feature: IFeature, index: number) => ({
          key: feature?.properties["hc-key"],
          value: index,
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
  }, [mapData, configLoaded]);

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
