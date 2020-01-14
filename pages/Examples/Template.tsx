import React from 'react'
import { createStateDesigner, useStateDesigner } from 'state-designer'
import CodeBlock from '../../components/CodeBlock'
import SendInput from '../../components/SendInput'
import SendButton from '../../components/SendButton'
import Card from '../../components/Card'
import Visualizer from '../../components/Visualizer'
import Layout from '../../components/Layout'
import {
  Input,
  Flex,
  Text,
  Box,
  Button,
  IconButton,
} from '@theme-ui/components'

export interface Props {}

const Template: React.FC<Props> = ({ children }) => {
  const designer = createStateDesigner({})

  const [data, send, { can, isIn }] = useStateDesigner(designer)

  return (
    <Layout>
      <Visualizer title="Template" designer={designer} />
      <Card
        my={3}
        p={4}
        sx={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      />
      <CodeBlock
        box
        code={`{
  data: {
    min: 0,
    max: 10,
    count: 0,
  },
}`}
      />
    </Layout>
  )
}

export default Template
