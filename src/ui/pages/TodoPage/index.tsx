import { NewTask, TaskItem, TodoTitle } from '~/ui/components'
import { taskItems } from '~/mock'
import { TaskItem as TaskItemType, TaskStatus } from '~/types'
import { getNewTaskId } from '~/utils/uuid'
import { useState } from 'react'
import { TASK_STATUSES } from '~/constants'

export const TodoPage = () => {

  const [tasks, setTasks] = useState<TaskItemType[]>(taskItems)

  const getNewTask = (taskTitle: string): TaskItemType => ({
    id: getNewTaskId(),
    title: taskTitle,
    description: '',
    createdAt: '',
    status: TASK_STATUSES.PENDING
  })

  const createNewTask = (taskTitle: string) => {
    const newTask = getNewTask(taskTitle)
    setTasks(currentTasks => [...currentTasks, newTask])
  }

  const changeTaskStatus = (id: string, newStatus: TaskStatus) => {
    setTasks(currentTasks => {
      const updatedTasks = currentTasks?.map(task => task?.id === id ? { ...task, status: newStatus } : { ...task })
      return updatedTasks ?? []
    })
  }

  return (
    <div className='w-96 flex flex-col justify-center gap-5'>
      <div className='pb-2'>
        <TodoTitle title='My Awesome Todo' />
      </div>
      <NewTask onCreate={ createNewTask } />
      <div className='w-full bg-white p-5'>
        <ul>
          {tasks?.map(ti => (
            <TaskItem 
              key={ti?.id} 
              task={ti} 
              onToggleStatus={ changeTaskStatus }
            />
          ))}
        </ul>
      </div>
    </div>
  )
}
