"use client";

import React, { useState } from "react";
import DatePickerInput from "./DatePickerInput";
import TimePicker from "./TimePicker";
import RecurrenceOptions from "./RecurrenceOptions";
import IntervalInput from "./IntervalInput";
import DayOfWeekCheckboxes from "./DayOfWeekCheckboxes";
import EventList from "./EventList";
import { format, addDays, addWeeks, addMonths, addYears, isAfter, isBefore, getDay } from "date-fns";

type RecurrenceOption = "none" | "daily" | "weekly" | "monthly" | "yearly";

interface Event {
  title: string;
  date: string;
  time: string;
}

const DatePicker: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [eventTitle, setEventTitle] = useState<string>(""); // Added state for event title
  const [recurrence, setRecurrence] = useState<RecurrenceOption>("none");
  const [interval, setInterval] = useState<number>(1);
  const [startDate, setStartDate] = useState<string | null>(null);
  const [endDate, setEndDate] = useState<string | null>(null);
  const [eventTime, setEventTime] = useState<string>("09:00");
  const [selectedDays, setSelectedDays] = useState<boolean[]>(Array(7).fill(false));
  const [events, setEvents] = useState<Event[]>([]);

  const calculateRecurringDates = () => {
    const dates: string[] = [];
    if (!selectedDate) return dates;

    const baseDate = new Date(selectedDate);
    const start = startDate ? new Date(startDate) : baseDate;
    const end = endDate ? new Date(endDate) : new Date(2100, 0, 1);

    const addDate = (date: Date) => {
      if (isAfter(date, end)) return;
      dates.push(format(date, "yyyy-MM-dd"));
    };

    switch (recurrence) {
      case "daily":
        for (let i = 0; i < 365; i++) {
          const newDate = addDays(baseDate, i * interval);
          if (isAfter(newDate, start) && isBefore(newDate, end)) {
            addDate(newDate);
          }
        }
        break;
      case "weekly":
        for (let i = 0; i < 52; i++) {
          const newDate = addWeeks(baseDate, i * interval);
          if (isAfter(newDate, start) && isBefore(newDate, end)) {
            addDate(newDate);
          }
        }
        break;
      case "monthly":
        for (let i = 0; i < 12; i++) {
          const newDate = addMonths(baseDate, i * interval);
          if (isAfter(newDate, start) && isBefore(newDate, end)) {
            addDate(newDate);
          }
        }
        break;
      case "yearly":
        for (let i = 0; i < 12; i++) {
          const newDate = addYears(baseDate, i * interval);
          if (isAfter(newDate, start) && isBefore(newDate, end)) {
            addDate(newDate);
          }
        }
        break;
      default:
        addDate(baseDate);
        break;
    }

    if (recurrence === "weekly" || recurrence === "none") {
      const selectedWeekdays = selectedDays.map((isSelected, index) => (isSelected ? index : -1)).filter(day => day !== -1);
      for (let i = 0; i < 365; i++) {
        const newDate = addDays(baseDate, i);
        if (selectedWeekdays.includes(getDay(newDate)) && isAfter(newDate, start) && isBefore(newDate, end)) {
          addDate(newDate);
        }
      }
    }

    return dates;
  };

  const addEvent = () => {
    if (!eventTitle || !selectedDate) {
      alert("Please fill in both the event title and date.");
      return;
    }

    const dates = calculateRecurringDates();
    const newEvents = dates.map((date) => ({
      title: eventTitle,
      date,
      time: eventTime,
    }));

    setEvents((prevEvents) => [...prevEvents, ...newEvents]);
    alert(`${newEvents.length} events added successfully!`);
  };

  const clearAllEvents = () => {
    setEvents([]);
    alert("All events cleared!");
  };

  return (
    <div className="p-6 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Add Event</h2>
      <DatePickerInput selectedDate={selectedDate} onDateChange={setSelectedDate} />
      <TimePicker eventTime={eventTime} onTimeChange={setEventTime} />
      <RecurrenceOptions
        recurrence={recurrence}
        onRecurrenceChange={setRecurrence}
        interval={interval}
        onIntervalChange={setInterval}
        startDate={startDate}
        onStartDateChange={setStartDate}
        endDate={endDate}
        onEndDateChange={setEndDate}
      />
      {recurrence === "weekly" && (
        <DayOfWeekCheckboxes selectedDays={selectedDays} onDayChange={setSelectedDays} />
      )}
      <div className="mb-4">
        <label className="block mb-2 text-lg">Event Title</label>
        <input
          type="text"
          value={eventTitle}
          onChange={(e) => setEventTitle(e.target.value)}
          className="border border-gray-300 rounded p-3 w-full bg-white text-black"
        />
      </div>
      <button
        onClick={addEvent}
        className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded mb-4 mr-2"
      >
        Add Event
      </button>
      <button
        onClick={clearAllEvents}
        className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded mb-4"
      >
        Clear All Events
      </button>
      <EventList events={events} />
    </div>
  );
};

export default DatePicker;
