import React from "react";
import PropTypes from 'prop-types';
import { Input, InputGroup, InputLeftElement, Stack, Text } from "@chakra-ui/react";
import { Icon } from "@chakra-ui/icons";
import { FaUikit } from "react-icons/fa";

export const InputBox = ({ text, variant, type, placeholder, icon, color }) => {
    return (
        <Stack spacing={1}>
            <Text letterSpacing={'2px'}>{text}</Text>
            <InputGroup variant={variant}>
                <InputLeftElement pointerEvents='none'>
                    <Icon as={icon} />
                </InputLeftElement>
                <Input
                    type={type}
                    placeholder={placeholder}
                    letterSpacing={'2px'}
                    focusBorderColor={color}
                    borderRadius={'20px'}
                />
            </InputGroup>
        </Stack>
    );
};

InputBox.propTypes = {
    text: PropTypes.string,
    variant: PropTypes.string,
    type: PropTypes.string,
    placeholder: PropTypes.string.isRequired,
    icon: PropTypes.any,
};

InputBox.defaultProps = {
    text: 'Default',
    variant: 'outline',
    type: 'text',
    placeholder: 'Placeholder',
    icon: FaUikit,
    color: 'yellow'
};
