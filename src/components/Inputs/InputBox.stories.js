import React from "react";
import { InputBox } from "./InputBox";
import theme from '../../styles/styleTheme';
import { ChakraProvider } from '@chakra-ui/react';
import Fonts from '../../styles/fontsTheme';
import { FaUser, FaUnlockAlt, FaBus } from "react-icons/fa";


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
                <Story />
            </ChakraProvider>
        ),
    ],
};

export const Default = (args) => <InputBox {...args} />;

export const Name = {
    args: {
        variant: 'outline',
        type: 'text',
        placeholder: 'Nombre(s)',
        icon: FaUser,
        color: 'yellow',
    },
};

export const Lastname1 = {
    args: {
        variant: 'outline',
        type: 'text',
        placeholder: 'Apellido Paterno',
        icon: FaUser,
        color: 'yellow',
    },
};

export const Lastname2 = {
    args: {
        variant: 'outline',
        type: 'text',
        placeholder: 'Apellido Materno',
        icon: FaUser,
        color: 'yellow',
    },
};

export const Placa = {
    args: {
        variant: 'outline',
        type: 'text',
        placeholder: 'Placa',
        icon: FaBus,
        color: 'yellow',
    },
};

export const Password = {
    args: {
        variant: 'outline',
        type: 'password',
        placeholder: 'Contraseña',
        icon: FaUnlockAlt,
    },
};
