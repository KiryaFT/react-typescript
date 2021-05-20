import React from 'react'
import { ITask } from '../interfaces'

type TaskListProps = {
  tasks: ITask[]
  onToggle(id: number): void
  onRemove: (id: number) => void
}

export const TaskList: React.FC<TaskListProps> = ({ 
  tasks, 
  onRemove, 
  onToggle 
}) => {
  if (tasks.length === 0) {
    return (
      <p className="center">There are no tasks</p>
    )
  }

  const removeHandler = (event: React.MouseEvent, id: number) => {
    event.preventDefault()
    onRemove(id)
  }

  return (
    <ul>
      {tasks.map(task => {
        const classes = ['task']
        if (task.completed) {
          classes.push('completed')
        }
        return (
          <li className={classes.join(' ')} key={task.id}>
            <label>
              <input 
                type="checkbox" 
                checked={task.completed} 
                onChange={onToggle.bind(null, task.id)}
              />
              <span>{task.title}</span>
              <i 
                className="material-icons red-text" 
                onClick={event => removeHandler(event, task.id)}
              >delete</i>
            </label>
          </li>
        )
        })}
    </ul>
  )
}