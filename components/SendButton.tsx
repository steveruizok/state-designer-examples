import * as React from 'react';
import { ButtonProps, Button } from '@theme-ui/components';

export interface Props extends ButtonProps {}

const SendButton: React.FC<Props> = props => {
  return (
    <Button mr={0} sx={{ borderRadius: '0 4px 4px 0' }} {...props}>
      <span role="img" aria-label="Send">
        Ã¢ÂÂÃ¯Â¸Â
      </span>
    </Button>
  );
};

export default SendButton;
