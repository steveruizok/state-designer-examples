import * as React from 'react'
import Card from './Card'
import CodeBlock from './CodeBlock'
import Visualizer from './Visualizer'
import { Box, Flex, Text, Button } from '@theme-ui/components'
import { createStateDesigner, useStateDesigner } from 'state-designer'

export interface Props {}

const Counter: React.FC<Props> = ({ children }) => {
  const designer = createStateDesigner({
    data: {
      min: 0,
      max: 10,
      count: 0,
    },
    actions: {
      incrementCount: data => data.count++,
      decrementCount: data => data.count--,
    },
    conditions: {
      isAtMin: data => data.count === data.min,
      isAtMax: data => data.count === data.max,
    },
    on: {
      CLICKED_MINUS: { do: 'decrementCount', unless: 'isAtMin' },
      CLICKED_PLUS: { do: 'incrementCount', unless: 'isAtMax' },
    },
  })

  const [data, send, { can }] = useStateDesigner(designer)

  return (
    <Box>
      <Visualizer title="Counter" designer={designer}>
        The CLICKED_PLUS and CLICKED_MINUS events will increment or decrement
        the count. The events are guarded by conditions.
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
        <Button
          m={0}
          disabled={!can('CLICKED_MINUS')}
          onClick={() => send('CLICKED_MINUS')}
        >
          -
        </Button>
        <Text px={3} sx={{ width: 48, textAlign: 'center' }}>
          {data.count}
        </Text>
        <Button
          m={0}
          disabled={!can('CLICKED_PLUS')}
          onClick={() => send('CLICKED_PLUS')}
        >
          +
        </Button>
      </Card>
      <CodeBlock
        box
        code={`createStateDesigner({
  data: {
    min: 0,
    max: 10,
    count: 0,
  },
  actions: {
    incrementCount: data => data.count++,
    decrementCount: data => data.count--,
  },
  conditions: {
    isAtMin: data => data.count === data.min,
    isAtMax: data => data.count === data.max,
  },
  on: {
    CLICKED_MINUS: { do: 'decrementCount', unless: 'isAtMin' },
    CLICKED_PLUS: { do: 'incrementCount', unless: 'isAtMax' },
  },
})`}
      />
    </Box>
  )
}

export default Counter
