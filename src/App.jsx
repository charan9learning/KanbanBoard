import { useState } from 'react'
import KanbanBoard from './components/KanbanBoard'
import './App.css'

function App() {
  const [showForm, setShowForm] = useState(false)

  return (
    <div className="app">
      <header className="app-header">
        <div className="header-content">
          <h1>📅 Desktop Calendar App</h1>
          <p>Development Kanban Board</p>
        </div>
        <button className="add-task-btn" onClick={() => setShowForm(!showForm)}>
          {showForm ? '✕ Close' : '+ New Task'}
        </button>
      </header>
      <KanbanBoard showForm={showForm} setShowForm={setShowForm} />
    </div>
  )
}

export default App
