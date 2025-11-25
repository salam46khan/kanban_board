import React, { useState } from 'react';

const AddTaskModal = ({onClose, onAddTask}) => {
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        tag: "design",
        date: "",
        status: "To-do"
    })
    const handleChange = (e) => {
        setFormData(task =>({
            ...task,
            [e.target.name] : e.target.value
        }))
    };

    const handleAddTask = (e) =>{
        e.preventDefault()
        const newTask = {
            id: crypto.randomUUID(),
            ...formData
        };
        onAddTask(newTask)
        onClose()
    }
    
    return (
        <div className="bg-gray-50/50 backdrop-blur-sm min-h-screen h-full absolute  top-0 left-0 w-full z-50">
            <div className="max-w-4xl mx-auto px-4 py-10 sm:py-12 scroll-auto">
                <div className="mb-8 flex items-center justify-between">
                    <div>
                        <button
                            onClick={onClose}
                            className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900"
                        >
                            <svg
                                className="w-4 h-4"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="1.5"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M15.75 19.5L8.25 12l7.5-7.5"
                                ></path>
                            </svg>
                            Back to board
                        </button>

                        <h1 className="text-3xl font-bold text-gray-900 mt-8">
                            Add Task
                        </h1>
                        <p className="text-sm text-gray-500">
                            Create a card for your board.
                        </p>
                    </div>
                </div>

                <div
                    className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6 sm:p-8"
                >
                    <form className="space-y-8">
                        <div className="grid grid-cols-1 gap-6">
                            <div>
                                <label
                                    for="title"
                                    className="block text-sm font-medium text-gray-700"
                                    >Task Title</label
                                >
                                <input
                                    type="text"
                                    name="title"
                                    value={formData.title}
                                    onChange={handleChange}
                                    id="title"
                                    placeholder="e.g. Wireframes"
                                    className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:border-gray-900 focus:outline-none"
                                    required
                                />
                            </div>

                            <div>
                                <label
                                    for="description"
                                    className="block text-sm font-medium text-gray-700"
                                    >Task Subtitle / Description</label
                                >
                                <input
                                    name="description"
                                    value={formData.description}
                                    onChange={handleChange}
                                    id='description'
                                    placeholder="Add context or acceptance criteria"
                                    className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:border-gray-900 focus:outline-none"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                            <div>
                                <label
                                    for="tag"
                                    className="block text-sm font-medium text-gray-700"
                                    >Tag</label
                                >
                                <select
                                    name="tag"
                                    value={formData.tag}
                                    onChange={handleChange}
                                    id='tag'
                                    className="mt-2 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 focus:border-gray-900 focus:outline-none"
                                >
                                    <option value="design">Design</option>
                                    <option value="operations">Operations</option>
                                    <option value="marketing">Marketing</option>
                                    <option value="creative">Creative</option>
                                    <option value="development">Development</option>
                                    <option value="backend">Backend</option>
                                    <option value="setup">Setup</option>
                                    <option value="infrastructure">
                                        Infrastructure
                                    </option>
                                    <option value="documentation">
                                        Documentation
                                    </option>
                                </select>
                            </div>

                            <div>
                                <label
                                    for="date"
                                    className="block text-sm font-medium text-gray-700"
                                    >Due Date</label
                                >
                                <input
                                    type="date"
                                    id="date"
                                    name="date"
                                    value={formData.date}
                                    onChange={handleChange}
                                    className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-900 focus:border-gray-900 focus:outline-none"
                                />
                            </div>

                            <div>
                                <label
                                    for="status"
                                    className="block text-sm font-medium text-gray-700"
                                    >Status</label
                                >
                                <select
                                    id="status"
                                    name="status"
                                    value={formData.status}
                                    onChange={handleChange}
                                    className="mt-2 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 focus:border-gray-900 focus:outline-none"
                                >
                                    <option value="todo">To-do</option>
                                    <option value="in-progress">In Progress</option>
                                    <option value="done">Done</option>
                                </select>
                            </div>
                        </div>

                        <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
                            <button
                                onClick={onClose}
                                className="inline-flex items-center justify-center rounded-xl border border-gray-200 px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50"
                                >Cancel
                            </button>
                            <button
                                onClick={handleAddTask}
                                type="submit"
                                className="inline-flex items-center justify-center rounded-xl bg-gray-900 px-6 py-3 text-sm font-semibold text-white hover:bg-gray-800"
                            >
                                Add Task
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddTaskModal;