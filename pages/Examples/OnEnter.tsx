import React from 'react'
import Visualizer from '../../components/Visualizer'
import Card from '../../components/Card'
import CodeBlock from '../../components/CodeBlock'
import { Button } from '@theme-ui/components'
import { createStateDesigner } from 'state-designer'
import Layout from '../../components/Layout'

export interface Props {}
const OnEnter: React.FC<Props> = ({ children }) => {
  const designer = createStateDesigner({
    data: {
      count: 0,
    },
    initial: 'inactive',
    states: {
      active: {
        onEnter: 'increment',
        on: {
          TOGGLE: { to: 'inactive' },
        },
      },
      inactive: {
        onEnter: 'decrement',
        on: {
          TOGGLE: { to: 'active' },
        },
      },
    },
    actions: {
      increment: data => data.count++,
      decrement: data => data.count--,
    },
    conditions: {
      atMax: data => data.count === 10,
      atMin: data => data.count === 0,
    },
  })

  return (
    <Layout>
      <Visualizer title="onEnter" designer={designer}>
        The "TOGGLE" event will toggle the state between "active" and
        "inactive". Entering the "active" state will increment the count.
        Entering the "inactive" state will decrement the count. These changes
        are driven by the two states' <b>onEnter</b> events.
      </Visualizer>
      <Card
        my={3}
        p={4}
        sx={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Button onClick={() => designer.send('TOGGLE')}>Click Here</Button>
      </Card>
      <CodeBlock
        box
        code={`createStateDesigner({
  data: {
    count: 0,
  },
  initial: 'inactive',
  states: {
    active: {
      onEnter: 'increment',
      on: {
        TOGGLE: { to: 'inactive' },
      },
    },
    inactive: {
      onEnter: 'decrement',
      on: {
        TOGGLE: { to: 'active' },
      },
    },
  },
  actions: {
    increment: data => data.count++,
    decrement: data => data.count--,
  },
  conditions: {
    atMax: data => data.count === 10,
    atMin: data => data.count === 0,
  },
})`}
      />
    </Layout>
  )
}

export default OnEnter
