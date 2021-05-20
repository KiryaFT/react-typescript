import React, { useState, useEffect } from 'react'
import { TaskForm } from '../components/TaskForm'
import { TaskList } from '../components/TaskList'
import { ITask } from '../interfaces'

declare var confirm: (question: string) => boolean

export const TasksPage: React.FC = () => {
  const [tasks, setTasks] = useState<ITask[]>([])

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('task') || '[]') as ITask[]

    setTasks(saved)
  }, [])

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  const addHandler = (title: string) => {
    const newTask: ITask = {
      title: title,
      id: Date.now(),
      completed: false
    }
    setTasks(prev => [newTask, ...prev])
  }
  
  const toggleHandler = (id: number) => {
    setTasks(prev => prev.map(task => {
      if (task.id === id) {
        return {
          ...task,
          completed: !task.completed
        }
      }
      return task
    }))
  }

  const removeHandler = (id: number) => {
    const shouldRemove = confirm('Are you sure?')
    if (shouldRemove) {
      setTasks(prev => prev.filter(task => task.id !== id))
    }
  }
  
  return (
    <React.Fragment>
      <TaskForm onAdd={addHandler} />
      <TaskList 
        tasks={tasks} 
        onToggle={toggleHandler} 
        onRemove={removeHandler} 
      />
    </React.Fragment>
  )
}
