import { PageContainer } from '~/layout'

export const App = () => { 
  return (
    <>
      <h2 
        className='text-2xl font-bold leading-7 text-gray-600 sm:text-3xl'
      >
        Tasky App
      </h2>
      <PageContainer>
        <p>Main Content</p>
      </PageContainer>
    </>
  )
}
