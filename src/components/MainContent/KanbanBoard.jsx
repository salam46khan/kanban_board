
import { useContext, useState } from 'react';
import { TaskProvider } from '../../Context';
import TaskStatus from './KanbanStatus/TaskStatus';

const KanbanBoard = () => {
    const {tasks, setTasks} = useContext(TaskProvider)
    

    const todo = tasks.filter(task => task.status === "To-do")
    const progress = tasks.filter(task => task.status === "In Progress")
    const done = tasks.filter(task => task.status === "Done")

    // console.log(tasks, todo, progress, done);
    // console.log("filter",todo, 'fn:', todoTask);
    
    const handleSort = (order, status) =>{
        console.log(order, status);

        const sorted = tasks
        .filter(t => t.status === status)       // only selected status
        .sort((a, b) => {
            const dateA = new Date(a.date);
            const dateB = new Date(b.date);
            return order === "asc" ? dateA - dateB : dateB - dateA;
        });

        const others = tasks.filter(t => t.status !== status);

        setTasks([...others, ...sorted])
    }
    
    
    return (
        <div className="flex-1 p-4 sm:p-6 lg:p-8 min-h-0">
            <div className="flex flex-col gap-6 xl:flex-row h-full">
                <TaskStatus tasks={todo} OnSort={handleSort}>Todo</TaskStatus>
                <TaskStatus tasks={progress} OnSort={handleSort}>In Progress</TaskStatus>
                <TaskStatus tasks={done} OnSort={handleSort}>Done</TaskStatus>
            </div>
        </div>
    );
};

export default KanbanBoard;