import React from "react";

import { motion } from "motion/react";
import { HugeiconsIcon } from "@hugeicons/react";
import {
    Calendar03Icon,
    Delete04Icon,
    Download01Icon,
    Flag03Icon,
    LinkBackwardIcon,
    PlusSignCircleIcon,
    PlusSignSquareIcon,
    TaskEdit01Icon,
    Tick03Icon,
    WorkHistoryIcon,
} from '@hugeicons/core-free-icons';

import { useParams, Link } from "react-router-dom";
import { useTasks } from '../hooks/useTasks';
// Date + status utils
import { formatDate, getStatusBadgeClasses, getStatusColorClass, getPriorityBadgeClasses } from '../utils'

const TaskDetails = () => {
    const { id } = useParams();
    const { tasks } = useTasks();
    const task = tasks.find((t) => t.id === id) || tasks[0];

    return (
        <div>

            {/* Buttons Edit and Archive */}
            <div className="flex flex-wrap items-center justify-between gap-4">
                {/* Back  */}
                <Link
                    to="/tasks"
                    className="flex items-center gap-2 text-slate-400 hover:text-primary transition-colors group"
                >
                    <HugeiconsIcon icon={LinkBackwardIcon} className="h-3.5 w-3.5" />
                    <span className="font-label uppercase tracking-widest text-[10px]">
                        Back to Workspace
                    </span>
                </Link>

                <div className="flex items-center gap-3">
                    <button className="flex items-center cursor-pointer gap-2 px-4 py-2 rounded-xl bg-surface-container-highest text-white hover:bg-surface-bright transition-colors text-sm font-medium">
                        <HugeiconsIcon icon={TaskEdit01Icon} className="h-4 w-4" />
                        Edit
                    </button>
                    <button className="flex items-center cursor-pointer gap-2 px-4 py-2 rounded-xl bg-error/10 text-error hover:bg-error/20 transition-colors text-sm font-medium">
                        <HugeiconsIcon icon={Delete04Icon} className="h-4 w-4" />
                        Archive
                    </button>

                </div>

            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">

                {/* Task Details */}
                <div className="lg:col-span-8 space-y-6">
                    <motion.section className="glass-card rounded-3xl p-8 relative overflow-hidden" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                        <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/5 rounded-full blur-[80px]"></div>
                        <div className="space-y-4 relative z-10">
                            <div className="flex items-center gap-3">
                                <span className={`px-3 py-1 rounded-full ${getPriorityBadgeClasses(task.priority)} text-[10px] font-label uppercase tracking-wider font-bold`}>
                                    {task.priority}
                                </span>
                                <span className={`px-3 py-1 rounded-full ${getStatusBadgeClasses(task.status)} text-[10px] font-label uppercase tracking-wider`}>
                                    {task.status}
                                </span>
                            </div>
                            <h2 className="text-4xl sm:text-5xl font-headline font-extrabold tracking-tight text-white">
                                {task.title}
                            </h2>
                            <div className="flex items-center gap-6 text-slate-400 text-sm">
                                <div className="flex items-center gap-2">
                                    <HugeiconsIcon
                                        icon={Calendar03Icon}
                                        className="w-4 h-4 text-primary"
                                    />
                                    <span>{formatDate(task.dueDate)}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <HugeiconsIcon
                                        icon={Flag03Icon}
                                        className="w-4 h-4 text-primary"
                                    />
                                    <span>{task.sprint}</span>
                                </div>
                            </div>
                        </div>
                        <div className="mt-10 space-y-4 max-w-2xl relative z-10">
                            <p className="font-label uppercase tracking-widest text-[10px] text-primary">
                                Objective
                            </p>
                            <p className="text-on-surface-variant leading-relaxed text-lg font-light">
                                {task.objective}
                            </p>
                        </div>
                    </motion.section>

                    <motion.section className="bg-surface-container-low rounded-3xl p-8 border border-outline-variant/5" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.08 }}>
                        <div className="flex items-center justify-between mb-8">
                            <div>
                                <h3 className="font-headline font-bold text-xl text-white">
                                    Subtasks
                                </h3>
                                <p className="text-slate-500 text-xs mt-1">
                                    4 of 6 units completed
                                </p>
                            </div>
                            <div className="w-16 h-16 relative">
                                <svg className="w-full h-full transform -rotate-90">
                                    <circle
                                        className="text-surface-container-highest"
                                        cx="32"
                                        cy="32"
                                        fill="transparent"
                                        r="28"
                                        stroke="currentColor"
                                        strokeWidth="4"
                                    ></circle>
                                    <circle
                                        className={`${getStatusColorClass(task.status)}`}
                                        cx="32"
                                        cy="32"
                                        fill="transparent"
                                        r="28"
                                        stroke="currentColor"
                                        strokeDasharray="175.9"
                                        strokeDashoffset="58.6"
                                        strokeWidth="4"
                                    ></circle>
                                </svg>
                                <span className="absolute inset-0 flex items-center justify-center text-[10px] font-bold text-primary">
                                    66%
                                </span>
                            </div>
                        </div>
                        <div className="space-y-3">
                            {task.subtasks.map((subtask) => (
                                <div
                                    key={subtask.id}
                                    className="flex items-center gap-4 p-4 rounded-2xl bg-surface-container-high/50 hover:bg-surface-bright transition-all group border border-transparent hover:border-primary/20"
                                >
                                    <button
                                        className={`w-6 h-6 rounded-lg border-2 cursor-pointer flex items-center justify-center transition-colors
                    ${subtask.completed ? "border-primary/40 bg-primary/10" : "border-primary/20"}
                  `}
                                    >
                                        {subtask.completed && (
                                            <HugeiconsIcon
                                                icon={Tick03Icon}
                                                className="w-4 h-4 text-primary"
                                            />
                                        )}
                                    </button>
                                    <span
                                        className={`flex-1 text-sm
                    ${subtask.completed ? "text-on-surface line-through decoration-slate-600 opacity-60" : "text-on-surface"}
                  `}
                                    >
                                        {subtask.title}
                                    </span>
                                </div>
                            ))}
                        </div>
                        <button className="mt-6 flex items-center gap-2 cursor-pointer text-primary hover:text-on-primary-container transition-colors text-xs font-label uppercase tracking-widest px-2">
                            <HugeiconsIcon icon={PlusSignSquareIcon} className="h-4 w-4" />
                            Add New Subtask
                        </button>
                    </motion.section>
                </div>

                {/* Attachments */}
                <div className="lg:col-span-4 space-y-6 mt-4">
                    <motion.section className="glass-card rounded-3xl p-6 border border-outline-variant/10" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.16 }}>
                        <h4 className="font-headline font-bold text-lg text-white mb-6 flex items-center gap-2">
                            <HugeiconsIcon icon={Download01Icon} className="w-5 h-5 text-primary" />
                            Attachments
                        </h4>
                        <div className="space-y-4">
                            {task.attachments.map((file) => (
                                <div key={file.id} className="flex items-center gap-4 p-3 rounded-2xl bg-surface-container-low hover:bg-surface-container transition-colors cursor-pointer group">
                                    <div className="w-12 h-12 rounded-xl bg-surface-container-highest flex items-center justify-center text-primary">
                                        {file.type === 'PDF' ? <HugeiconsIcon icon={WorkHistoryIcon} className="w-6 h-6" /> : <HugeiconsIcon icon={PlusSignCircleIcon} className="w-6 h-6" />}
                                    </div>
                                    <div className="flex-1 overflow-hidden">
                                        <p className="text-sm font-medium text-white truncate">{file.name}</p>
                                        <p className="text-[10px] text-slate-500 font-label uppercase mt-0.5">{file.size} • {file.type}</p>
                                    </div>
                                    <HugeiconsIcon icon={Download01Icon} className="w-4 h-4 text-slate-500 group-hover:text-primary transition-colors" />
                                </div>
                            ))}
                        </div>
                    </motion.section>



                    {/* Activity Log */}

                    <motion.section className="glass-card rounded-3xl p-6 border border-outline-variant/10" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.24 }}>
                        <h4 className="font-headline font-bold text-lg text-white mb-6 flex items-center gap-2">
                            <HugeiconsIcon icon={WorkHistoryIcon} className="w-5 h-5 text-primary" />
                            Activity Log
                        </h4>
                        <div className="space-y-6 relative before:absolute before:left-3 before:top-2 before:bottom-2 before:w-px before:bg-outline-variant/20">
                            {task.activityLog.map((log) => (
                                <div key={log.id} className="relative pl-8">
                                    <div className={
                                        `absolute left-1 top-1 w-4 h-4 rounded-full ring-4 ring-background z-10
                    ${log.type === 'status' ? "bg-primary" : "bg-surface-container-highest"}
                  `}></div>
                                    <p className="text-[10px] font-label uppercase tracking-widest text-slate-500 mb-1">{log.timestamp}</p>
                                    <p className="text-sm text-white">
                                        <span className="font-bold text-primary">{log.user}</span> {log.action}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </motion.section>







                    <motion.section className="bg-surface-container-high rounded-3xl p-6 border border-outline-variant/5" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.32 }}>
                        <h4 className="font-headline font-bold text-xs uppercase tracking-[0.2em] text-slate-500 mb-6">Assigned Squad</h4>
                        <div className="flex -space-x-3 mb-6">
                            {task.assignedSquad.map((member) => (
                                <img
                                    key={member.id}
                                    alt={member.name}
                                    className="w-10 h-10 rounded-full border-2 border-background"
                                    src={member.avatar}
                                />
                            ))}
                            <div className="w-10 h-10 rounded-full border-2 border-background bg-surface-container-highest flex items-center justify-center text-[10px] font-bold text-primary">+2</div>
                        </div>
                        <button className="w-full py-3 cursor-pointer rounded-xl border border-primary/20 text-on-surface-variant text-sm hover:bg-surface-bright transition-colors">
                            Manage Access
                        </button>
                    </motion.section>
                </div>
            </div>
        </div>

    );
};

export default TaskDetails;
