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
    backgroundColor: 'yellow',
    label: 'Button 1',
  },
};

export const Secondary = {
  args: {
    primary: false,
    backgroundColor: 'orange',
    label: 'Button 2',
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
