import { useState } from 'react'
import '../styles/TaskForm.css'

function TaskForm({ onSubmit, columns, onClose }) {
  const [columnId, setColumnId] = useState('todo')
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (title.trim()) {
      onSubmit(columnId, { title, description })
      setTitle('')
      setDescription('')
    }
  }

  return (
    <div className="form-overlay">
      <div className="form-container">
        <h2>Create New Task</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Column</label>
            <select value={columnId} onChange={(e) => setColumnId(e.target.value)}>
              {Object.values(columns).map(col => (
                <option key={col.id} value={col.id}>{col.title}</option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label>Title *</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Task title"
              autoFocus
            />
          </div>
          <div className="form-group">
            <label>Description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Task description"
              rows="3"
            />
          </div>
          <div className="form-actions">
            <button type="button" onClick={onClose} className="cancel-btn">Cancel</button>
            <button type="submit" className="submit-btn">Create Task</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default TaskForm
