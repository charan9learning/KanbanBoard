import { useState, useEffect } from 'react'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import TaskColumn from './TaskColumn'
import TaskForm from './TaskForm'
import '../styles/KanbanBoard.css'

const COLUMNS = {
  todo: { id: 'todo', title: '📋 To Do', color: '#FF6B6B' },
  inProgress: { id: 'inProgress', title: '⚙️ In Progress', color: '#FFD93D' },
  review: { id: 'review', title: '👀 Review', color: '#6BCF7F' },
  done: { id: 'done', title: '✅ Done', color: '#4D96FF' }
}

function KanbanBoard({ showForm, setShowForm }) {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem('kanban-tasks')
    return saved ? JSON.parse(saved) : getDefaultTasks()
  })

  useEffect(() => {
    localStorage.setItem('kanban-tasks', JSON.stringify(tasks))
  }, [tasks])

  function getDefaultTasks() {
    return {
      todo: [
        { id: '1', title: 'Setup project structure', description: 'Initialize React + Electron setup' },
        { id: '2', title: 'Design calendar UI', description: 'Create mockups and component layout' },
        { id: '3', title: 'Setup database schema', description: 'Plan event storage and sync' }
      ],
      inProgress: [
        { id: '4', title: 'Implement date picker', description: 'Build interactive date selection' },
        { id: '5', title: 'Create event form', description: 'Add, edit, delete event interface' }
      ],
      review: [
        { id: '6', title: 'Navigation menu', description: 'Month/week/day view switcher' }
      ],
      done: [
        { id: '7', title: 'Project initialization', description: 'Completed base setup' },
        { id: '8', title: 'Setup version control', description: 'Git repo configured' }
      ]
    }
  }

  const handleAddTask = (columnId, newTask) => {
    const id = Date.now().toString()
    setTasks(prev => ({
      ...prev,
      [columnId]: [...prev[columnId], { id, ...newTask }]
    }))
    setShowForm(false)
  }

  const handleDeleteTask = (columnId, taskId) => {
    setTasks(prev => ({
      ...prev,
      [columnId]: prev[columnId].filter(task => task.id !== taskId)
    }))
  }

  const handleDragEnd = (result) => {
    const { source, destination, draggableId } = result

    if (!destination) return
    if (source.droppableId === destination.droppableId && source.index === destination.index) return

    const sourceColumn = source.droppableId
    const destColumn = destination.droppableId
    const task = tasks[sourceColumn][source.index]

    setTasks(prev => {
      const newTasks = { ...prev }
      newTasks[sourceColumn] = prev[sourceColumn].filter((_, i) => i !== source.index)
      newTasks[destColumn] = [
        ...prev[destColumn].slice(0, destination.index),
        task,
        ...prev[destColumn].slice(destination.index)
      ]
      return newTasks
    })
  }

  return (
    <div className="kanban-container">
      {showForm && <TaskForm onSubmit={handleAddTask} columns={COLUMNS} onClose={() => setShowForm(false)} />}
      <DragDropContext onDragEnd={handleDragEnd}>
        <div className="board">
          {Object.values(COLUMNS).map(column => (
            <Droppable key={column.id} droppableId={column.id}>
              {(provided, snapshot) => (
                <div
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  className={`column ${snapshot.isDraggingOver ? 'dragging-over' : ''}`}
                >
                  <TaskColumn
                    column={column}
                    tasks={tasks[column.id]}
                    onDelete={(taskId) => handleDeleteTask(column.id, taskId)}
                  />
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          ))}
        </div>
      </DragDropContext>
    </div>
  )
}

export default KanbanBoard
