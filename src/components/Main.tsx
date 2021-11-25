import Tasks from "./Tasks";
import { useEffect, useState } from "react";
import AddTask from "./AddTask";
import axios from "axios";

const Main = ({ showAddTask }) => {

  const [tasks, setTasks] = useState<any[]>([]);

  useEffect(() => {
    axios.get("http://localhost:5000/tasks").then((res) => {
      console.log(res.data);
      setTasks(res.data);
    });
  }, []);

  // Add Task

  const addTask = (task) => {
    const id = Math.floor(Math.random() * 1000) + 1;
    const newTask = { id, ...task };
    tasks.length > 0 && setTasks([...tasks, newTask]);
  };

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
    <>
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (
        <Tasks
          onToggle={toggleReminder}
          tasks={tasks}
          onDelete={deleteTask}
        ></Tasks>
      ) : (
        "No tasks to show"
      )}
    </>
  );
};

export default Main;
