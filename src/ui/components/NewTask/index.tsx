import { useState } from 'react'

type Props = {
  // eslint-disable-next-line no-unused-vars
  onCreate: (task: string) => void
}

export const NewTask: React.FC<Props> = ({ onCreate }) => {

  const [newTask, setNewTask] = useState<string>('')

  const handleCreateTask = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!newTask?.length) return 
    onCreate(newTask?.trim())
    setNewTask('')
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTask(e.target.value)
  }

  return (
    <form onSubmit={ handleCreateTask }>
      <div className='bg-white flex justify-between px-4'>
        <input 
          className='w-full py-3 focus:outline-none'
          name='newtask' 
          value={ newTask }
          onChange={ handleInputChange }
          type='text' 
          placeholder='My awesome task'
        />
        <button>Add</button>
      </div>
    </form>
  )
}
