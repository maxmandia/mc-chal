import React from "react";

interface DaysRowProps {
  setSelectedDays: React.Dispatch<React.SetStateAction<string[]>>;
  selectedDays: string[];
}

function DaysRow(props: DaysRowProps) {
  const { setSelectedDays, selectedDays } = props;

  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  function handleDaySelection(day: string) {
    if (selectedDays.includes(day)) {
      setSelectedDays((prev) => prev.filter((d) => d !== day));
    } else {
      setSelectedDays((prev) => [...prev, day]);
    }
  }

  return (
    <div className="flex items-center justify-start gap-3 py-2 mt-2">
      {days.map((day, index) => {
        return (
          <button
            onClick={() => {
              handleDaySelection(day);
            }}
            key={index}
            className={`text-[#2C5F95] font-medium text-[12px] border-[1px] ${
              selectedDays.includes(day)
                ? "border-[#76AFE3]"
                : "border-slate-200"
            }  p-1 rounded-[2px]`}
          >
            {day}
          </button>
        );
      })}
    </div>
  );
}

export default DaysRow;
