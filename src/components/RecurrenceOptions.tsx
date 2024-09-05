"use client";

import React from "react";

interface RecurrenceOptionsProps {
  recurrence: "none" | "daily" | "weekly" | "monthly" | "yearly";
  onRecurrenceChange: (recurrence: "none" | "daily" | "weekly" | "monthly" | "yearly") => void;
  interval: number;
  onIntervalChange: (interval: number) => void;
  startDate: string | null;
  onStartDateChange: (startDate: string) => void;
  endDate: string | null;
  onEndDateChange: (endDate: string) => void;
}

const RecurrenceOptions: React.FC<RecurrenceOptionsProps> = ({
  recurrence,
  onRecurrenceChange,
  interval,
  onIntervalChange,
  startDate,
  onStartDateChange,
  endDate,
  onEndDateChange,
}) => (
  <div className="mb-4">
    <label className="block mb-2 text-lg">Recurrence</label>
    <select
      value={recurrence}
      onChange={(e) => onRecurrenceChange(e.target.value as "none" | "daily" | "weekly" | "monthly" | "yearly")}
      className="border border-gray-300 rounded p-3 w-full bg-white text-black"
    >
      <option value="none">None</option>
      <option value="daily">Daily</option>
      <option value="weekly">Weekly</option>
      <option value="monthly">Monthly</option>
      <option value="yearly">Yearly</option>
    </select>
    {recurrence !== "none" && (
      <>
        <div className="mb-4">
          <label className="block mb-2 text-lg">
            Every
            <input
              type="number"
              min="1"
              value={interval}
              onChange={(e) => onIntervalChange(Number(e.target.value))}
              className="border border-gray-300 rounded p-3 ml-2 bg-white text-black"
              style={{ width: "4rem" }}
            />{" "}
            {recurrence}
          </label>
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-lg">Start Date</label>
          <input
            type="date"
            value={startDate || ""}
            onChange={(e) => onStartDateChange(e.target.value)}
            className="border border-gray-300 rounded p-3 w-full bg-white text-black"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-lg">End Date</label>
          <input
            type="date"
            value={endDate || ""}
            onChange={(e) => onEndDateChange(e.target.value)}
            className="border border-gray-300 rounded p-3 w-full bg-white text-black"
          />
        </div>
      </>
    )}
  </div>
);

export default RecurrenceOptions;
