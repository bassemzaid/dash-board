import React from "react";
import {
  GridComponent,
  Sort,
  Filter,
  Page,
  Toolbar,
  Edit,
  Inject,
  ColumnsDirective,
  ColumnDirective,
  Selection,
} from "@syncfusion/ej2-react-grids";
import { Header } from "../component";
import { customersData, customersGrid } from "../data/dummy";
const Customer = () => {
  return (
    <div className="m-3 md:m-7 bg-white rounded-2xl p-2 md:p-7 mt-24">
      <Header cate="page" tit="Customers" />
      <GridComponent
        id="gridcomp"
        dataSource={customersData}
        toolbar={["Delete"]}
        width="auto"
        allowPaging
        allowSorting={true}
        editSettings={{ allowDeleting: true, allowEditing: true }}
      >
        <ColumnsDirective>
          {customersGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject services={[Page, Toolbar, Sort, Filter, Edit, Selection]} />
      </GridComponent>
    </div>
  );
};

export default Customer;
