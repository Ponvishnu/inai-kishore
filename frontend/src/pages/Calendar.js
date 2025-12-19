import React, { useState } from 'react';
import { X } from 'lucide-react';

const Calendar = ({ isOpen, onClose, onSelectDate }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [currentMonth, setCurrentMonth] = useState(new Date());

  if (!isOpen) return null;

  const daysInMonth = new Date(
    currentMonth.getFullYear(),
    currentMonth.getMonth() + 1,
    0
  ).getDate();

  const firstDayOfMonth = new Date(
    currentMonth.getFullYear(),
    currentMonth.getMonth(),
    1
  ).getDay();

  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const handleDateClick = (day) => {
    const date = new Date(
      currentMonth.getFullYear(),
      currentMonth.getMonth(),
      day
    );
    setSelectedDate(date);
    if (onSelectDate) {
      onSelectDate(date);
    }
  };

  const prevMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1)
    );
  };

  const nextMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1)
    );
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="backdrop-blur-xl bg-white/10 border border-white/30 rounded-3xl p-6 w-[343px] mx-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-white text-xl font-semibold font-poppins">
            {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
          </h2>
          <button
            onClick={onClose}
            className="text-white hover:bg-white/10 rounded-full p-1"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex justify-between mb-4">
          <button
            onClick={prevMonth}
            className="text-white hover:bg-white/10 rounded-full px-3 py-1"
          >
            ←
          </button>
          <button
            onClick={nextMonth}
            className="text-white hover:bg-white/10 rounded-full px-3 py-1"
          >
            →
          </button>
        </div>

        <div className="grid grid-cols-7 gap-2 mb-2">
          {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map((day) => (
            <div
              key={day}
              className="text-center text-[#AEAEAE] text-xs font-poppins"
            >
              {day}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-7 gap-2">
          {Array.from({ length: firstDayOfMonth }).map((_, index) => (
            <div key={`empty-${index}`} />
          ))}
          {Array.from({ length: daysInMonth }).map((_, index) => {
            const day = index + 1;
            const isSelected =
              selectedDate.getDate() === day &&
              selectedDate.getMonth() === currentMonth.getMonth() &&
              selectedDate.getFullYear() === currentMonth.getFullYear();
            return (
              <button
                key={day}
                onClick={() => handleDateClick(day)}
                className={`aspect-square rounded-lg flex items-center justify-center text-sm font-poppins transition-all ${
                  isSelected
                    ? 'bg-[#FFC300] text-[#1B0628] font-semibold'
                    : 'text-white hover:bg-white/10'
                }`}
              >
                {day}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Calendar;
