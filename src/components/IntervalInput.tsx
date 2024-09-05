import React from "react";

interface IntervalInputProps {
  interval: number;
  onIntervalChange: (interval: number) => void;
}

const IntervalInput: React.FC<IntervalInputProps> = ({ interval, onIntervalChange }) => (
  <div className="mb-4">
    <label className="block mb-2 text-lg">
      Interval (in days)
      <input
        type="number"
        min="1"
        value={interval}
        onChange={(e) => onIntervalChange(Number(e.target.value))}
        className="border border-gray-300 rounded p-3 ml-2 bg-white text-black"
        style={{ width: "4rem" }}
      />
    </label>
  </div>
);

export default IntervalInput;
