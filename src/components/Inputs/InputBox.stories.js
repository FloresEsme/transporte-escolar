import React from "react";
import { InputBox } from "./InputBox";
import theme from '../../styles/styleTheme';
import { ChakraProvider } from '@chakra-ui/react';
import Fonts from '../../styles/fontsTheme';
import { FaUser, FaUnlockAlt, FaBus, FaMailBulk } from "react-icons/fa";


export default {
    title: 'Components/InputBox',
    component: InputBox,
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

export const Default = (args) => <InputBox {...args} />;

export const Name = {
    args: {
        text: 'Nombre(s)',
        variant: 'outline',
        type: 'text',
        placeholder: 'Nombre(s)',
        icon: FaUser,
        color: 'yellow',
    },
};

export const Lastname1 = {
    args: {
        text: 'Apellido Paterno',
        variant: 'outline',
        type: 'text',
        placeholder: 'Apellido Paterno',
        icon: FaUser,
        color: 'yellow',
    },
};

export const Lastname2 = {
    args: {
        text: 'Apellido Materno',
        variant: 'outline',
        type: 'text',
        placeholder: 'Apellido Materno',
        icon: FaUser,
        color: 'yellow',
    },
};

export const Placa = {
    args: {
        text: 'Placa',
        variant: 'outline',
        type: 'text',
        placeholder: 'Placa',
        icon: FaBus,
        color: 'yellow',
    },
};

export const Password = {
    args: {
        text: 'Contraseña',
        variant: 'outline',
        type: 'password',
        placeholder: 'Contraseña',
        icon: FaUnlockAlt,
        color: 'yellow',
    },
};

export const Email = {
    args: {
        text: 'Correo electrónico',
        variant: 'outline',
        type: 'email',
        placeholder: 'ejemplo@mail.com',
        icon: FaMailBulk,
        color: 'yellow',
    },
};
