import React, { useState } from 'react';
import { tags } from '../../../utils';

const FitlerBtn = ({ onFilter}) => {
    const [isOpenFilter, setIsOpenFilter] = useState(false)

    // const handleFilter = (tag) => {
    //     const filtered = task.filter(
    //         t => t.tag.toLowerCase() === tag.toLowerCase()
    //     );

    //     // if(tag === 'all'){
    //     //     setStatusTask(task)
    //     // }else if (filtered.length === 0) {
    //     //     setStatusTask([]);
    //     // } else {
    //     //     setStatusTask(filtered);
    //     // }

    //     console.log(tag, filtered);
        

    //     setIsOpenFilter(false);
    // };
    return (
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
                            onClick={()=>onFilter(tag)}
                            type="button"
                            className="w-full capitalize text-left px-4 py-2 hover:bg-gray-50"
                        >
                            {tag}
                        </button>)
                    }
                </div>
            }
        </div>
    );
};

export default FitlerBtn;