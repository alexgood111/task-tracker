import React from 'react';
import { useState} from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'


function App() {
  const [showAddTask, setShowAddTask] = useState (false)
  const [tasks, setTasks] = useState<any>([])

    //add task

    const addTask = (task: any) => {
     const id = Math.floor(Math.random() * 10000) + 1
    const newTask = {id, ...task }
    setTasks ([...tasks, newTask])
    }


    //delete Task
    const deleteTask = (id: number) => {
      setTasks(tasks.filter((task: any) => task.id !==
      id))
    }

//toggle Reminder

const toggleReminder = (id: number) => {
  setTasks(tasks.map((task: any) => task.id === id ? 
  { ...task, reminder: !task.reminder } : task))
}

  return (
    <div className="container">
      <Header onAdd = { () => setShowAddTask(!showAddTask)} showAdd= {showAddTask}/>
      {showAddTask && <AddTask onAdd = {addTask}/>}
      {tasks.length > 0? (<Tasks tasks = {tasks} 
      onDelete = {deleteTask} onToggle = 
      {toggleReminder}
      />) : ('No Tasks Yet...')}
    </div>
  );
}

export default App;
