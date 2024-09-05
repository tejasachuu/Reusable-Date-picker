import React from "react";

interface TimePickerProps {
  eventTime: string;
  onTimeChange: (time: string) => void;
}

const TimePicker: React.FC<TimePickerProps> = ({ eventTime, onTimeChange }) => (
  <div className="mb-4">
    <label className="block mb-2 text-lg">Select Time</label>
    <input
      type="time"
      value={eventTime}
      onChange={(e) => onTimeChange(e.target.value)}
      className="border border-gray-300 rounded p-3 w-full bg-white text-black"
    />
  </div>
);

export default TimePicker;
