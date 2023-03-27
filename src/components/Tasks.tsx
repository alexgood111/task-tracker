import React from 'react';
import Task from './Task'

type taskType = {
  tasks: any,
  onDelete: any;
  onToggle: any;
}

const Tasks = ({tasks, onDelete, onToggle}:taskType) => {
  return (
    <>
    {tasks.map((task:any) => (
    <Task key = {task.id} task = {task} onDelete = {onDelete} onToggle = {onToggle}/>
    ))}
    </>
  )
}

export default Tasks
