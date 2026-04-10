
import { useState } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { Cancel02Icon } from '@hugeicons/core-free-icons';

const AddTaskModal = ({ isOpen, onClose, onAdd }) => {
  const [newTitle, setNewTitle] = useState('');
  const [newProject, setNewProject] = useState('');
  const [newSprint, setNewSprint] = useState('');
  const [newPriority, setNewPriority] = useState('Medium');
  const [newObjective, setNewObjective] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const title = newTitle.trim();
    if (!title) return;
    onAdd({
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
    setNewSprint('');
    setNewPriority('Medium');
    setNewObjective('');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="glass-card w-full max-w-lg rounded-3xl p-8 border border-white/10 shadow-2xl relative max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={onClose}
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
  );
};

export default AddTaskModal;
