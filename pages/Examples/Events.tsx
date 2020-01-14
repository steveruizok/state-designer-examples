import React from 'react'
import Visualizer from '../../components/Visualizer'
import CodeBlock from '../../components/CodeBlock'
import { createStateDesigner } from 'state-designer'
import Layout from '../../components/Layout'

export interface Props {}

const Events: React.FC<Props> = ({ children }) => {
  const designer = createStateDesigner({
    on: {
      SAY_HELLO: () => console.log('Hello World A'),
      SAY_GOOD_MORNING: {
        if: () => new Date().getHours() < 12,
        do: () => console.log('Good morning world'),
      },
      SAY_GOOD_AFTERNOON: {
        unless: () => new Date().getHours() < 12,
        do: () => console.log('Good afternoon world'),
      },
    },
  })

  return (
    <Layout>
      <Visualizer title="Events" designer={designer}>
        A machine may can receive certain events. Events can either be actions
        event handlers.{' '}
        <ul>
          <li>
            <b>Actions</b> allow you to do something.
          </li>
          <li>
            <b>Event handlers</b> allow you to bundle actions together with
            logic.
          </li>
        </ul>
      </Visualizer>
      <CodeBlock
        box
        code={`{
  on: {
    SAY_HELLO: () => console.log('Hello World A'),
    SAY_GOOD_MORNING: {
      if: () => new Date().getHours() < 12,
      do: () => console.log('Good morning world'),
    },
    SAY_GOOD_AFTERNOON: {
      unless: () => new Date().getHours() < 12,
      do: () => console.log('Good afternoon world'),
    },
  },
}`}
      />
    </Layout>
  )
}

export default Events
