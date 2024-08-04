import { TaskItem } from '~/ui/components'
import { taskItems } from '~/mock'

export const TodoPage = () => {
  return (
    <div className='w-96 flex items-center'>
      <div className='w-full bg-white p-5'>
        <ul>
          {taskItems?.map(ti => (
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
