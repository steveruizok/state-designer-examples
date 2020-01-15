import React from 'react'
import { createStateDesigner } from 'state-designer'
import CodeBlock from '../../components/CodeBlock'
import Visualizer from '../../components/Visualizer'
import Layout from '../../components/Layout'

export interface Props {}

const TransitionLoop: React.FC<Props> = () => {
  const designer = createStateDesigner({
    data: {
      count: 0,
    },
    initial: 'inactive',
    on: {
      TOGGLE: { to: 'inactive' },
    },
    states: {
      active: {
        onEnter: { to: 'inactive' },
      },
      inactive: {
        onEnter: { to: 'active' },
      },
    },
  })

  return (
    <Layout>
      <Visualizer title="onEnter Transitions" designer={designer} />
      <CodeBlock
        box
        code={`createStateDesigner({
  data: {
    count: 0,
  },
  initial: 'inactive',
  on: {
    TOGGLE: { to: 'inactive' },
  },
  states: {
    active: {
      onEnter: { to: 'inactive' },
    },
    inactive: {
      onEnter: { to: 'active' },
    },
  },
})`}
      />
    </Layout>
  )
}
export default TransitionLoop
