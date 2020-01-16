import React from 'react'
import Visualizer from '../../components/Visualizer'
import Card from '../../components/Card'
import CodeBlock from '../../components/CodeBlock'
import { Button } from '@theme-ui/components'
import { createStateDesigner, useStateDesigner } from 'state-designer'
import Layout from '../../components/Layout'

export interface Props {}
const ParallelStates: React.FC<Props> = ({ children }) => {
  const designer = createStateDesigner({
    states: {
      bold: {
        initial: 'off',
        states: {
          active: {
            on: {
              TOGGLE_BOLD: { to: 'inactive' },
            },
          },
          inactive: {
            on: {
              TOGGLE_BOLD: { to: 'active' },
            },
          },
        },
      },
      italic: {
        initial: 'off',
        states: {
          active: {
            on: {
              TOGGLE_ITALIC: { to: 'inactive' },
            },
          },
          inactive: {
            on: {
              TOGGLE_ITALIC: { to: 'active' },
            },
          },
        },
      },
    },
  })

  const [_, send, { isIn }] = useStateDesigner(designer)

  return (
    <Layout>
      <Visualizer title="ParallelStates" designer={designer}>
        <p>
          A state may have parallel states. If a state does not have an{' '}
          <b>initial</b> state, then all of its states will be active at once.
          While a state may be parallel, its child states can be "branch"
          states.
        </p>
        <p>
          In the example below, the machine is a parallel state with two
          children, bold and italic, each of which are branch states with two
          children of their own: active and inactive. A user can toggle bold and
          italic separately.
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
        <span
          style={{
            padding: 12,
            fontWeight: isIn('bold.on') ? 600 : 400,
            fontStyle: isIn('italic.on') ? 'italic' : 'normal',
          }}
        >
          Hello world
        </span>
        <Button onClick={() => send('TOGGLE_BOLD')}>Bold</Button>
        <Button onClick={() => send('TOGGLE_ITALIC')}>Italic</Button>
      </Card>
      <CodeBlock
        box
        code={`createStateDesigner({
  states: {
    bold: {
      initial: 'off',
      states: {
        active: {
          on: {
            TOGGLE_BOLD: { to: 'inactive' },
          },
        },
        inactive: {
          on: {
            TOGGLE_BOLD: { to: 'active' },
          },
        },
      },
    },
    italic: {
      initial: 'off',
      states: {
        active: {
          on: {
            TOGGLE_ITALIC: { to: 'inactive' },
          },
        },
        inactive: {
          on: {
            TOGGLE_ITALIC: { to: 'active' },
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

export default ParallelStates
