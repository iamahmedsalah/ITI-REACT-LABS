import { useState, useEffect, useMemo, useCallback } from "react";

import { TaskContext } from "./taskContextValue";
import { tasks as mockTasks } from "../assets/mockData";

const STORAGE_KEY = "task_manager_tasks_v1";

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      const parsed = raw ? JSON.parse(raw) : null;
      if (Array.isArray(parsed) && parsed.length > 0) return parsed;
      // fallback to bundled mock data
      return Array.isArray(mockTasks) ? mockTasks : [];
    } catch (err) {
      console.log(err);
      return Array.isArray(mockTasks) ? mockTasks : [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
    } catch (err) {
      console.log(err);
    }
  }, [tasks]);

  const addTask = useCallback((newTaskData) => {
    const newTask = {
      ...newTaskData,
      id: crypto.randomUUID(),
      subtasks: [],
      attachments: [],
      assignedSquad: [],
      activityLog: [
          {
            id: `l${Date.now()}`,
            user: "Current User",
            action: "created this task",
            sprint: "",
            timestamp: new Date().toISOString(),
            type: "system",
          },
      ],
    };
    setTasks((prev) => [newTask, ...prev]);
  }, []);

  const updateTaskStatus = useCallback((taskId, status) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === taskId
          ? {
              ...task,
              status,
              activityLog: [
                {
                  id: `l${Date.now()}`,
                  user: "Current User",
                  action: `updated status to ${status}`,
                  timestamp: new Date().toISOString(),
                  type: "status",
                },
                ...task.activityLog,
              ],
            }
          : task,
      ),
    );
  }, []);

  const deleteTask = useCallback((taskId) => {
    setTasks((prev) => prev.filter((t) => t.id !== taskId));
  }, []);

  const getTaskById = useCallback((id) => tasks.find((t) => t.id === id), [tasks]);

  const value = useMemo(() => ({
    tasks,
    addTask,
    updateTaskStatus,
    deleteTask,
    getTaskById
  }), [tasks, addTask, updateTaskStatus, deleteTask, getTaskById]);

  return (
    <TaskContext.Provider value={value}>
      {children}
    </TaskContext.Provider>
  );
};
