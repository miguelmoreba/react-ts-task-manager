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

    const config = {
      headers: {
        'Content-type': 'application/json' 
      }
    }

    const data = JSON.stringify(task);

    axios.post(`http://localhost:5000/tasks`, data, config)
      .then(res => {
        setTasks([...tasks, res.data])
      });
  };

  // Delete task
  const deleteTask = (id: number) => {

    axios.delete(`http://localhost:5000/tasks/${id}`, {
      method: 'DELETE'
    })
      .then(() => {
        setTasks(tasks.filter((task) => task.id !== id));
      });
  };

  // Toggle reminder

  const toggleReminder = (id: number) => {

    const config = {
      headers: {
        'Content-type': 'application/json' 
      }
    }

    axios.get(`http://localhost:5000/tasks/${id}`)
      .then((res) => {
        const taskToToggle = res.data;
        const updTask = {...taskToToggle, reminder: !taskToToggle.reminder}
        const data = JSON.stringify(updTask);
        axios.put(`http://localhost:5000/tasks/${id}`, data, config)
          .then((res) => {
            setTasks(
              tasks.map((task) =>
                task.id === id ? res.data : task
              )
            );
          })
      });
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
