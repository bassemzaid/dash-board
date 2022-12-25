import React from "react";
import {
  GridComponent,
  Resize,
  Sort,
  ContextMenu,
  Filter,
  Page,
  ExcelExport,
  PdfExport,
  Edit,
  Inject,
  ColumnsDirective,
  ColumnDirective,
  Group,
} from "@syncfusion/ej2-react-grids";
import { Header } from "../component";
import { ordersData, ordersGrid } from "../data/dummy";

const Order = () => {
  return (
    <div className="m-3 md:m-8 bg-white rounded-2xl p-2 md:p-7  mt-24">
      <Header cate="page" tit="Orders" />
      <GridComponent
        id="gridcomp"
        dataSource={ordersData}
        allowPaging
        allowSorting={true}
        loadingIndicator={{ indicatorType: "Shimmer" }}
      >
        <ColumnsDirective>
          {ordersGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject
          services={[
            Resize,
            Sort,
            ContextMenu,
            Filter,
            Page,
            ExcelExport,
            Edit,
            PdfExport,
            Group,
          ]}
        />
      </GridComponent>
    </div>
  );
};

export default Order;
