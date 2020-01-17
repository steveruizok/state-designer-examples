import * as React from 'react'
import Counter from '../components/Counter'
import Layout from '../components/Layout'
import { Heading, Text } from '@theme-ui/components'

export interface Props {}

const App: React.FC<Props> = ({ children }) => {
  return (
    <Layout>
      <Text>
        <p>
          State Designer is a JavaScript library for designing how things work.
        </p>
        <p>
          You can use State Designer to manage state and events in an
          application. The library current contains bindings for React, however
          you can use a State Designer in any type of project.
        </p>
      </Text>
      <Counter />
    </Layout>
  )
}

export default App
