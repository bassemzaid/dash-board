import React from "react";
import { Header, LineChart } from "../../component";
const Line = () => {
  return (<div className="m-3 md:m-7 bg-white rounded-2xl p-2 md:p-7">
    <Header cate="Chart" tit="Inflation Rate" />
    <LineChart />
  </div>);

};

export default Line;
