import React from "react";

interface Event {
  title: string;
  date: string;
  time: string;
}

interface EventListProps {
  events: Event[];
}

const EventList: React.FC<EventListProps> = ({ events }) => (
  <div className="mt-6">
    <h3 className="text-xl font-semibold mb-4">Event List</h3>
    <ul className="list-disc pl-5">
      {events.length === 0 ? (
        <li>No events scheduled</li>
      ) : (
        events.map((event, index) => (
          <li key={index} className="mb-2">
            <strong>{event.title}</strong> - {event.date} at {event.time}
          </li>
        ))
      )}
    </ul>
  </div>
);

export default EventList;
