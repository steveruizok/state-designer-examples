import React from 'react'
import Visualizer from '../../components/Visualizer'
import Card from '../../components/Card'
import CodeBlock from '../../components/CodeBlock'
import { Button } from '@theme-ui/components'
import { createStateDesigner, useStateDesigner } from 'state-designer'
import Layout from '../../components/Layout'

export interface Props {}
const History: React.FC<Props> = ({ children }) => {
  const designer = createStateDesigner({
    initial: 'turnedOff',
    states: {
      turnedOff: {
        on: {
          PRESS_POWER: { to: 'turnedOn.restore' },
        },
      },
      turnedOn: {
        on: {
          PRESS_POWER: { to: 'turnedOff' },
        },
        initial: 'volumeOn',
        states: {
          volumeOff: {
            on: {
              PRESS_MUTE: { to: 'volumeOn' },
            },
          },
          volumeOn: {
            on: {
              PRESS_MUTE: { to: 'volumeOff' },
            },
          },
        },
      },
    },
  })

  const [_, send, { getGraph }] = useStateDesigner(designer)

  return (
    <Layout>
      <Visualizer title="History" designer={designer}>
        <p>
          Transitioning into a state will normally activate its <b>initial</b>{' '}
          child state. If any of the new state's children have states of their
          own, then they'll active their initial states, too.{' '}
        </p>
        <p>
          Once in a state, a user may trigger transitions within its it. If the
          user then transitions out of the state, then when the user re-enters
          the state, you may want to restore their previous changes.
        </p>
        <p>
          In this example, a user can turn on a device, turn off its volume, and
          it will preserve that state when turned off and on again.
        </p>
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
        <Button onClick={() => send('PRESS_POWER')}>Power</Button>
        <Button onClick={() => send('PRESS_MUTE')}>Mute</Button>
      </Card>
      <CodeBlock
        box
        code={`createStateDesigner({
  initial: 'turnedOff',
  states: {
    turnedOff: {
      on: {
        PRESS_POWER: { to: 'turnedOn.restore' },
      },
    },
    turnedOn: {
      on: {
        PRESS_POWER: { to: 'turnedOff' },
      },
      initial: 'volumeOn',
      states: {
        volumeOff: {
          on: {
            PRESS_MUTE: { to: 'volumeOn' },
          },
        },
        volumeOn: {
          on: {
            PRESS_MUTE: { to: 'volumeOff' },
          },
        },
      },
    },
  },
})`}
      />
    </Layout>
  )
}

export default History
