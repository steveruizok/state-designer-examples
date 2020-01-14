import * as React from 'react';
import {
  Box,
  Flex,
  Text,
  ButtonProps,
  Button,
  Input,
  InputProps,
} from '@theme-ui/components';

export type Props = Pick<ButtonProps, 'onClick'> &
  Pick<InputProps, 'value' | 'onChange'> & {
    disabled?: boolean;
    type?: InputProps['type'];
    message?: string;
  };

const SendInput: React.FC<Props> = ({
  disabled = false,
  onClick,
  value,
  onChange,
  message,
  type = 'text',
}) => {
  return (
    <Box>
      <Flex
        sx={{ border: '1px solid #555', borderRadius: 8, overflow: 'hidden' }}
      >
        <Input
          p={2}
          type={type}
          value={value}
          onChange={onChange}
          sx={{ borderRadius: '4px 0 0 4px', border: 'none' }}
        />
        <Button
          mr={0}
          sx={{ borderRadius: '0 4px 4px 0' }}
          disabled={disabled}
          onClick={onClick}
        >
          <span role="img" aria-label="Send">
            âï¸
          </span>
        </Button>
      </Flex>
      {message && <Text variant="label">{message}</Text>}
    </Box>
  );
};

export default SendInput;
