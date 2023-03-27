import React from 'react';
import { useState } from 'react'
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers';
import DayJS from 'dayjs';

type onAddTask = {
  text: string;
  reminder: Boolean;
  date: Date;
}

type addTaskType = {
  onAdd: (value: onAddTask) => void;
}

// TODO: this is an any type . this needs to change
// Compilation fails for this
const AddTask = ({onAdd}:addTaskType) => {
    const [text, setText] = useState('')
    const [reminder, setReminder] = useState(false)
    const [date, setDate] = React.useState(new Date());

  const handleChange = (newValue:any) => {
    setDate(newValue);
  };

    const onSubmit = (e:any) => {
        e.preventDefault()

        if (!text) {
          alert('Please add a task')
          return
        }

       
    
        onAdd({ text, reminder, date})

        setText('')
        setReminder(false)
        const newDate = new Date()
        setDate(newDate)
    }

  return (
    <form className = 'add-form' onSubmit = {onSubmit}>
        <div className = 'form-control'>
            <label> Task</label>
            <input 
              type='text' 
              placeholder = 'Add Task' 
              value = {text} 
              onChange = {(e) => setText(e.target.value)} />
        </div>
        <div> 
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <Stack spacing={3}>
            <DateTimePicker
              label="Date & Time picker"
              value={date}
              onChange={handleChange}
              renderInput={(params) => <TextField {...params} />}
            />
          </Stack>
      </LocalizationProvider>
        </div>
        <div className = 
        'form-control form-control-check'>
            <label> Alarm/Reminder </label>
            <input 
              type='checkbox' 
              checked = {reminder} 
              onChange = {(e) => setReminder(e.currentTarget.checked)} />
        </div>

        <input type = 'submit' value = 'Add Task' className = 'btn btn-block' />
    </form>

  )
}

export default AddTask
