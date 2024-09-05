// src/components/DatePicker.tsx
"use client"; // Add this line to mark as a client component

import React, { useState } from 'react';

const DatePicker: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<string | null>(null);

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedDate(e.target.value);
  };

  return (
    <div className="p-4 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-lg font-semibold mb-2">Select a Date</h2>
      <input
        type="date"
        value={selectedDate || ''}
        onChange={handleDateChange}
        className="border border-gray-300 rounded p-2 w-full"
      />
      {selectedDate && (
        <div className="mt-4">
          <p>
            Selected Date: <span className="font-bold">{selectedDate}</span>
          </p>
        </div>
      )}
    </div>
  );
};

export default DatePicker;
