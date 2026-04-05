import React from 'react';
import { NavLink } from 'react-router-dom';
import { HugeiconsIcon } from '@hugeicons/react';
import {
  Logout01Icon,
  SidebarLeftIcon,
  TaskDaily01Icon,
  UserFullViewIcon,
  UserIcon,
} from '@hugeicons/core-free-icons';





const Sidebar = () => {

  const navItems = [
    { icon: SidebarLeftIcon, label: 'Home', path: '/' },
    { icon: TaskDaily01Icon, label: 'Tasks', path: '/tasks' },
    { icon: UserIcon, label: 'Profile', path: '/profile' },
  ];
  return (
    <aside className="fixed left-0 top-0 h-full flex flex-col p-6 z-40 bg-background w-64 border-r border-white/5 shadow-2xl shadow-surface-container-lowest/50">
      <div className="mb-12 px-2">

        <div className='flex flex-row items-center justify-between '>
        <div className="h-10 w-10 rounded-xl bg-linear-to-br from-primary to-on-primary-container flex flex-row items-center justify-center mb-4 shadow-lg shadow-primary/20">
          <HugeiconsIcon icon={UserFullViewIcon} className='w-7 h-7' />
        </div>
            <p className="font-headline uppercase h-10 text-sm text-slate-500">Avatar Name</p>
        </div>
        <p className="font-headline uppercase tracking-[0.05em] text-[10px] text-slate-500 mb-1">Task Manager</p>
        <p className="font-headline text-xs text-primary font-bold">Deep Work Mode</p>
      </div>

      <nav className="flex-1 space-y-2">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-4 px-4 py-3 rounded-lg transition-all duration-300 group ${isActive
                ? 'bg-linear-to-br from-primary/20 to-on-primary-container/10 text-primary'
                : 'text-slate-500 hover:text-slate-300 hover:translate-x-1'
              }`
            }
          >
            <HugeiconsIcon icon={item.icon} className="w-5 h-5" />
            <span className="font-headline uppercase tracking-[0.05em] text-[10px] font-semibold">{item.label}</span>
          </NavLink>
        ))}
      </nav>

      <button className="mt-auto flex items-center justify-center cursor-pointer gap-2 w-full py-3 rounded-xl bg-linear-to-br from-primary to-on-primary-container text-on-primary font-headline font-bold text-xs uppercase tracking-wider scale-95 active:scale-90 transition-all shadow-lg shadow-primary/10">
        <HugeiconsIcon icon={Logout01Icon} className="w-5 h-5" />
        Log Out
      </button>
    </aside>
  );

};

export default Sidebar;