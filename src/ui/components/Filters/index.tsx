import { FilterItem } from './FilterItem'
import { Filter } from '~/types'

type Props = {
  list: Filter[],
  selectedFilter: Filter,
  // eslint-disable-next-line no-unused-vars
  onApplyFilter: (filter?: Filter) => void
}

export const Filters: React.FC<Props> = ({ 
  list, 
  selectedFilter, 
  onApplyFilter 
}) => {
  
  const handleFilterSelected = (id: number) => {
    const selected = list?.find((filter: Filter) => filter?.id === id)
    if (!selected) return
    onApplyFilter(selected)
  }

  return (
    <ul className='flex justify-end gap-1'>
      {list?.map((filter: Filter) => (
        <FilterItem 
          key={filter?.id}
          id={ filter?.id }
          title={ filter?.title } 
          isActive={ selectedFilter?.id === filter?.id } 
          onSelected={ handleFilterSelected } 
      />
      ))}
    </ul>
  )
}
