
import { useState, useMemo } from "react";

import { HugeiconsIcon } from "@hugeicons/react";
import { Link } from "react-router-dom";
import {
  AddSquareIcon,
  ArrangeByLettersAZIcon,
  ArrangeByLettersZAIcon,
  Calendar03Icon,
  Cancel02Icon,
  FilterIcon,
  GridViewIcon,
  ListViewIcon,
  MoreVerticalCircle01Icon,
  Tick04Icon,
} from '@hugeicons/core-free-icons';

// Task Context

import { useTasks } from '../../hooks/useTasks';

// Date Format
import { formatDate, getStatusBadgeClasses, getPriorityBadgeClasses } from '../../utils'


const TaskListTable = () => {


  const { tasks, addTask, updateTaskStatus, deleteTask } = useTasks();
  const priorities = ['All', 'Critical', 'High', 'Medium'];
  const [filterPriority, setFilterPriority] = useState("All");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [sortDirection, setSortDirection] = useState('asc');
  const filteredAndSortedTasks = useMemo(() => {
    let result = [...tasks];

    // Filter by priority
    if (filterPriority !== 'All') {
      result = result.filter(task => task.priority === filterPriority);
    }

    // Sort by title
    result.sort((a, b) => {
      const titleA = a.title.toLowerCase();
      const titleB = b.title.toLowerCase();
      if (sortDirection === 'asc') {
        return titleA.localeCompare(titleB);
      } else {
        return titleB.localeCompare(titleA);
      }
    });

    return result;
  }, [tasks, filterPriority, sortDirection]);



  //  View Mode
  const [viewMode, setViewMode] = useState('list');

  const [isFormOpen, setIsFormOpen] = useState(false);
  const [activeMenuId, setActiveMenuId] = useState(null);
  const statuses = ['Queued', 'In Progress', 'Review', 'Done'];
    // Form state
  const [newTitle, setNewTitle] = useState('');
  const [newProject, setNewProject] = useState('');
  const [newSprint, setNewSprint] = useState('');
  const [newPriority, setNewPriority] = useState('Medium');
  const [newObjective, setNewObjective] = useState('');

  // delete confirmation modal state
  const [confirmDeleteId, setConfirmDeleteId] = useState(null);
  const [confirmDeleteTitle, setConfirmDeleteTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const title = newTitle.trim();
    if (!title) return;
    addTask({
      title,
      project: newProject || 'General',
      priority: newPriority,
      dueDate: Date.now(),
      status: 'Queued',
      sprint: newSprint || 'Sprint-01',
      assignedSquad: [],
      objective: newObjective,
    });
    // reset and close
    setNewTitle('');
    setNewProject('');
    setNewPriority('Medium');
    setNewObjective('');
    setIsFormOpen(false);
  };

  const requestDelete = (id, title) => {
    if (!id) return;
    setConfirmDeleteId(id);
    setConfirmDeleteTitle(title || '');
  };

  const cancelDelete = () => {
    setConfirmDeleteId(null);
    setConfirmDeleteTitle('');
  };

  const confirmDelete = () => {
    if (confirmDeleteId) deleteTask(confirmDeleteId);
    cancelDelete();
  };



  return (
    <div>
      <section className="bg-surface-container-high rounded-xl overflow-hidden border border-white/5 shadow-[0_24px_48px_-12px_rgba(1,14,36,0.5)]">
        <div className="p-6 flex flex-wrap items-center justify-between gap-4 bg-surface-container-highest/50 backdrop-blur-md">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className={`flex items-center cursor-pointer gap-2 px-4 py-2 rounded-lg bg-surface-container-lowest border border-white/5 text-xs text-white hover:bg-surface-container-high transition-colors ${filterPriority !== 'All' ? 'border-primary/50 text-primary' : ''}`}
            >
              <HugeiconsIcon icon={FilterIcon} className={`w-3 h-3 transition-transform ${isFilterOpen ? 'rotate-180' : ''}`} />
              Priority: {filterPriority}
            </button>

            {isFilterOpen && (
              <div className="absolute top-full left-7 w-30 bg-surface-container-highest border border-white/10 rounded-xl shadow-2xl z-50 py-2">
                {priorities.map(p => (
                  <button
                    key={p}
                    onClick={() => {
                      setFilterPriority(p);
                      setIsFilterOpen(false);
                    }}
                    className={`w-full cursor-pointer text-left px-4 py-2 text-xs hover:bg-white/5 transition-colors ${filterPriority === p ? 'text-primary font-bold' : 'text-slate-400'}`}
                  >
                    {p}
                  </button>
                ))}


              </div>
            )}
            <button
              onClick={() => setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc')}
              className="flex items-center cursor-pointer gap-2 px-4 py-2 rounded-lg bg-surface-container-lowest border border-white/5 text-xs text-white hover:bg-surface-container-high transition-colors">

              {sortDirection === 'asc' ? <HugeiconsIcon icon={ArrangeByLettersAZIcon} className="w-3.5 h-3.5" /> : <HugeiconsIcon icon={ArrangeByLettersZAIcon} className="w-3.5 h-3.5" />}
              Sort: {sortDirection === 'asc' ? 'A-Z' : 'Z-A'}
            </button>




          <button 
          onClick={() => setIsFormOpen(true)}
          className="flex items-center cursor-pointer gap-2 px-4 py-2 rounded-lg bg-primary/15 border border-white/5 text-sm  hover:bg-surface-container-high transition-colors"
        >
          <HugeiconsIcon icon={AddSquareIcon} className="w-4 h-4" />
          Add Task
        </button>


        </div>





          <div className="flex items-center gap-3">
            <span className="text-xs text-slate-500 font-label uppercase tracking-widest">View:</span>
            <div className="flex bg-surface-container-lowest p-1 rounded-lg border border-white/5">
              <button
                onClick={() => setViewMode('list')}
                className={`p-1.5 rounded-md cursor-pointer transition-all ${viewMode === 'list' ? 'bg-surface-container-highest text-primary shadow-sm' : 'text-slate-500 hover:text-slate-300'}`}
              >
                <HugeiconsIcon icon={ListViewIcon} className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => setViewMode('grid')}
                className={`p-1.5 rounded-md cursor-pointer transition-all ${viewMode === 'grid' ? 'bg-surface-container-highest text-primary shadow-sm' : 'text-slate-500 hover:text-slate-300'}`}
              >
                <HugeiconsIcon icon={GridViewIcon} className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {viewMode === 'list' ? (
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
                {filteredAndSortedTasks.map((task) => (
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
                    <td className="px-8 py-5 text-right relative">
                      <div className="flex items-center justify-end gap-2">
                        <button
                          onClick={() => requestDelete(task.id, task.title)}
                          className="p-2 cursor-pointer text-red-400 hover:text-red-200 transition-colors text-xs rounded-md bg-red-900/5"
                          aria-label={`Delete ${task.title}`}
                        >
                          Delete
                        </button>
                        <button
                          onClick={() => setActiveMenuId(activeMenuId === task.id ? null : task.id)}
                          className="p-2 cursor-pointer text-slate-500 hover:text-white transition-colors"
                        >
                          <HugeiconsIcon icon={MoreVerticalCircle01Icon} className="w-3.5 h-3.5" />
                        </button>
                          {activeMenuId === task.id && (
                        <div className="absolute right-8 top-12 w-40 bg-surface-container-highest border border-white/10 rounded-xl shadow-2xl z-50 py-2 text-left">
                          <p className="px-4 py-1 text-[9px] uppercase tracking-widest text-slate-500 font-bold">Update Status</p>
                          {statuses.map(s => (
                            <button
                              key={s}
                              onClick={() => {
                                updateTaskStatus(task.id, s);
                                setActiveMenuId(null);
                              }}
                              className={
                                `w-full text-left cursor-pointer px-4 py-2 text-xs hover:bg-white/5 transition-colors
                                ${task.status === s ? "text-primary font-bold" : "text-slate-400"}
                              `}
                            >
                              {s}
                            </button>
                          ))}
                        </div>
                      )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredAndSortedTasks.map((task) => (
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
        )}
      </section>
      {isFormOpen && (
        <div
          className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setIsFormOpen(false)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="glass-card w-full max-w-lg rounded-3xl p-8 border border-white/10 shadow-2xl relative max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={() => setIsFormOpen(false)}
              className="absolute top-6 right-6 cursor-pointer text-slate-500 hover:text-white transition-colors"
            >
              <HugeiconsIcon icon={Cancel02Icon} className="w-6 h-6" />
            </button>
            <h3 className="font-headline text-2xl font-bold text-white mb-6">New Task Node</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-[10px] uppercase tracking-widest text-slate-500 font-bold mb-2">Task Title</label>
                <input 
                  type="text" 
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  className="w-full bg-surface-container-lowest border border-white/5 rounded-xl px-4 py-3 text-white focus:border-primary/50 outline-none transition-all"
                  placeholder="Enter task title..."
                  required
                />
              </div>
                            <div>
                <label className="block text-[10px] uppercase tracking-widest text-slate-500 font-bold mb-2">Sprint</label>
                <input 
                  type="text" 
                  value={newSprint}
                  onChange={(e) => setNewSprint(e.target.value)}
                  className="w-full bg-surface-container-lowest border border-white/5 rounded-xl px-4 py-3 text-white focus:border-primary/50 outline-none transition-all"
                  placeholder="Enter sprint..."
                  required
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] uppercase tracking-widest text-slate-500 font-bold mb-2">Project Domain</label>
                  <input 
                    type="text" 
                    value={newProject}
                    onChange={(e) => setNewProject(e.target.value)}
                    className="w-full bg-surface-container-lowest border border-white/5 rounded-xl px-4 py-3 text-white focus:border-primary/50 outline-none transition-all"
                    placeholder="e.g. District 9"
                    required
                  />
                </div>
                <div>
                  <label className="block text-[10px] uppercase tracking-widest text-slate-500 font-bold mb-2">Priority Level</label>
                  <select 
                    value={newPriority}
                    onChange={(e) => setNewPriority(e.target.value)}
                    className="w-full bg-surface-container-lowest border border-white/5 rounded-xl px-4 py-3 text-white focus:border-primary/50 outline-none transition-all appearance-none"
                  >
                    <option value="Critical">Critical</option>
                    <option value="High">High</option>
                    <option value="Medium">Medium</option>
                    <option value="Low">Low</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-[10px] uppercase tracking-widest text-slate-500 font-bold mb-2">Strategic Objective</label>
                <textarea 
                  value={newObjective}
                  onChange={(e) => setNewObjective(e.target.value)}
                  className="w-full bg-surface-container-lowest border border-white/5 rounded-xl px-4 py-3 text-white focus:border-primary/50 outline-none transition-all h-32 resize-none"
                  placeholder="Describe the objective..."
                />
              </div>
              <button 
                type="submit"
                disabled={!newTitle.trim()}
                className="w-full py-4 rounded-xl cursor-pointer bg-primary text-on-primary font-headline font-bold uppercase tracking-widest hover:shadow-[0_0_30px_rgba(56,222,187,0.3)] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Deploy Task
              </button>
            </form>
          </div>
        </div>
      )}

      {confirmDeleteId && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-60 flex items-center justify-center p-4"
          onClick={cancelDelete}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="w-full max-w-sm bg-surface-container-high rounded-xl p-6 border border-white/10 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <h4 className="text-lg font-bold text-white mb-2">Delete task</h4>
            <p className="text-sm text-slate-300 mb-4">Are you sure you want to delete “ <span className="font-bold text-red-500">{confirmDeleteTitle}</span >”? <br />This action cannot be undone.</p>
            <div className="flex justify-end gap-3">
              <button
                onClick={cancelDelete}
                className="px-4 py-2 rounded cursor-pointer bg-surface-container-lowest text-white"
              >
                Cancel
              </button>
              <button
                onClick={confirmDelete}
                className="px-4 py-2 rounded cursor-pointer bg-error text-on-error"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TaskListTable;
