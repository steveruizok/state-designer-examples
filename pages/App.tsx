import * as React from 'react'
import Counter from '../components/Counter'
import Layout from '../components/Layout'

export interface Props {}

const App: React.FC<Props> = ({ children }) => {
  return (
    <Layout>
      <Counter />
    </Layout>
  )
}

export default App
