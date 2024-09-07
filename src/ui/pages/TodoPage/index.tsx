import { NewTask, TaskItem } from '~/ui/components'
import { taskItems } from '~/mock'
import { TaskItem as TaskItemType } from '~/types'
import { getNewTaskId } from '~/utils/uuid'
import { useState } from 'react'

export const TodoPage = () => {

  const [tasks, setTasks] = useState<TaskItemType[]>(taskItems)

  const getNewTask = (taskTitle: string): TaskItemType => ({
    id: getNewTaskId(),
    title: taskTitle,
    description: '',
    createdAt: '',
    status: 'pending'
  })

  const createNewTask = (taskTitle: string) => {
    const newTask = getNewTask(taskTitle)
    setTasks(currentTasks => [...currentTasks, newTask])
  }

  return (
    <div className='w-96 flex flex-col justify-center gap-5'>
      <NewTask onCreate={ createNewTask } />
      <div className='w-full bg-white p-5'>
        <ul>
          {tasks?.map(ti => (
            <TaskItem 
              key={ti?.id} 
              { ...ti } 
            />
          ))}
        </ul>
      </div>
    </div>
  )
}
