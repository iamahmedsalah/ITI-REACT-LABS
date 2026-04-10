
import { Link } from "react-router-dom";
import { HugeiconsIcon } from "@hugeicons/react";
import { Calendar03Icon } from '@hugeicons/core-free-icons';
import { formatDate, getPriorityBadgeClasses } from '../../utils';

const TaskGridView = ({ tasks }) => {
  return (
    <div className="p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {tasks.map((task) => (
        <Link
          key={task.id}
          to={`/tasks/${task.id}`}
          className="glass-card p-6 rounded-2xl group hover:border-primary/30 transition-all duration-500 relative overflow-hidden flex flex-col"
        >
          <div className="absolute -right-12 -top-12 w-32 h-32 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors"></div>

          <div className="flex justify-between items-start mb-4">
            <span className={
              `px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-tighter
              ${getPriorityBadgeClasses(task.priority)}
            `}>
              {task.priority}
            </span>
            <div className={`
              flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-widest border
              ${task.status === 'In Progress' ? "bg-primary/10 text-primary border-primary/20" : "bg-surface-container-lowest text-slate-500 border-white/5"}
            `}>
              {task.status}
            </div>
          </div>

          <h3 className="font-headline text-lg font-bold text-white mb-2 group-hover:text-primary transition-colors line-clamp-2">{task.title}</h3>
          <p className="text-[11px] text-slate-500 font-label uppercase tracking-wider mb-6">Project: {task.project}</p>

          <div className="mt-auto flex items-center justify-between pt-4 border-t border-white/5">
            <div className="flex items-center gap-2 text-[10px] text-slate-400">
              <HugeiconsIcon icon={Calendar03Icon} className="w-3.5 h-3.5" />
              {formatDate(task.dueDate)}
            </div>
            <div className="flex -space-x-2">
              {task.assignedSquad?.slice(0, 3).map((member, i) => (
                <img
                  key={i}
                  src={member.avatar}
                  alt={member.name}
                  className="w-6 h-6 rounded-full border-2 border-surface-container-high"
                />
              ))}
              {task.assignedSquad && task.assignedSquad.length > 3 && (
                <div className="w-6 h-6 rounded-full border-2 border-surface-container-high bg-surface-container-highest flex items-center justify-center text-[8px] font-bold text-white">
                  +{task.assignedSquad.length - 3}
                </div>
              )}
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default TaskGridView;
