import React, { useState } from "react";

const saveEvent =
  ({ event, events, showModalKey, setEvents, setShowModalKey }) =>
  () => {
    const updatedEvents = {
      ...events,
      [showModalKey]: event,
    };
    setEvents(updatedEvents);
    setShowModalKey(undefined);
  };

export const EventModal = ({
  showModalKey,
  events,
  setEvents,
  setShowModalKey,
}) => {
  const [event, setEvent] = useState(events[showModalKey]);

  return (
    <div className="event-modal">
      <div className="event-modal-content">
        <h3>Add/Edit Event</h3>
        <input
          type="text"
          placeholder="Event title"
          value={event}
          onChange={(e) => setEvent(e.target.value)}
        />
        <div>
          <button
            className="save"
            onClick={saveEvent({
              event,
              events,
              showModalKey,
              setEvents,
              setShowModalKey,
            })}
          >
            Save
          </button>
          <button className="cancel" onClick={() => setShowModalKey(undefined)}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};
