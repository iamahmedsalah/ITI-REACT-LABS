
import { Link } from "react-router-dom";
import { HugeiconsIcon } from "@hugeicons/react";
import { Calendar03Icon, Tick04Icon } from '@hugeicons/core-free-icons';
import { formatDate, getStatusBadgeClasses, getPriorityBadgeClasses } from '../../utils';
import TaskStatusDropdown from './TaskStatusDropdown';

const TaskListView = ({ tasks, onUpdateStatus, onDeleteRequest, activeMenuId, onMenuToggle }) => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="border-b border-white/5">
            <th className="px-8 py-4 font-label text-[10px] uppercase tracking-[0.15em] text-slate-500">Task Name</th>
            <th className="px-8 py-4 font-label text-[10px] uppercase tracking-[0.15em] text-slate-500">Priority</th>
            <th className="px-8 py-4 font-label text-[10px] uppercase tracking-[0.15em] text-slate-500">Due Date</th>
            <th className="px-8 py-4 font-label text-[10px] uppercase tracking-[0.15em] text-slate-500 text-center">Status</th>
            <th className="px-8 py-4 font-label text-[10px] uppercase tracking-[0.15em] text-slate-500 text-right">Action</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-white/5">
          {tasks.map((task) => (
            <tr key={task.id} className="group hover:bg-surface-bright/30 transition-colors">
              <td className="px-8 py-5">
                <Link to={`/tasks/${task.id}`} className="flex items-center gap-3">
                  <div className={`
                    w-2 h-10 rounded-full neon-glow
                    ${task.priority === 'Critical' ? "bg-primary" : "bg-secondary"}
                  `}></div>
                  <div>
                    <p className="text-sm font-semibold text-white">{task.title}</p>
                    <p className="text-[10px] text-slate-500">Project: {task.project}</p>
                  </div>
                </Link>
              </td>
              <td className="px-8 py-5">
                <span className={`
                  inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-tighter
                  ${getPriorityBadgeClasses(task.priority)}
                `}>
                  {task.priority}
                </span>
              </td>
              <td className="px-8 py-5">
                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <HugeiconsIcon icon={Calendar03Icon} className="w-3.5 h-3.5" />
                  {formatDate(task.dueDate)}
                </div>
              </td>
              <td className="px-8 py-5 text-center">
                <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest border ${getStatusBadgeClasses(task.status)}`}>
                  {task.status === 'In Progress' && <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>}
                  {task.status === 'Done' && <HugeiconsIcon icon={Tick04Icon} className="w-3.5 h-3.5 " />}
                  {task.status}
                </div>
              </td>
              <td className="px-8 py-5 text-right">
                <div className="flex items-center justify-end gap-2">
                  <button
                    onClick={() => onDeleteRequest(task.id, task.title)}
                    className="p-2 cursor-pointer text-red-400 hover:text-red-200 transition-colors text-xs rounded-md bg-red-900/5"
                    aria-label={`Delete ${task.title}`}
                  >
                    Delete
                  </button>
                  <TaskStatusDropdown 
                    currentStatus={task.status}
                    onStatusUpdate={(newStatus) => onUpdateStatus(task.id, newStatus)}
                    isOpen={activeMenuId === task.id}
                    onToggle={() => onMenuToggle(task.id)}
                  />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TaskListView;
