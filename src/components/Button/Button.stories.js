import React from 'react';
import { Button } from './Button';
import theme from '../../styles/styleTheme';
import { ChakraProvider } from '@chakra-ui/react';

export default {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <ChakraProvider theme={theme}>
        {/* <CSSReset /> */}
        <Story />
      </ChakraProvider>
    ),
  ],
};

export const Default = (args) => <Button {...args} />;

export const Primary = {
  args: {
    primary: true,
    bg: 'yellow',
    hover: {bg: '#EAA31B'},
    borderRadius: '20px',
    label: 'Button 1',
  },
};

export const Secondary = {
  args: {
    primary: false,
    bg: 'white',
    label: 'Button 2',
    border: '2px',
    borderColor: 'yellow',
    borderRadius: '4px',
  },
};

// export const Large = {
//   args: {
//     size: 'lg',
//     label: 'Button L',
//   },
// };

// export const Small = {
//   args: {
//     size: 'sm',
//     label: 'Button S',
//   },
// };
