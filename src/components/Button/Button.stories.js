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
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <ChakraProvider theme={theme}>
        <Fonts />
        <Story />
      </ChakraProvider>
    ),
  ],
};

export const Default = (args) => <Button {...args} />;

export const Primary = {
  args: {
    primary: true,
    variant: 'solid',
    label: 'Button',
    bg: 'yellow',
    hover: {bg: 'orange'},
    borderRadius: '20px',
    onClick: undefined,
  },
};

export const Secondary = {
  args: {
    primary: false,
    label: 'Alternative',
    variant: 'outline',
    bg: 'white',
    hover: {bg: 'yellow'},
    borderRadius: '4px',
    border: '2px',
    borderColor: 'yellow',
    onClick: undefined,
  },
};
