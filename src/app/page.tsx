// src/app/page.tsx
import DatePicker from '../components/DatePicker';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <h1 className="text-2xl font-bold mb-6">Date Picker Demo</h1>
      <DatePicker />
    </div>
  );
}
