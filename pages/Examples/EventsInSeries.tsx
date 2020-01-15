import React from 'react'
import Visualizer from '../../components/Visualizer'
import CodeBlock from '../../components/CodeBlock'
import { createStateDesigner } from 'state-designer'
import Layout from '../../components/Layout'

export interface Props {}

const EventsInSeries: React.FC<Props> = ({ children }) => {
  const designer = createStateDesigner({
    on: {
      CLICKED_BUTTON_A: [
        () => console.log('Good morning!'),
        () => console.log('...and have a nice day, too.'),
      ],
      CLICKED_BUTTON_B: [
        { do: () => console.log('Good morning!') },
        { do: () => console.log('...and have a nice day, too.') },
      ],
      CLICKED_BUTTON_C: [
        () => console.log('Good morning!'),
        {
          do: () => console.log('...and have a nice day, too.'),
        },
      ],
    },
  })

  return (
    <Layout>
      <Visualizer title="Events" designer={designer}>
        You can also define events with arrays of either actions, event
        handlers, or a combination of the two. When you trigger this event, the
        machine will run each action or handler in order.
      </Visualizer>
      <CodeBlock
        box
        code={`createStateDesigner({
  on: {
    CLICKED_BUTTON_A: [
      () => console.log('Good morning!'),
      () => console.log('...and have a nice day, too.'),
    ],
    CLICKED_BUTTON_B: [
      { do: () => console.log('Good morning!') },
      { do: () => console.log('...and have a nice day, too.') },
    ],
    CLICKED_BUTTON_C: [
      () => console.log('Good morning!'),
      {
        do: () => console.log('...and have a nice day, too.'),
      },
    ],
  },
})`}
      />
    </Layout>
  )
}

export default EventsInSeries
