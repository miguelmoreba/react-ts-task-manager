import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from "react";
import AddTask from "./components/AddTask";

function App() {

  const [showAddTask, setShowAddTask] = useState(false);

  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctors Appointment",
      day: "Feb 5th at 2:30pm",
      reminder: true,
    },
    {
      id: 2,
      text: "Meeting at School",
      day: "Feb 6th at 1:30pm",
      reminder: true,
    },
    {
      id: 3,
      text: "Food Shopping",
      day: "Feb 5th at 2:30pm",
      reminder: false,
    },
  ]);

  // Add Task

  const addTask = (task) => {
    const id = Math.floor(Math.random() * 1000) + 1;
    const newTask = {id, ...task}
    setTasks([...tasks, newTask]);
  }


  // Delete task
  const deleteTask = (id: number) => {
    // console.log('delete ', id);
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Toggle reminder

  const toggleReminder = (id: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  return (
    <div className="container">
      <Header showAddTask={showAddTask} onAdd={() => setShowAddTask(!showAddTask)} title="Task Tracker" />
      {showAddTask && <AddTask onAdd={addTask}/>}
      {tasks.length > 0 ? (
        <Tasks
          onToggle={toggleReminder}
          tasks={tasks}
          onDelete={deleteTask}
        ></Tasks>
      ) : (
        "No tasks to show"
      )}
    </div>
  );
}

export default App;
