import Footer from "./components/Footer";
import About from "./components/About";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import { useState } from "react";
import Main from "./components/Main";

function App() {
  const [showAddTask, setShowAddTask] = useState(false);

  return (
    <Router>
      <div className="container">
        <Header
          showAddTask={showAddTask}
          onAdd={() => setShowAddTask(!showAddTask)}
          title="Task Tracker"
        />
        <Routes>
          <Route path="/" element={<Main showAddTask={showAddTask} />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
