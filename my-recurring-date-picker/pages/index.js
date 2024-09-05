import React from 'react';
import CustomDatePicker from '../components/DatePicker';
import RecurrenceOptions from '../components/RecurrenceOptions';
import VisualPreview from '../components/VisualPreview';
import useDatePickerStore from '../store/useDatePickerStore';

export default function Home() {
  const { startDate, setStartDate, recurrence, setRecurrence } = useDatePickerStore();

  return (
    <div className="p-4 max-w-md mx-auto">
      <h1 className="text-xl font-bold mb-4">Recurring Date Picker</h1>
      <CustomDatePicker startDate={startDate} setStartDate={setStartDate} />
      <RecurrenceOptions recurrence={recurrence} setRecurrence={setRecurrence} />
      <VisualPreview startDate={startDate} recurrence={recurrence} />
    </div>
  );
}
