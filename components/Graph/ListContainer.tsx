import * as React from 'react'
import { Box, Text } from '@theme-ui/components'

type Props = { name: string }

const ListContainer: React.FC<Props> = ({ name, children }) => {
  return (
    <Box>
      <Text variant="label">{name}</Text>
      {children}
    </Box>
  )
}

export default ListContainer
