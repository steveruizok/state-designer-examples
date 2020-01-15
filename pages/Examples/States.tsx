import React from 'react'
import Visualizer from '../../components/Visualizer'
import Card from '../../components/Card'
import CodeBlock from '../../components/CodeBlock'
import { Button } from '@theme-ui/components'
import { createStateDesigner, useStateDesigner } from 'state-designer'
import Layout from '../../components/Layout'

export interface Props {}
const OnEnter: React.FC<Props> = ({ children }) => {
  const designer = createStateDesigner({
    initial: 'stop',
    states: {
      stop: {
        on: {
          CLICKED_PLAY: { to: 'play' },
        },
      },
      play: {
        on: {
          CLICKED_STOP: { to: 'stop' },
        },
      },
    },
  })

  const [_, send, { can }] = useStateDesigner(designer)

  return (
    <Layout>
      <Visualizer title="Transitions" designer={designer}>
        A machine may have different states and may transition between states as
        the result of an event. Events may belong to states. The machine will
        ignore events that belong to an inactive state. The events in the
        machine's active states make up the machine's "available" events.
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
        <Button onClick={() => send('CLICKED_STOP')}>Stop</Button>
        <Button onClick={() => send('CLICKED_PLAY')}>Play</Button>
      </Card>
      <CodeBlock
        box
        code={`createStateDesigner({
  initial: 'stop',
  states: {
    stop: {
      on: {
        CLICKED_PLAY: { to: 'play' },
      },
    },
    play: {
      on: {
        CLICKED_STOP: { to: 'stop' },
      },
    },
  },
})`}
      />
    </Layout>
  )
}

export default OnEnter
