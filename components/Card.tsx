import * as React from 'react'
import { Box, BoxProps } from '@theme-ui/components'

export interface Props extends BoxProps {
  active?: boolean
}

const Card: React.FC<Props> = ({ sx = {}, active = true, ...rest }) => {
  return (
    <Box
      opacity={active ? 1 : 0.9}
      mb={2}
      backgroundColor="#FFF"
      sx={{
        position: 'relative',
        transition: 'all .08s',
        boxShadow: active
          ? '0px 3px 6px rgba(0,0,0,.16)'
          : '0px 3px 5px rgba(0,0,0,.06)',
        border: active ? '1px solid #ccc' : '1px solid #efefef',
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
