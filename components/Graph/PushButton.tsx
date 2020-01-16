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
        boxShadow: active
          ? `
          -1px -1px 8px 0px rgba(255, 255, 255, .24),
          0px 0px 1px 1px rgba(255, 255, 255, .24),
          -1px -1px 2px 0px rgba(255, 255, 255, .16),
          1px 1px 6px 1px rgba(0, 0, 0, .24),
          1px 1px 3px 0px rgba(0, 0, 0, .8),
          1px 1px 1px 0px rgba(0, 0, 0, .16)`
          : `
          -1px -1px 8px 0px rgba(255, 255, 255, .1),
          0px 0px 1px 1px rgba(255, 255, 255, .1),
          -1px -1px 2px 0px rgba(255, 255, 255, .12),
          1px 1px 6px 1px rgba(0, 0, 0, .16),
          1px 1px 3px 0px rgba(0, 0, 0, .4),
          1px 1px 1px 0px rgba(0, 0, 0, .05)`,
        padding: '3px',
        overflow: 'idden',
        transition: 'all .24s',
      }}
    >
      <Box
        sx={{
          height: '100%',
          width: '100%',
          borderRadius: '100%',
          borderWidth: 3,
          borderStyle: 'solid',
          borderColor: active ? 'neon' : 'rgba(0,36,65,.14)',
          boxShadow: active
            ? `
          1px 1px 8px 2px rgba(62, 127, 255, .5),
          0px 0px 6px 1px rgba(0, 0, 0, .08),
          0px 0px 3px 0px rgba(0, 0, 0, .3),
          0px 0px 1px 0px rgba(0, 0, 0, .05),
          0px 0px 3px 1px rgba(62, 127, 255, .32),
          0px 0px 3px 1px rgba(255, 255, 255, .22),
          0px 0px 1px 1px rgba(62, 127, 255, .3)`
            : ``,
        }}
      />
    </Flex>
  )
}

export default PushButton
