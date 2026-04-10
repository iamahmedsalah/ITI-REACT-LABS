
import { useState, useMemo } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  AddSquareIcon,
  ArrangeByLettersAZIcon,
  ArrangeByLettersZAIcon,
  FilterIcon,
  GridViewIcon,
  ListViewIcon,
} from '@hugeicons/core-free-icons';

import { useTasks } from '../../hooks/useTasks';

// Sub-components
import AddTaskModal from './AddTaskModal';
import DeleteConfirmModal from './DeleteConfirmModal';
import TaskListView from './TaskListView';
import TaskGridView from './TaskGridView';

const TaskListTable = () => {
  const { tasks, addTask, updateTaskStatus, deleteTask } = useTasks();
  const priorities = ['All', 'Critical', 'High', 'Medium'];
  
  const [filterPriority, setFilterPriority] = useState("All");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [sortDirection, setSortDirection] = useState('asc');
  const [viewMode, setViewMode] = useState('list');
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [activeMenuId, setActiveMenuId] = useState(null);
  
  // Delete confirmation modal state
  const [confirmDeleteId, setConfirmDeleteId] = useState(null);
  const [confirmDeleteTitle, setConfirmDeleteTitle] = useState('');

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
      return sortDirection === 'asc' 
        ? titleA.localeCompare(titleB) 
        : titleB.localeCompare(titleA);
    });

    return result;
  }, [tasks, filterPriority, sortDirection]);

  const requestDelete = (id, title) => {
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
            <div className="relative">
              <button
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                className={`flex items-center cursor-pointer gap-2 px-4 py-2 rounded-lg bg-surface-container-lowest border border-white/5 text-xs text-white hover:bg-surface-container-high transition-colors ${filterPriority !== 'All' ? 'border-primary/50 text-primary' : ''}`}
              >
                <HugeiconsIcon icon={FilterIcon} className={`w-3 h-3 transition-transform ${isFilterOpen ? 'rotate-180' : ''}`} />
                Priority: {filterPriority}
              </button>

              {isFilterOpen && (
                <div className="absolute top-full left-0 mt-2 w-30 bg-surface-container-highest border border-white/10 rounded-xl shadow-2xl z-50 py-2">
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
            </div>

            <button
              onClick={() => setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc')}
              className="flex items-center cursor-pointer gap-2 px-4 py-2 rounded-lg bg-surface-container-lowest border border-white/5 text-xs text-white hover:bg-surface-container-high transition-colors"
            >
              <HugeiconsIcon icon={sortDirection === 'asc' ? ArrangeByLettersAZIcon : ArrangeByLettersZAIcon} className="w-3.5 h-3.5" />
              Sort: {sortDirection === 'asc' ? 'A-Z' : 'Z-A'}
            </button>

            <button 
              onClick={() => setIsFormOpen(true)}
              className="flex items-center cursor-pointer gap-2 px-4 py-2 rounded-lg bg-primary/15 border border-white/5 text-sm hover:bg-surface-container-high transition-colors text-white"
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
          <TaskListView 
            tasks={filteredAndSortedTasks}
            onUpdateStatus={updateTaskStatus}
            onDeleteRequest={requestDelete}
            activeMenuId={activeMenuId}
            onMenuToggle={(id) => setActiveMenuId(activeMenuId === id ? null : id)}
          />
        ) : (
          <TaskGridView tasks={filteredAndSortedTasks} />
        )}
      </section>

      <AddTaskModal 
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
        onAdd={addTask}
      />

      <DeleteConfirmModal 
        isOpen={!!confirmDeleteId}
        title={confirmDeleteTitle}
        onClose={cancelDelete}
        onConfirm={confirmDelete}
      />
    </div>
  );
};

export default TaskListTable;
