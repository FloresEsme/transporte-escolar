import React from "react";
import { PinInputBox } from "./PinInputBox";
import theme from '../../styles/styleTheme';
import { ChakraProvider } from '@chakra-ui/react';
import Fonts from '../../styles/fontsTheme';

export default {
    title: 'Components/PinInputBox',
    component: PinInputBox,
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

export const Default = (args) => <PinInputBox {...args} />;

export const Pin = {
    args: {
        message: 'This is an input text',
    },
};
