import * as React from 'react'
import { Styled } from 'theme-ui'
import Node from './Graph/Node'
import Card from './Card'
import CodeBlock from './CodeBlock'
import {
  useStateDesigner,
  StateDesigner,
  Graph as GraphNode,
} from 'state-designer'
import { Button, Flex, Box, Text, Radio } from '@theme-ui/components'

export interface Props {
  designer: StateDesigner<unknown, any, any, any>
}

const Graph: React.FC<Props> = ({ designer, children }) => {
  const [data, send, { getGraph, can, reset }] = useStateDesigner(designer)
  const json = JSON.stringify(data, null, 2)

  function onEvent(name: string, payload: any) {
    send(name, payload)
  }

  function canEvent(name: string, payload: any) {
    return can(name, payload)
  }

  return (
    <Card active={true}>
      {(data as any) && (
        <Box
          sx={{
            borderStyle: 'solid',
            borderWidth: 0,
            borderBottomWidth: 1,
            borderBottomColor: 'grey30',
          }}
        >
          <CodeBlock code={json} />
        </Box>
      )}
      <Box sx={{ position: 'relative' }}>
        <Button
          sx={{ position: 'absolute', top: 2, right: 2 }}
          variant={'link'}
          onClick={e => {
            e.preventDefault()
            reset()
          }}
        >
          Reset
        </Button>
        <Node {...getGraph()} root onEvent={onEvent} canEvent={canEvent} />
      </Box>
      {children}
    </Card>
  )
}

export default Graph
