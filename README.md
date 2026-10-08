# Desktop Calendar App - Kanban Board

A modern, interactive kanban board for organizing the development workflow of a desktop calendar application.

## Features

- 📋 **Four-Column Workflow**: To Do, In Progress, Review, Done
- 🎯 **Drag & Drop**: Intuitive task management with beautiful drag-and-drop interface
- 💾 **Local Storage**: Tasks persist across browser sessions
- ✨ **Modern UI**: Beautiful gradient design with smooth animations
- 📱 **Responsive**: Works seamlessly on desktop and mobile devices
- 🎨 **Color-Coded Columns**: Visual distinction for different workflow stages

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The app will open automatically at `http://localhost:3000`

### Build for Production

```bash
npm run build
```

## Usage

1. **Add a Task**: Click the "+ New Task" button to create a new task
2. **Drag Tasks**: Drag tasks between columns to update their status
3. **Delete Tasks**: Click the "✕" button on a task card to remove it
4. **View Details**: Each task shows a title and description

## Columns

- **📋 To Do**: Tasks waiting to be started
- **⚙️ In Progress**: Currently active tasks
- **👀 Review**: Tasks pending review
- **✅ Done**: Completed tasks

## Project Structure

```
src/
├── components/
│   ├── KanbanBoard.jsx    # Main board component
│   ├── TaskColumn.jsx     # Column container
│   ├── TaskCard.jsx       # Individual task card
│   └── TaskForm.jsx       # Task creation form
├── styles/
│   ├── KanbanBoard.css
│   ├── TaskColumn.css
│   ├── TaskCard.css
│   └── TaskForm.css
├── App.jsx
├── App.css
├── main.jsx
└── index.css
```

## Technologies Used

- **React 18**: UI framework
- **Vite**: Build tool and dev server
- **React Beautiful DnD**: Drag and drop library
- **CSS3**: Styling with modern features

## Features for Desktop Calendar App Development

The kanban board comes pre-configured with sample tasks for desktop calendar app development:

- Setup project structure
- Design calendar UI
- Implement date picker
- Create event form
- Navigation menu (month/week/day views)
- Database schema planning

Feel free to customize tasks to match your specific development needs!

## License

MIT
