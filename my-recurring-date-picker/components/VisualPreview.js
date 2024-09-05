import React from 'react';
import { addDays, format } from 'date-fns';

const VisualPreview = ({ startDate, recurrence }) => {
  const getPreviewDates = () => {
    if (!startDate) return [];
    
    let dates = [startDate];
    for (let i = 1; i <= 4; i++) {
      if (recurrence === 'daily') dates.push(addDays(startDate, i));
      else if (recurrence === 'weekly') dates.push(addDays(startDate, i * 7));
      else if (recurrence === 'monthly') dates.push(addDays(startDate, i * 30));
      else if (recurrence === 'yearly') dates.push(addDays(startDate, i * 365));
    }
    return dates;
  };

  return (
    <div className="mt-4">
      <label className="block text-gray-700 text-sm font-bold mb-2">Preview:</label>
      <ul className="list-disc pl-5">
        {getPreviewDates().map((date, idx) => (
          <li key={idx}>{format(date, 'yyyy-MM-dd')}</li>
        ))}
      </ul>
    </div>
  );
};

export default VisualPreview;
