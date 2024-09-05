import create from 'zustand';

const useDatePickerStore = create((set) => ({
  startDate: new Date(),
  setStartDate: (date) => set({ startDate: date }),
  recurrence: 'daily',
  setRecurrence: (recurrence) => set({ recurrence }),
}));

export default useDatePickerStore;
