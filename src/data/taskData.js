const data = [
  {
    "taskTitle": "Wireframes",
    "taskDescription": "Create high-fidelity UI wireframes for homepage",
    "tag": "design",
    "dueDate": "02/10/2025",
    "status": "To-do"
  },
  {
    "taskTitle": "API Integration Setup",
    "taskDescription": "Configure initial backend API routes and auth",
    "tag": "backend",
    "dueDate": "02/08/2025",
    "status": "In Progress"
  },
  {
    "taskTitle": "Social Media Campaign",
    "taskDescription": "Plan marketing campaign for product launch",
    "tag": "marketing",
    "dueDate": "02/05/2025",
    "status": "Done"
  },
  {
    "taskTitle": "User Onboarding Flow",
    "taskDescription": "Create UI screens and flow for user signup process",
    "tag": "creative",
    "dueDate": "02/12/2025",
    "status": "To-do"
  },
  {
    "taskTitle": "Server Deployment",
    "taskDescription": "Deploy backend to live environment",
    "tag": "setup",
    "dueDate": "02/07/2025",
    "status": "Done"
  },
  {
    "taskTitle": "Dashboard UI Development",
    "taskDescription": "Develop React components for user dashboard",
    "tag": "development",
    "dueDate": "02/11/2025",
    "status": "In Progress"
  },
  {
    "taskTitle": "Client Meeting",
    "taskDescription": "Review requirements and milestones with client",
    "tag": "operations",
    "dueDate": "02/06/2025",
    "status": "Done"
  },
  {
    "taskTitle": "Interactive Prototype",
    "taskDescription": "Add interactions and animations to prototype",
    "tag": "design",
    "dueDate": "02/09/2025",
    "status": "In Progress"
  }
]

const getAllTask = () =>{
    return data
}

const getDoneTask = () =>{
    const done = data.filter(data=> data.status === "Done")
    return done
}

const getProgressTask = () =>{
    const process = data.filter(data =>data.status === "In Progress")
    return process
}
const getTodoTask = () =>{
    const todo = data.filter(data =>data.status === "To-do")
    return todo
}

export {
    getAllTask, 
    getDoneTask, 
    getProgressTask,
    getTodoTask
}
