
import { useState } from 'react';
import Header from './Header';
import KanbanBoard from './KanbanBoard';
import { getAllTask, getDoneTask } from '../../data/taskData';
import AddTaskModal from '../Modals/AddTaskModal';

const MainContent = () => {
    const [tasks, setTasks] = useState(getAllTask)
    // const [doneTasks, setDoneTasks] = useState(getDoneTask)
    console.log(tasks);
    const [openModal, setOpenModel] = useState(false)
    

    const handleAddingTask = (data) =>{
        console.log(data, "-----");
        setTasks([...tasks, data])
    }

    
    return (
        <main className="flex-1 flex flex-col min-h-0">
            <Header onOpen={()=>setOpenModel(true)}/>
                {
                    openModal && <AddTaskModal onAddTask={handleAddingTask} onClose={()=>setOpenModel(false)}/>
                }
            
            <KanbanBoard tasks={tasks}/>
        </main>
    );
};

export default MainContent;