/* eslint-disable no-unused-vars */
import MyCalendar from "../components/calendar/MyCalendar";
import "../style/calendar-style.css";
import React from "react";

function Calendar() {
  return (
    <div className="calendar">
      <h1 className="title">Calendar</h1>
      <MyCalendar />
    </div>
  );
}

export default Calendar;
