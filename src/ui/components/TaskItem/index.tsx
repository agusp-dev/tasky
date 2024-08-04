import { useState } from 'react'
import { Field, Checkbox, Label } from '@headlessui/react'
import { CheckIcon } from '@heroicons/react/16/solid'
import { TaskItem as TastItemType } from '~/types'

export const TaskItem: React.FC<TastItemType> = ({ 
  id, 
  title, 
  description, 
  createdAt, 
  status 
}) => {

  console.log(id, title, description, createdAt, status)
  const [checked, setChecked] = useState(false)

  return (
    <li className='py-3'>
      <Field className='flex items-center gap-4'>
        <Checkbox 
          className='group size-6 rounded-md border-2 border-purple-300 flex justify-center items-center'
          checked={ checked }
          onChange={ setChecked }
        >
          {checked && <CheckIcon className='fill-purple-700' />}
        </Checkbox>
        <Label 
          className={ `text-slate-800 ${ checked ? 'font-light line-through' : 'font-normal' }` }
        >
          { title }
        </Label>
      </Field>
    </li>
  )
}
