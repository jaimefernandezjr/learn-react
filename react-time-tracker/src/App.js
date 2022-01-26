import { useState, useEffect } from 'react'
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';

function App() {
const [showAddTask, setShowAddTask] = useState(false)
const [tasks, setTasks] = useState([
    {
      "id": "1",
      "text": "'Doctors Appointment'",
      "day": "'Feb 5th at 2:30pm'",
      "reminder": true
  },
  {
      "id": "2",
      "text": "'Meeting at School'",
      "day": "'Feb 6th at 1:30pm'",
      "reminder": true
  },
  {
      "id": "3",
      "text": "'Food Shopping'",
      "day": "'Feb 5th at 2:30pm'",
      "reminder": false
    }
])

//   useEffect(() => {
//     const getTasks = async () => {
//       const tasksFromServer = await fetchTasks();
//       setTasks(tasksFromServer);
//     }

//     getTasks()
//   }, [])

// //Fetch Tasks
// const fetchTasks = async () => {
//   const res = await fetch('http://localhost:5000/tasks');
//   const data = await res.json();

//   console.log(data);
// }

//Add Task
const addTask = (task) => {
  const id = Math.floor(Math.random() * 10000) + 1;

  const newTask = { id, ...task }
  setTasks([ ...tasks, newTask ])

}

//Delete task
const deleteTask = (id) => {
  setTasks(tasks.filter((task) => 
    task.id !== id
  ))
}

//Toggle Reminder
const toggleReminder = (id) => {
  setTasks(
    tasks.map((task) => 
      task.id === id ? { ...task, reminder: !task.reminder } : task
  ))
}

  return (
    <div className="container">
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
      {showAddTask && <AddTask onAdd={addTask}/>}
      {tasks.length > 0 ? (
      <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>
      ) : ('No Tasks to Show')
      }
    </div>
  );
}

export default App;
