import React from "react";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!

export default class MyCalendar extends React.Component {
  render() {
    document.title = "Taskemon | Calendar";
    return <FullCalendar plugins={[dayGridPlugin]} initialView="dayGridMonth" />;
  }
}
