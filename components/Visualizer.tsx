import * as React from 'react'
import { Styled } from 'theme-ui'
import Graph from './Graph'
import { StateDesigner, useStateDesigner } from 'state-designer'
import { Text, Box, Flex, Button } from '@theme-ui/components'

export interface Props {
  title: string
  designer: StateDesigner<any, any, any, any>
}

const Visualizer: React.FC<Props> = ({ designer, title, children }) => {
  return (
    <Box>
      <Flex sx={{ justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <Styled.h2>{title}</Styled.h2>
      </Flex>
      <Box mt={2} mb={5}>
        <Text variant={'body'}>{children}</Text>
      </Box>
      <Graph designer={designer} />
    </Box>
  )
}

export default Visualizer
