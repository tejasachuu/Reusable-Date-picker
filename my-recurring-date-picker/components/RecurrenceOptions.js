import React from 'react';

const RecurrenceOptions = ({ recurrence, setRecurrence }) => {
  return (
    <div className="mt-4">
      <label className="block text-gray-700 text-sm font-bold mb-2">Recurrence:</label>
      <select
        value={recurrence}
        onChange={(e) => setRecurrence(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded"
      >
        <option value="daily">Daily</option>
        <option value="weekly">Weekly</option>
        <option value="monthly">Monthly</option>
        <option value="yearly">Yearly</option>
      </select>
    </div>
  );
};

export default RecurrenceOptions;
