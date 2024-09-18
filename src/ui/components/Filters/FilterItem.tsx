type Filter = {
  id: number,
  title: string,
  isActive: boolean,
  // eslint-disable-next-line no-unused-vars
  onSelected: (id: number) => void
}

export const FilterItem: React.FC<Filter> = ({ id, title, isActive, onSelected }) => {
  const onHandleSelected = () => {
    onSelected(id)
  }
  return (
    <li 
      className={
        `font-light text-sm text-violet-900 px-2 py-1 hover:cursor-pointer 
        ${ isActive ? 'bg-purple-200 rounded-md' : '' }`
      }
      onClick={ onHandleSelected }
    >
      { title }
    </li>
  )
}
