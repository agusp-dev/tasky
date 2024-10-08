import { useMemo } from 'react'
import { Field, Checkbox, Label } from '@headlessui/react'
import { CheckIcon, XMarkIcon } from '@heroicons/react/16/solid'
import { TaskItem as TaskItemType, TaskStatus } from '~/types'
import { TASK_STATUSES } from '~/constants'

type Props = {
  task: TaskItemType,
  // eslint-disable-next-line no-unused-vars
  onToggleStatus: (id: string, status: TaskStatus) => void,
  // eslint-disable-next-line no-unused-vars
  onRemove: (id: string) => void,
}

export const TaskItem: React.FC<Props> = ({ task, onToggleStatus, onRemove }) => {

  const onTaskChecked = (checked: boolean) => {
    onToggleStatus(task?.id, checked ? TASK_STATUSES.COMPLETED : TASK_STATUSES.PENDING)
  }

  const isChecked = useMemo(() => task?.status === TASK_STATUSES.COMPLETED, [task?.status])

  const handleRemove = () => {
    if (!task?.id) return
    onRemove(task?.id)
  }

  return (
    <li className='py-3'>
      <Field className='flex items-center gap-4 cursor-pointer'>
        <Checkbox 
          className='group size-6 rounded-md border-2 border-purple-300 flex justify-center items-center cursor-pointer'
          checked={ task?.status === TASK_STATUSES.COMPLETED }
          onChange={ onTaskChecked }
        >
          {isChecked && <CheckIcon className='fill-purple-700' />}
        </Checkbox>
        <Label 
          className={ `flex-1 text-slate-800 cursor-pointer 
            ${ isChecked ? 'font-light line-through' : 'font-normal' }` }
        >
          { task?.title }
        </Label>
        <button 
          className='p-2 rounded-full hover:bg-violet-100'
          onClick={ handleRemove }
        >
          <XMarkIcon className='size-5 fill-gray-400' />
        </button>
      </Field>
    </li>
  )
}
