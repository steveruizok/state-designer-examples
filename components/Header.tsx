import * as React from 'react';
import Link from 'next/link';
import { Heading, Box, Link as L } from '@theme-ui/components';

const Header: React.FC<{}> = props => {
  return (
    <Box backgroundColor="#fff" sx={{ borderBottom: '1px solid #000' }}>
      <Box p={3} sx={{ maxWidth: 500, margin: '0 auto' }}>
        <Link href="/">
          <L sx={{ cursor: 'pointer', color: '#000' }}>
            <Heading variant="title">State Designer</Heading>
          </L>
        </Link>
      </Box>
    </Box>
  );
};

export default Header;
