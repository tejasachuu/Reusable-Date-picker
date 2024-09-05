"use client";

import React from "react";

interface DatePickerInputProps {
  selectedDate: string | null;
  onDateChange: (date: string) => void;
}

const DatePickerInput: React.FC<DatePickerInputProps> = ({ selectedDate, onDateChange }) => (
  <div className="mb-4">
    <label className="block mb-2 text-lg">Select Date</label>
    <input
      type="date"
      value={selectedDate || ""}
      onChange={(e) => onDateChange(e.target.value)}
      className="border border-gray-300 rounded p-3 w-full bg-white text-black"
    />
  </div>
);

export default DatePickerInput;
