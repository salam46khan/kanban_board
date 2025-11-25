const data = [
  {
    id: 1,
    title: "Wireframes",
    description: "Create high-fidelity UI wireframes for homepage",
    tag: "design",
    date: "02/10/2025",
    status: "To-do"
  },
  {
    id: 2,
    title: "API Integration Setup",
    description: "Configure initial backend API routes and auth",
    tag: "backend",
    date: "02/08/2025",
    status: "In Progress"
  },
  {
    id: 3,
    title: "Social Media Campaign",
    description: "Plan marketing campaign for product launch",
    tag: "marketing",
    date: "02/05/2025",
    status: "Done"
  },
  {
    id: 4,
    title: "User Onboarding Flow",
    description: "Create UI screens and flow for user signup process",
    tag: "creative",
    date: "02/12/2025",
    status: "To-do"
  },
  {
    id: 5,
    title: "Server Deployment",
    description: "Deploy backend to live environment",
    tag: "setup",
    date: "02/07/2025",
    status: "Done"
  },
  {
    id: 6,
    title: "Dashboard UI Development",
    description: "Develop React components for user dashboard",
    tag: "development",
    date: "02/11/2025",
    status: "In Progress"
  },
  {
    id: 7,
    title: "Client Meeting",
    description: "Review requirements and milestones with client",
    tag: "operations",
    date: "02/06/2025",
    status: "Done"
  },
  {
    id: 8,
    title: "Interactive Prototype",
    description: "Add interactions and animations to prototype",
    tag: "design",
    date: "02/09/2025",
    status: "In Progress"
  }
];


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
