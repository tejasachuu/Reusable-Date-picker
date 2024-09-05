import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const CustomDatePicker = ({ startDate, setStartDate }) => {
  return (
    <div>
      <label className="block text-gray-700 text-sm font-bold mb-2">Start Date:</label>
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        className="w-full p-2 border border-gray-300 rounded"
      />
    </div>
  );
};

export default CustomDatePicker;
