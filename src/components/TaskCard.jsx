export default function TaskCard({ task, onMove }) {
  return (
    <div style={{ background: "#fff", padding: "10px", margin: "10px", borderRadius: "8px", boxShadow: "0px 2px 5px rgba(0,0,0,0.1)" }}>
      <h4>{task.title}</h4>
      <p>{task.description}</p>
      <button onClick={() => onMove(task.id, "todo")}>📋 To Do</button>
      <button onClick={() => onMove(task.id, "in-progress")}>⚡ In Progress</button>
      <button onClick={() => onMove(task.id, "done")}>✅ Done</button>
    </div>
  );
}
