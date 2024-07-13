import { PageContainer } from '~/layout'
import { TodoPage } from '~/ui/pages'
import { Footer } from '~/ui/components'

export const RootLayout = () => (
  <div className='h-screen flex flex-col'>
    <h1>Tasky App</h1>
    <PageContainer>
      <TodoPage />
    </PageContainer>
    <Footer />
  </div>
)
