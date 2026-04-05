
import { motion } from "motion/react"
import { HugeiconsIcon } from '@hugeicons/react';
import React from 'react';
import {
    BorderFullIcon,
    HourglassIcon,
    Progress04Icon,
    TaskDone01Icon,
} from '@hugeicons/core-free-icons';

// Components
import Header from "../components/common/Header";
import StatCard from "../components/common/StatCard";
import TaskList from "../components/task/TaskListTable";

const task = () => {
    return (
        <div>

            {/* HEADER */}
            <Header
                title='All Tasks'
                description='Manage your focused work environment and track project milestones through our high-fidelity task management system.' />

            {/* STATS */}
            <motion.div
                className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8'
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >

                
                <StatCard name='Total Completed' icon={TaskDone01Icon} value={89} color='#5ffbd6' />
                <StatCard name='In Progress' icon={Progress04Icon} value={11} color='#5ffbd6' />
                <StatCard name='Total Tasks' icon={BorderFullIcon} value={100} color='#5ffbd6' />
                <StatCard name='Time Spent' icon={HourglassIcon} value={"23H"} color='#5ffbd6' />
            </motion.div>

            {/* TASK LIST */}
            <TaskList />

        </div>
    );
};

export default task;