import React from "react";
import {
  ChartComponent,
  DateTime,
  Inject,
  Legend,
  SplineAreaSeries,
  SeriesCollectionDirective,
  SeriesDirective,
  Tooltip,
} from "@syncfusion/ej2-react-charts";
import {
  areaCustomSeries,
  areaPrimaryXAxis,
  areaPrimaryYAxis,
} from "../../data/dummy";
import { useStateContext } from "../../context/ContextStore";
import { Header } from "../../component";
const Area = () => {
  const { currentMode } = useStateContext();

  return (
    <div className="m-3 md:m-7 bg-white rounded-2xl p-2 md:p-7">
      <Header cate="Area" tit="Inflation Rate In Percentage" />{" "}
      <ChartComponent
        id="area-chart"
        height="450px"
        primaryXAxis={areaPrimaryXAxis}
        primaryYAxis={areaPrimaryYAxis}
        chartArea={{ border: { width: 0 } }}
        tooltip={{ enable: true }}
        background={currentMode === "Dark" ? "#33373E" : "#fff"}
      >
        <SeriesCollectionDirective>
          {areaCustomSeries.map((el, index) => (
            <SeriesDirective key={index} {...el} />
          ))}
        </SeriesCollectionDirective>
        <Inject services={[Legend, Tooltip, SplineAreaSeries, DateTime]} />
      </ChartComponent>
    </div>
  );
};

export default Area;
