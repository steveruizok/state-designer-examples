import * as React from 'react'
import CounterComponent from '../../components/Counter'
import Layout from '../../components/Layout'

export interface Props {}

const Counter: React.FC<Props> = ({ children }) => {
  return (
    <Layout>
      <CounterComponent />
    </Layout>
  )
}

export default Counter
