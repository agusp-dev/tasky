import { useMemo, useState } from 'react'
import { Filters, NewTask, TaskItem, TodoTitle } from '~/ui/components'
import { taskItems, filterItems } from '~/mock'
import { TaskItem as TaskItemType, TaskStatus } from '~/types'
import { getNewTaskId } from '~/utils/uuid'
import { TASK_STATUSES } from '~/constants'
import { Filter } from '~/types'

export const TodoPage = () => {

  const [tasks, setTasks] = useState<TaskItemType[]>(taskItems)
  const [filter, setFilter] = useState<Filter>(filterItems[0])

  const filteredTasks = useMemo(() => {
    if (!filter || !tasks?.length) return []
    if (filter?.key === 'ALL') return tasks
    if (filter?.key === 'PENDING') return tasks?.filter((task: TaskItemType) => task?.status === 'PENDING')
    if (filter?.key === 'COMPLETED') return tasks?.filter((task: TaskItemType) => task?.status === 'COMPLETED')
  }, [filter, tasks])

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

  const removeTask = (id: string) => {
    setTasks(currentTasks => {
      const tasksWithoutRemoved = currentTasks?.filter(task => task?.id !== id)
      return tasksWithoutRemoved ?? []
    })
  }

  const handleApplyFilter = (filter?: Filter) => {
    if (!filter) return
    setFilter(filter)
  }

  return (
    <div className='w-96 flex flex-col justify-center gap-3'>
      <div className='pb-4'>
        <TodoTitle title='My Awesome Todo' />
      </div>
      <div className='pb-2'>
        <NewTask onCreate={ createNewTask } />
      </div>

      <Filters 
        list={filterItems}
        selectedFilter={ filter }
        onApplyFilter={ handleApplyFilter } 
      />
      <div className='w-full bg-white py-3 pl-4 pr-1'>
        <ul>
          {filteredTasks?.map(ti => (
            <TaskItem 
              key={ti?.id} 
              task={ti} 
              onToggleStatus={ changeTaskStatus }
              onRemove={ removeTask }
            />
          ))}
        </ul>
      </div>

    </div>
  )
}
