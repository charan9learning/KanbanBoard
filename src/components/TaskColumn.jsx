import { Draggable } from 'react-beautiful-dnd'
import TaskCard from './TaskCard'
import '../styles/TaskColumn.css'

function TaskColumn({ column, tasks, onDelete }) {
  return (
    <div className="task-column">
      <div className="column-header" style={{ borderTopColor: column.color }}>
        <h2>{column.title}</h2>
        <span className="task-count">{tasks.length}</span>
      </div>
      <div className="task-list">
        {tasks.map((task, index) => (
          <Draggable key={task.id} draggableId={task.id} index={index}>
            {(provided, snapshot) => (
              <div
                ref={provided.innerRef}
                {...provided.draggableProps}
                {...provided.dragHandleProps}
                className={`draggable-task ${snapshot.isDragging ? 'dragging' : ''}`}
              >
                <TaskCard task={task} onDelete={() => onDelete(task.id)} />
              </div>
            )}
          </Draggable>
        ))}
      </div>
    </div>
  )
}

export default TaskColumn
