import { useState } from "react";
import TaskCard from "../components/TaskCard";

export default function InternDashboard({ setIsLoggedIn }) {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Fix UI Bug", description: "Resolve navbar alignment issue", status: "todo" },
    { id: 2, title: "Write Docs", description: "Add API usage in project readme", status: "in-progress" },
    { id: 3, title: "Testing", description: "Check login flow properly", status: "done" },
  ]);

  const handleMove = (taskId, newStatus) => {
    setTasks(tasks.map(task => task.id === taskId ? { ...task, status: newStatus } : task));
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("role");
    window.location.href = "/login";
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Intern Dashboard 👩‍💻</h2>
      <button onClick={handleLogout} style={{ marginBottom: "20px" }}>Logout</button>

      <div style={{ display: "flex", gap: "20px" }}>
        {/* To Do Column */}
        <div style={{ flex: 1, background: "#f8d7da", padding: "10px", borderRadius: "8px" }}>
          <h3>📋 To Do</h3>
          {tasks.filter(task => task.status === "todo").map(task => (
            <TaskCard key={task.id} task={task} onMove={handleMove} />
          ))}
        </div>

        {/* In Progress Column */}
        <div style={{ flex: 1, background: "#fff3cd", padding: "10px", borderRadius: "8px" }}>
          <h3>⚡ In Progress</h3>
          {tasks.filter(task => task.status === "in-progress").map(task => (
            <TaskCard key={task.id} task={task} onMove={handleMove} />
          ))}
        </div>

        {/* Done Column */}
        <div style={{ flex: 1, background: "#d4edda", padding: "10px", borderRadius: "8px" }}>
          <h3>✅ Done</h3>
          {tasks.filter(task => task.status === "done").map(task => (
            <TaskCard key={task.id} task={task} onMove={handleMove} />
          ))}
        </div>
      </div>
    </div>
  );
}
