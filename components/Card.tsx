import * as React from 'react'
import { Box, BoxProps } from '@theme-ui/components'

export interface Props extends BoxProps {
  active?: boolean
}

const Card: React.FC<Props> = ({ sx = {}, active = true, ...rest }) => {
  return (
    <Box
      opacity={active ? 1 : 0.9}
      mb={[4, 2]}
      backgroundColor={active ? 'active' : 'inactive'}
      sx={{
        position: 'relative',
        transition: 'all .08s',
        borderStyle: 'outset',
        borderWidth: 1,
        borderColor: active
          ? 'rgba(132, 132, 132, .82)'
          : 'rgba(122, 122, 122, .65)',
        boxShadow: active
          ? `
          0px 0px 8px 1px rgba(0, 0, 0, .18),
          1px 1px 1px 0px rgba(0, 0, 0, .12)`
          : `
          0px 0px 6px 1px rgba(0, 0, 0, .16),
          1px 1px 1px 0px rgba(0, 0, 0, .06)`,
        borderRadius: 4,
        overflow: 'hidden',
        '&:last-child': {
          mr: 0,
        },
        ...sx,
      }}
      {...rest}
    />
  )
}

export default Card
