type Props = {
  title: string
}

export const TodoTitle: React.FC<Props> = ({ title }) => (
  <h2 className='text-3xl text-purple-700'>{ title }</h2>
)
