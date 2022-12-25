import React from "react";
import {
  ScheduleComponent,
  Day,
  Week,
  WorkWeek,
  Agenda,
  Month,
  Inject,
  Resize,
  DragAndDrop,
} from "@syncfusion/ej2-react-schedule";
import { Header } from "../component";
import { scheduleData } from "../data/dummy";
const Calender = () => {
  return (
    <div className="m-3 md:m-7 bg-white rounded-2xl p-2 md:p-7">
      <Header cate="App" tit="Calender" />
      <ScheduleComponent
        height="600px"
        eventSettings={{ dataSource: scheduleData }}
        selectedDate={new Date(2021, 0, 8)}
      >
        <Inject
          services={[Day, Week, WorkWeek, Agenda, Month, Resize, DragAndDrop]}
        />
      </ScheduleComponent>
    </div>
  );
};

export default Calender;
