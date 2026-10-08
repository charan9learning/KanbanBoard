import '../styles/TaskCard.css'

function TaskCard({ task, onDelete }) {
  return (
    <div className="task-card">
      <div className="card-header">
        <h3>{task.title}</h3>
        <button className="delete-btn" onClick={onDelete} title="Delete task">
          ✕
        </button>
      </div>
      <p className="card-description">{task.description}</p>
    </div>
  )
}

export default TaskCard
