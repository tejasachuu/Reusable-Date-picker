import { render, screen, fireEvent } from '@testing-library/react';
import CustomDatePicker from '../components/DatePicker';
import RecurrenceOptions from '../components/RecurrenceOptions';
import VisualPreview from '../components/VisualPreview';
import useDatePickerStore from '../store/useDatePickerStore';

test('renders date picker and updates date', () => {
  render(<CustomDatePicker startDate={new Date()} setStartDate={() => {}} />);
  const dateInput = screen.getByRole('textbox');
  expect(dateInput).toBeInTheDocument();
  fireEvent.change(dateInput, { target: { value: '2024-09-10' } });
  expect(dateInput.value).toBe('2024-09-10');
});

test('renders recurrence options and updates recurrence', () => {
  render(<RecurrenceOptions recurrence="daily" setRecurrence={() => {}} />);
  const select = screen.getByRole('combobox');
  expect(select).toBeInTheDocument();
  fireEvent.change(select, { target: { value: 'weekly' } });
  expect(select.value).toBe('weekly');
});

test('renders visual preview based on start date and recurrence', () => {
  const { setStartDate, setRecurrence } = useDatePickerStore.getState();
  setStartDate(new Date('2024-09-04'));
  setRecurrence('daily');

  render(<VisualPreview startDate={new Date()} recurrence="daily" />);
  const previewItems = screen.getAllByRole('listitem');
  expect(previewItems.length).toBe(5);
});
