import React, { useState } from "react";

const makeKey = (day, hour) => `${day}-${hour}`;

const Weekday = ({ setShowModalKey, events, setEvents }) => {
  const weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
  const hours = Array.from({ length: 8 }, (_, i) => 9 + i); // 9 AM to 4 PM

  return (
    <>
      <div className="time-slot-column">
        {hours.map((hour) => (
          <div key={hour} className="time-slot">
            {hour}:00
          </div>
        ))}
      </div>
      {weekdays.map((day) => (
        <div key={day} className="weekday-column">
          <div className="weekday-header">{day}</div>
          {hours.map((hour) => (
            <div
              key={hour}
              className="time-slot"
              draggable={!!events[makeKey(day, hour)]} // only draggable if event exists
              onDragStart={(e) => {
                e.dataTransfer.setData("text/plain", makeKey(day, hour));
              }}
              onDragOver={(e) => e.preventDefault()}
              onDrop={(e) => {
                const sourceKey = e.dataTransfer.getData("text/plain");
                const targetKey = makeKey(day, hour);
                if (sourceKey && sourceKey !== targetKey) {
                  const updatedEvents = {
                    ...events,
                    [targetKey]: events[sourceKey],
                  };
                  delete updatedEvents[sourceKey]; // remove old slot
                  setEvents(updatedEvents);
                }
              }}
              onClick={() => setShowModalKey(() => makeKey(day, hour))}
            >
              {events[makeKey(day, hour)]}
            </div>
          ))}
        </div>
      ))}
    </>
  );
};

export default Weekday;
