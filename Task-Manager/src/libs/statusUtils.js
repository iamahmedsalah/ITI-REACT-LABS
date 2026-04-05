export function getStatusBadgeClasses(status) {
  if (!status) return 'bg-surface-container-lowest text-slate-500 border-white/5';
  if (status === 'In Progress') return 'bg-primary/10 text-primary border-primary/20';
  if (status === 'Done') return 'bg-primary/10 text-primary border-primary/20';
  if (status === 'Review') return 'bg-primary/10 text-primary border-primary/20';
  return 'bg-surface-container-lowest text-slate-500 border-white/5';
}

export function getStatusColorClass(status) {
  if (!status) return 'text-surface-container-highest';
  if (status === 'In Progress') return 'text-primary';
  if (status === 'Done') return 'text-primary';
  if (status === 'Review') return 'text-primary';
  return 'text-surface-container-highest';
}

export function getPriorityBadgeClasses(priority) {
  if (!priority) return 'bg-surface-container-highest text-slate-400';
  if (priority === 'Critical') return 'bg-error/10 text-error';
  if (priority === 'High') return 'bg-primary/10 text-primary';
  if (priority === 'Medium') return 'bg-surface-container-highest text-slate-400';
  if (priority === 'Low') return 'bg-surface-container-lowest text-slate-500';
  return 'bg-surface-container-highest text-slate-400';
}

export function getPriorityColorClass(priority) {
  if (!priority) return 'text-surface-container-highest';
  if (priority === 'Critical') return 'text-error';
  if (priority === 'High') return 'text-primary';
  if (priority === 'Medium') return 'text-surface-container-highest';
  if (priority === 'Low') return 'text-surface-container-lowest';
  return 'text-surface-container-highest';
}

