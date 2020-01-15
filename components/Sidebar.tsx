import * as React from 'react'
import NextLink from 'next/link'
import { useRouter } from 'next/router'
import { Styled } from 'theme-ui'
import { Box, Link } from '@theme-ui/components'

const Sidebar: React.FC<{ pages: string[] }> = ({ pages }) => {
  const router = useRouter()

  return (
    <Box pt={4} px={[3, 3, 0]}>
      <Styled.ul>
        {pages.map((page, i) => {
          const href = `/Examples/${page.replace(' ', '')}`
          const isActive = router.pathname === href

          return (
            <NextLink href={`/Examples/${page.replace(/\s/g, '')}`}>
              <Link
                sx={{
                  cursor: 'pointer',
                  fontFamily: 'navigation',
                  fontSize: 2,
                  ...(isActive && { color: 'faded' }),
                }}
              >
                <Styled.li key={i}>{page}</Styled.li>
              </Link>
            </NextLink>
          )
        })}
      </Styled.ul>
    </Box>
  )
}

export default Sidebar
