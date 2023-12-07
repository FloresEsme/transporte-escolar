import React from "react";
import { InputBox } from "./InputBox";
import theme from '../../styles/styleTheme';
import { ChakraProvider } from '@chakra-ui/react';
import Fonts from '../../styles/fontsTheme';

export default {
    title: 'Components/InputBox',
    component: InputBox,
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

export const Default = (args) => <InputBox {...args} />;

export const String = {
    args: {
        variant: 'outline',
        type: 'text',
        placeholder: 'Text',
    },
};

export const Password = {
    args: {
        variant: 'outline',
        type: 'password',
        placeholder: 'Password',
    },
};
