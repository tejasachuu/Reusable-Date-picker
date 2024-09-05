"use client";

import React from "react";

interface DayOfWeekCheckboxesProps {
  selectedDays: boolean[];
  onDayChange: (days: boolean[]) => void;
}

const DayOfWeekCheckboxes: React.FC<DayOfWeekCheckboxesProps> = ({ selectedDays, onDayChange }) => (
  <div className="mb-4">
    <label className="block mb-2 text-lg">Select Days of the Week</label>
    <div className="flex flex-wrap">
      {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day, index) => (
        <label key={index} className="mr-4">
          <input
            type="checkbox"
            checked={selectedDays[index]}
            onChange={() => {
              const newDays = [...selectedDays];
              newDays[index] = !newDays[index];
              onDayChange(newDays);
            }}
            className="mr-2"
          />
          {day}
        </label>
      ))}
    </div>
  </div>
);

export default DayOfWeekCheckboxes;
