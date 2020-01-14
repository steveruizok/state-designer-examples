import * as React from 'react'
import { ThemeProvider } from 'theme-ui'
import { Box } from '@theme-ui/components'
import Header from './Header'
import Sidebar from './Sidebar'
import theme from './theme'
import pages from './pages'

import './index.css'

const Layout: React.FC<{}> = props => {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Box
        pb={6}
        sx={{
          backgroundColor: '#fafafa',
        }}
      >
        <Box
          sx={{
            maxWidth: 500,
            margin: '0 auto',
            display: 'grid',
            gap: 32,
            gridTemplateColumns: ['auto', 'auto', '500px 100px'],
          }}
        >
          <Box p={3}>{props.children}</Box>
          <Sidebar pages={pages} />
        </Box>
      </Box>
    </ThemeProvider>
  )
}

export default Layout
