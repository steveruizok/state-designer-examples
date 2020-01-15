import * as React from 'react'
import { useStateDesigner, createStateDesigner } from 'state-designer'
import Visualizer from '../../components/Visualizer'
import Card from '../../components/Card'
import Layout from '../../components/Layout'
import CodeBlock from '../../components/CodeBlock'
import { Text, Button } from '@theme-ui/components'

export interface Props {}

const TransitionOnEvent: React.FC<Props> = () => {
  const designer = createStateDesigner({
    data: {
      count: 0,
    },
    initial: 'even',
    states: {
      even: {},
      odd: {},
    },
    on: {
      CLICK_INCREMENT: 'incrementCount',
      CLICK_INCREMENT_BY_2: ['incrementCount', 'incrementCount'],
    },
    onEvent: [
      { if: 'countIsEven', to: 'even' },
      { if: 'countIsOdd', to: 'odd' },
    ],
    conditions: {
      countIsOdd: data => data.count % 2 === 1,
      countIsEven: data => data.count % 2 === 0,
    },
    actions: {
      incrementCount: data => data.count++,
    },
  })

  const [data, send] = useStateDesigner(designer)

  return (
    <Layout>
      <Visualizer title="onEvent Transitions" designer={designer}>
        The machine will enter its "odd" and "even" states automatically,
        according to the value of `data.count`. This transition is driven by the
        machine's <b>onEnter</b> event.
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
        <Text px={3} mr={2} sx={{ textAlign: 'center' }}>
          {data.count}
        </Text>
        <Button mr={2} onClick={() => send('CLICK_INCREMENT')}>
          +1
        </Button>
        <Button mr={0} onClick={() => send('CLICK_INCREMENT_BY_2')}>
          +2
        </Button>
      </Card>
      <CodeBlock
        box
        code={`createStateDesigner({
  data: {
    count: 0,
  },
  initial: 'even',
  states: {
    even: {},
    odd: {},
  },
  on: {
    CLICK_INCREMENT: 'incrementCount',
    CLICK_INCREMENT_BY_2: ['incrementCount', 'incrementCount'],
  },
  onEvent: [
    { if: 'countIsEven', to: 'even' },
    { if: 'countIsOdd', to: 'odd' },
  ],
  conditions: {
    countIsOdd: data => data.count % 2 === 1,
    countIsEven: data => data.count % 2 === 0,
  },
  actions: {
    incrementCount: data => data.count++,
  },
})`}
      />
    </Layout>
  )
}

export default TransitionOnEvent
