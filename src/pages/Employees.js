import React from "react";
import {
  GridComponent,
  Page,
  Inject,
  ColumnsDirective,
  ColumnDirective,
  Search,
  Toolbar,
} from "@syncfusion/ej2-react-grids";
import { Header } from "../component";
import { employeesData, employeesGrid } from "../data/dummy";
const Employees = () => {
  return (
    <div className="m-3 md:m-7 bg-white rounded-2xl p-2 md:p-7 mt-24">
      <Header cate="page" tit="Employees" />
      <GridComponent
        id="gridcomp"
        dataSource={employeesData}
        toolbar={["Search"]}
        width="auto"
        allowPaging
        allowSorting={true}
      >
        <ColumnsDirective>
          {employeesGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject services={[Page, Search, Toolbar]} />
      </GridComponent>
    </div>
  );
};

export default Employees;
