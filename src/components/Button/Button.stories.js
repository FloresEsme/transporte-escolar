import React from 'react';
import { Button } from './Button';
import theme from '../../styles/styleTheme';
import { ChakraProvider } from '@chakra-ui/react';
import Fonts from '../../styles/fontsTheme';

export default {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <ChakraProvider theme={theme}>
        <Fonts />
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
    label: 'Button',
    hover: {bg: 'orange'},
    variant: 'solid',
  },
};

export const Secondary = {
  args: {
    primary: false,
    bg: 'white',
    label: 'Alternative',
    border: '2px',
    borderColor: 'yellow',
    borderRadius: '4px',
    _hover: {bg: 'yellow'},
    variant: 'outline',
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
