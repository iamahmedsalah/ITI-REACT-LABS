
import { HugeiconsIcon } from "@hugeicons/react";
import { MoreVerticalCircle01Icon } from '@hugeicons/core-free-icons';

const TaskStatusDropdown = ({ currentStatus, onStatusUpdate, isOpen, onToggle }) => {
  const statuses = ['Queued', 'In Progress', 'Review', 'Done'];

  return (
    <div className="relative">
      <button
        onClick={onToggle}
        className="p-2 cursor-pointer text-slate-500 hover:text-white transition-colors"
      >
        <HugeiconsIcon icon={MoreVerticalCircle01Icon} className="w-3.5 h-3.5" />
      </button>
      {isOpen && (
        <div className="absolute right-0 top-10 w-40 bg-surface-container-highest border border-white/10 rounded-xl shadow-2xl z-50 py-2 text-left">
          <p className="px-4 py-1 text-[9px] uppercase tracking-widest text-slate-500 font-bold">Update Status</p>
          {statuses.map(s => (
            <button
              key={s}
              onClick={() => {
                onStatusUpdate(s);
                onToggle();
              }}
              className={
                `w-full text-left cursor-pointer px-4 py-2 text-xs hover:bg-white/5 transition-colors
                ${currentStatus === s ? "text-primary font-bold" : "text-slate-400"}
              `}
            >
              {s}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default TaskStatusDropdown;
