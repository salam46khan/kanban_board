import React, { useState } from 'react';
import TaskList from '../TaskList';
import { tags } from '../../../utils';

const TodoStatus = ({task, status}) => {
    // console.log(task);
    const [statusTask, setStatusTask] = useState(task)
    const [isOpenSort, setIsOpenSort] = useState(false)
    const [isOpenFilter, setIsOpenFilter] = useState(false)

    const handleSort = (order) =>{
        const sorted = [...statusTask].sort((a, b) => {
            const dateA = new Date(a.date);
            const dateB = new Date(b.date);
            console.log(dateA, dateB);
            
            const newData = order === "asc" ? dateB - dateA : dateA - dateB; 
            console.log("===",newData, "=");
            return newData
        });

        setStatusTask(sorted);

        setIsOpenSort(false)
    }

    const handleFilter = (tag) =>{
        console.log(tag);
        // if(tag === "all"){
        //     setStatusTask(task)
        // }else{
        //     const filterTask = statusTask.filter(t => t.tag.toLowerCase() === tag.toLowerCase())
        //     setStatusTask(filterTask)
        // }
        const filterTask = statusTask.filter(t => t.tag.toLowerCase() === tag.toLowerCase())
        setStatusTask(filterTask)
        
        setIsOpenFilter(false)
    }

    console.log(statusTask);
    
    
    return (
        <div className="flex-1 flex flex-col min-w-0 w-full">
            <div className="flex items-center gap-3 mb-6">
                <div className="flex items-center gap-3">
                    <h2
                        className="text-lg font-semibold text-gray-900"
                    >
                        {status}
                    </h2>
                    <span
                        className="text-sm font-medium text-gray-500 bg-gray-100 px-2.5 py-1 rounded-full"
                        >{task?.length ? task.length : 0}</span
                    >
                </div>

                <div className="ml-auto flex items-center gap-2">
                    <div className="relative">
                        <button
                            onClick={()=>setIsOpenFilter(!isOpenFilter)}
                            type="button"
                            className="flex items-center gap-2 px-3 py-1.5 text-sm text-gray-600 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 focus:outline-none"
                        >
                            <svg
                                className="w-4 h-4"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414V19a1 1 0 01-.553.894l-2 1A1 1 0 0110 20v-6.293L3.293 7.293A1 1 0 013 6.586V4z"
                                ></path>
                            </svg>
                            Filter
                        </button>
                        {
                            isOpenFilter &&
                            <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-xl shadow-lg text-sm text-gray-700 py-2 z-40" >
                                <p
                                    className="px-4 pb-2 text-xs font-semibold text-gray-400 uppercase tracking-wider"
                                >
                                    Filter by tag
                                </p>
                                {
                                    tags.map(tag => <button
                                        key={tag}
                                        onClick={()=>handleFilter(tag)}
                                        type="button"
                                        className="w-full capitalize text-left px-4 py-2 hover:bg-gray-50"
                                    >
                                        {tag}
                                    </button>)
                                }
                            </div>
                        }
                    </div>

                    <div className="relative">
                        <button
                        onClick={()=> setIsOpenSort(!isOpenSort)}
                            type="button"
                            className="flex items-center gap-2 px-3 py-1.5 text-sm text-gray-600 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 focus:outline-none"
                        >
                            <svg
                                className="w-4 h-4"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M4 6h16M8 12h12M12 18h8"
                                ></path>
                            </svg>
                            Sort
                        </button>
                        {
                            isOpenSort &&
                            <div
                                className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-xl shadow-lg text-sm text-gray-700 py-2 z-40"
                            >
                                <p
                                    className="px-4 pb-2 text-xs font-semibold text-gray-400 uppercase tracking-wider"
                                >
                                    Sort by date
                                </p>
                                <button
                                    type="button"
                                    onClick={()=>handleSort("asc")}
                                    className="w-full text-left px-4 py-2 hover:bg-gray-50"
                                >
                                    Newest first
                                </button>
                                <button
                                    type="button"
                                    onClick={()=>handleSort("desc")}
                                    className="w-full text-left px-4 py-2 hover:bg-gray-50"
                                >
                                    Oldest first
                                </button>
                            </div>
                        }
                    </div>
                </div>
            </div>

            <div
                className="space-y-4 flex-1 overflow-visible lg:overflow-y-auto"
            >
                {
                    
                    statusTask.map(t => <TaskList key={t?.id} task={t}/>)
                }
                
            </div>
        </div>
    );
};

export default TodoStatus;