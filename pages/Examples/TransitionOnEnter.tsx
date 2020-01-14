import * as React from 'react'
import { useStateDesigner, createStateDesigner } from 'state-designer'
import Visualizer from '../../components/Visualizer'
import CodeBlock from '../../components/CodeBlock'
import Card from '../../components/Card'
import Layout from '../../components/Layout'
import { Button } from '@theme-ui/components'

export interface Props {}

const TransitionOnEnter: React.FC<Props> = () => {
  const designer = createStateDesigner({
    data: {
      count: 0,
    },
    initial: 'stateB',
    states: {
      stateA: {
        on: {
          TOGGLE: { to: 'stateB' },
        },
        onEnter: [
          { if: 'countIsEven', to: 'even' },
          { if: 'countIsOdd', to: 'odd' },
        ],
        initial: 'never',
        states: {
          never: {},
          odd: {},
          even: {},
        },
      },
      stateB: {
        on: {
          TOGGLE: { to: 'stateA' },
          INCREMENT: 'incrementCount',
        },
      },
    },
    results: {
      safePayload: (data, payload) => (payload ? payload : 0),
    },
    conditions: {
      countIsOdd: data => data.count % 2 === 1,
      countIsEven: data => data.count % 2 === 0,
    },
    actions: {
      incrementCount: data => data.count++,
      incrementCountBy: (data, payload, safePayload) =>
        (data.count += safePayload),
    },
  })

  const [data, send, { can }] = useStateDesigner(designer)

  return (
    <Layout>
      <Visualizer title="onEnter Transitions" designer={designer}>
        The "TOGGLE" event will toggle the state between "stateB" and "stateA".
        While in "stateB", a user can send the INCREMENT event to change
        "data.count". Entering "stateA" will result in a transition to its child
        state, "odd" or "even", depending on the value of "data.count". This
        transition is driven by stateA's <b>onEnter</b> event.
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
        <Button onClick={() => send('TOGGLE')}>Toggle</Button>
        <Button disabled={!can('INCREMENT')} onClick={() => send('INCREMENT')}>
          Increment
        </Button>
      </Card>
      <CodeBlock
        box
        code={`{
  data: {
    count: 0,
  },
  initial: 'stateB',
  states: {
    stateA: {
      on: {
        TOGGLE: { to: 'stateB' },
      },
      onEnter: [
        { if: 'countIsEven', to: 'even' },
        { if: 'countIsOdd', to: 'odd' },
      ],
      initial: 'never',
      states: {
        never: {},
        odd: {},
        even: {},
      },
    },
    stateB: {
      on: {
        TOGGLE: { to: 'stateA' },
        INCREMENT: 'incrementCount',
      },
    },
  },
  results: {
    safePayload: (data, payload) => (payload ? payload : 0),
  },
  conditions: {
    countIsOdd: data => data.count % 2 === 1,
    countIsEven: data => data.count % 2 === 0,
  },
  actions: {
    incrementCount: data => data.count++,
    incrementCountBy: (data, payload, safePayload) =>
      (data.count += safePayload),
  },
}`}
      />
    </Layout>
  )
}

export default TransitionOnEnter
