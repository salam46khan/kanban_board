
import { useState } from 'react';
import Header from './Header';
import KanbanBoard from './KanbanBoard';
import { getAllTask, getTodoTask } from '../../data/taskData';
import AddTaskModal from '../Modals/AddTaskModal';
import { TaskProvider } from '../../Context';

const MainContent = () => {
    const [tasks, setTasks] = useState(getAllTask);
    // const todo = tasks.filter(task => task.status === "To-do")
    // const [todoTask, setTodoTask] = useState(todo)
    // console.log(tasks);
    // console.log(todo);
    
    // console.log(todoTask);


    const [openModal, setOpenModel] = useState(false)

    // handle 

    
    return (
        <TaskProvider.Provider value={{tasks, setTasks}}>
            <main className="flex-1 flex flex-col min-h-0">
                <Header onOpen={()=>setOpenModel(true)}/>
                    {
                        openModal && <AddTaskModal onClose={()=>setOpenModel(false)}/>
                    }
                
                <KanbanBoard />
            </main>
        </TaskProvider.Provider>
    );
};

export default MainContent;