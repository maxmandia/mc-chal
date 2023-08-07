import React from "react";
import DaysRow from "./DaysRow";

function WorkflowModal() {
  const [selectedDays, setSelectedDays] = React.useState<string[]>([]);
  return (
    <div className="bg-white p-10 rounded-[8px]">
      <div className="h-5 w-5 bg-slate-500" />
      <div className="mt-5 flex flex-col gap-1">
        <h4 className="text-[#516E8E] text-[12px] font-bold">
          SCHEDULE YOUR WORKFLOW
        </h4>
        <h2 className="text-[#434D57] font-semibold text-[18px] max-w-[275px]">
          Runs every X days at X:XXam, only {selectedDays.length} days a weeks
        </h2>
      </div>
      <div className="mt-5 flex flex-col gap-1">
        <h4 className="text-[#343A42] text-[14px] font-bold">Interval</h4>
        <h2 className="text-[#767D83] font-semibold text-[12px] max-w-[275px]">
          How often the workflow should run
        </h2>
      </div>
      <div className="flex items-center justify-between mt-4">
        <h4 className="text-[#343A42] text-[14px] font-bold">3 Days</h4>
        <button className="py-1 px-2 text-[#767D83] border-[2px] border-[#F3F5F7] text-[12px] font-medium">
          Change
        </button>
      </div>
      <div className="border-y-[2px] my-3 py-3 border-y-[#F3F5F7]">
        <h4 className="text-[#343A42] text-[14px] font-bold">Days</h4>
        <h2 className="text-[#767D83] font-semibold text-[12px] max-w-[275px]">
          The days of the week it is active
        </h2>
        <DaysRow
          selectedDays={selectedDays}
          setSelectedDays={setSelectedDays}
        />
      </div>
      <div>
        <h4 className="text-[#343A42] text-[14px] font-bold">Time</h4>
        <h2 className="text-[#767D83] font-semibold text-[12px] max-w-[275px]">
          Which part of the day to run
        </h2>
        <div className="flex items-center justify-between mt-4">
          <h4 className="text-[#356EAA] font-bold text-[24px]">
            X:XX
            <span className="text-[#767D83] text-[12px] ml-1">am</span>
          </h4>
          <button className="py-1 px-2 text-[#767D83] border-[2px] border-[#F3F5F7] text-[12px] font-medium">
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}

export default WorkflowModal;
