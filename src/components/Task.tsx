import React from 'react';
import { GiHamburger} from 'react-icons/gi'

type taskType = {
  task: any,
  onDelete: (value: string) => {},
  onToggle: (value: string) => {},
}

const Task = ({task, onDelete, onToggle}: taskType) => {
  console.log(task);
  return (
    <div className = {`task ${task.reminder ? 
        'reminder' : ''}`} onDoubleClick ={() =>
    onToggle(task.id)}>
        <h3>{task.text} <GiHamburger style = {{color: 
        'yellow', cursor: 'pointer'}} 
        onClick = {() => onDelete(task.id)}
        />
        </h3>
        <p>{task.date.toUTCString()}</p>
    </div>
  )
}

export default Task
