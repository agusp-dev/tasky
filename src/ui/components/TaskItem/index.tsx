import { useMemo } from 'react'
import { Field, Checkbox, Label } from '@headlessui/react'
import { CheckIcon } from '@heroicons/react/16/solid'
import { TaskItem as TaskItemType, TaskStatus } from '~/types'
import { TASK_STATUSES } from '~/constants'

type Props = {
  task: TaskItemType,
  // eslint-disable-next-line no-unused-vars
  onToggleStatus: (id: string, status: TaskStatus) => void
}

export const TaskItem: React.FC<Props> = ({ task, onToggleStatus }) => {

  const onTaskChecked = (checked: boolean) => {
    onToggleStatus(task?.id, checked ? TASK_STATUSES.COMPLETED : TASK_STATUSES.PENDING)
  }

  const isChecked = useMemo(() => task?.status === TASK_STATUSES.COMPLETED, [task?.status])

  return (
    <li className='py-3'>
      <Field className='flex items-center gap-4'>
        <Checkbox 
          className='group size-6 rounded-md border-2 border-purple-300 flex justify-center items-center'
          checked={ task?.status === TASK_STATUSES.COMPLETED }
          onChange={ onTaskChecked }
        >
          {isChecked && <CheckIcon className='fill-purple-700' />}
        </Checkbox>
        <Label 
          className={ `text-slate-800 ${ isChecked ? 'font-light line-through' : 'font-normal' }` }
        >
          { task?.title }
        </Label>
      </Field>
    </li>
  )
}
