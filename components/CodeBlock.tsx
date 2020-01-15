import * as React from 'react'
import { Box, Button, BoxProps } from '@theme-ui/components'
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter'
import { useClipboard } from 'use-clipboard-copy'
import { dark, light } from './codetheme'

// import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs'

export interface Props extends BoxProps {
  code?: string
  box?: boolean
}

const CodeBlock: React.FC<Props> = ({ code = '', box, ...rest }) => {
  const { copy } = useClipboard()

  return (
    <Box
      sx={{
        position: 'relative',
        ...(box && {
          position: 'relative',
          borderWidth: 1,
          borderStyle: 'solid',
          borderColor: 'grey30',
          backgroundColor: 'none',
          margin: '.5em 0',
        }),
      }}
    >
      <SyntaxHighlighter language="javascript" style={dark}>
        {code}
      </SyntaxHighlighter>
      <Button
        variant={'link'}
        onClick={() => copy(code)}
        sx={{ position: 'absolute', top: 2, right: 2 }}
      >
        Copy
      </Button>
    </Box>
  )
}

export default CodeBlock
