import * as React from 'react'
import { Box, BoxProps } from '@theme-ui/components'

export interface Props extends BoxProps {}

const Container: React.FC<Props> = props => {
  return (
    <Box
      {...props}
      bg={'active'}
      sx={{
        borderRadius: 4,
        overflow: 'hidden',
        border: '1px outset rgba(125, 125, 125, .32)',
        boxShadow: `
    -1px -1px 1px 0px rgba(125, 125, 125, .1),
    1px 1px 6px 1px rgba(0, 0, 0, .2),
    1px 1px 3px 0px rgba(0, 0, 0, .1),
    1px 1px 1px 0px rgba(0, 0, 0, .1)`,
        ...props.sx,
      }}
    />
  )
}

export default Container
