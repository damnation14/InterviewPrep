import React, { useState } from "react";

import Weekdays from "./Weekdays";
import { EventModal } from "./EventModal";

import "./googleCalender.css";

const GoogleCalendar = () => {
  const [showModalKey, setShowModalKey] = useState();
  const [events, setEvents] = useState({});

  return (
    <div className="container">
      <h1>Google Calendar</h1>
      <div className="calendar">
        <Weekdays
          setShowModalKey={setShowModalKey}
          events={events}
          setEvents={setEvents}
        />
      </div>
      {showModalKey && (
        <EventModal
          showModalKey={showModalKey}
          events={events}
          setEvents={setEvents}
          setShowModalKey={setShowModalKey}
        />
      )}
    </div>
  );
};

export default GoogleCalendar;
