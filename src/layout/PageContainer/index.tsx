type Props = {
  children: React.ReactNode
}

export const PageContainer: React.FC<Props> = ({ children }) => {
  return (
    <div className='w-full flex-1 flex justify-center bg-slate-100 px-2'>
      { children }
    </div>
  )
}
