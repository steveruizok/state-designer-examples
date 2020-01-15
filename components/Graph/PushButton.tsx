import * as React from 'react'
import { Flex, Box } from '@theme-ui/components'

type Props = { active?: boolean; type?: 'ring' | 'dot' }

const PushButton: React.FC<Props> = ({
  active = false,
  type = 'ring',
  children,
}) => {
  return (
    <Flex
      mr={3}
      backgroundColor={active ? 'low' : 'none'}
      sx={{
        height: 24,
        width: 24,
        borderRadius: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        boxShadow: `0px 0px 2px 1px rgba(0, 0, 0, .3) 
          ${active ? ', 0px 0px 8px 1px rgba(40, 173, 250, .25)' : ''}`,
        padding: '3px',
        overflow: 'hidden',
        transition: 'all .26s',
      }}
    >
      <Box
        sx={{
          height: '100%',
          width: '100%',
          borderRadius: '100%',
          borderWidth: 3,
          borderStyle: 'solid',
          borderColor: active ? 'neon' : 'shadow',
        }}
      />
    </Flex>
  )
}

export default PushButton
