import React from "react";
import { Header } from "../component";
import {
  KanbanComponent,
  ColumnsDirective,
  ColumnDirective,
} from "@syncfusion/ej2-react-kanban";
import { kanbanData, kanbanGrid } from "../data/dummy";

const Kanban = () => {
  return (
    <div className="m-3 md:m-7 bg-white rounded-2xl p-2 md:p-7">
      <Header cate="App" tit="Kanban" />
      <KanbanComponent
        dataSource={kanbanData}
        id="kanban"
        cardSettings={{ contentField: "Summary", headerField: "Id" }}
        keyField="Status"
      >
        <ColumnsDirective>
          {kanbanGrid.map((el, index) => (
            <ColumnDirective key={index} {...el} />
          ))}
        </ColumnsDirective>
      </KanbanComponent>
    </div>
  );
};

export default Kanban;
