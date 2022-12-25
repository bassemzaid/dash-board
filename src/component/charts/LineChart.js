import React from "react";
import {
  ChartComponent,
  DateTime,
  Inject,
  Legend,
  LineSeries,
  SeriesCollectionDirective,
  SeriesDirective,
  Tooltip,
} from "@syncfusion/ej2-react-charts";
import {
  lineCustomSeries,
  LinePrimaryXAxis,
  LinePrimaryYAxis,
} from "../../data/dummy";
import { useStateContext } from "../../context/ContextStore";
const LineChart = () => {
  const { currentMode } = useStateContext();

  return (
    <ChartComponent
      id="line-chart"
      height="450px"
      primaryXAxis={LinePrimaryXAxis}
      primaryYAxis={LinePrimaryYAxis}
      chartArea={{ border: { width: 0 } }}
      tooltip={{ enable: true }}
      background={currentMode === "Dark" ? "#33373E" : "#fff"}
    >
      <SeriesCollectionDirective>
        {lineCustomSeries.map((el, index) => (
          <SeriesDirective key={index} {...el} />
        ))}
      </SeriesCollectionDirective>
      <Inject services={[Legend, Tooltip, LineSeries, DateTime]} />
    </ChartComponent>
  );
};

export default LineChart;
