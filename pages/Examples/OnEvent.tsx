import React from 'react'
import { createStateDesigner, useStateDesigner } from 'state-designer'
import Card from '../../components/Card'
import Layout from '../../components/Layout'
import CodeBlock from '../../components/CodeBlock'
import Visualizer from '../../components/Visualizer'
import { Text, Button } from '@theme-ui/components'

export interface Props {}

const OnEvent: React.FC<Props> = ({ children }) => {
  const designer = createStateDesigner({
    data: {
      clicks: 0,
      count: 0,
    },
    onEvent: 'incrementClicks',
    on: {
      CLICKED_MINUS: 'decrementCount',
      CLICKED_PLUS: 'incrementCount',
    },
    actions: {
      incrementClicks: data => data.clicks++,
      incrementCount: data => data.count++,
      decrementCount: data => data.count--,
    },
  })

  const [data, send, { can, isIn }] = useStateDesigner(designer)

  return (
    <Layout>
      <Visualizer title="onEvent" designer={designer}>
        The "clicked-minus" and "clicked-plus" events will change data.count.
        Either event will increment data.clicks. This change is driven by the
        root state's <b>onEvent</b> event.
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
        <Button onClick={() => send('CLICKED_MINUS')}>-</Button>
        <Text px={3} mr={2} sx={{ textAlign: 'center' }}>
          {data.count}
        </Text>
        <Button mr={0} onClick={() => send('CLICKED_PLUS')}>
          +
        </Button>
      </Card>
      <CodeBlock
        box
        code={`createStateDesigner({
  data: {
    clicks: 0,
    count: 0,
  },
  on: {
    CLICKED_MINUS: 'decrementCount',
    CLICKED_PLUS: 'incrementCount',
  },
  onEvent: 'incrementClicks',
  actions: {
    incrementClicks: data => data.clicks++,
    incrementCount: data => data.count++,
    decrementCount: data => data.count--,
  },
})`}
      />
    </Layout>
  )
}

export default OnEvent
