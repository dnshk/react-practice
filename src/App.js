import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'


const App = () => {
  const [tasks, setTasks] = useState([
    {
        id:1,
        text: "Task 1",
        day: "Day 1",
        reminder: true,
    },
    {
        id:2,
        text: "Task 2",
        day: "Day 2",
        reminder: true,
    },
    {
        id:3,
        text: "Task 3",
        day: "Day 3",
        reminder: false,
    },
    
])
  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks} />
    </div>
  );
}

export default App;
