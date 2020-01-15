import * as React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Styled } from 'theme-ui'
import { Box, Link as L } from '@theme-ui/components'

const Sidebar: React.FC<{ pages: string[] }> = ({ pages }) => {
  const router = useRouter()

  return (
    <Box pt={4} px={[3, 3, 0]}>
      <Styled.ul>
        {pages.map((page, i) => {
          const href = `/Examples/${page.replace(' ', '')}`
          const isActive = router.pathname === href

          return (
            <Styled.li key={i}>
              <Link href={`/Examples/${page.replace(/\s/g, '')}`}>
                <L
                  sx={{
                    cursor: 'pointer',
                    fontFamily: 'navigation',
                    fontSize: 2,
                    ...(isActive && { color: 'faded' }),
                  }}
                >
                  {page}
                </L>
              </Link>
            </Styled.li>
          )
        })}
      </Styled.ul>
    </Box>
  )
}

export default Sidebar
