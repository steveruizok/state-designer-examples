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
        boxShadow: active
          ? '0px 3px 8px 1px rgba(0,0,0,.3)'
          : '0px 2px 3px 1px rgba(0,0,0,.3)',
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: active ? 'bright' : 'low',
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
