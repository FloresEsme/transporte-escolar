import React from "react";
import PropTypes from 'prop-types';
import { Input, InputGroup, InputLeftElement, InputRightElement, Stack } from "@chakra-ui/react";
import { Icon } from "@chakra-ui/icons";
import { FaUikit } from "react-icons/fa";

export const InputBox = ({ variant, type, placeholder, icon, color }) => {
    return (
        <Stack spacing={3}>
            <InputGroup variant={variant}>
                <InputLeftElement pointerEvents='none'>
                    <Icon as={icon} />
                </InputLeftElement>
                <Input
                    type={type}
                    placeholder={placeholder}
                    letterSpacing={'2px'}
                    focusBorderColor= {color}
                    borderRadius = {'20px'}
                />
            </InputGroup>
        </Stack>
    );
};

InputBox.propTypes = {
    variant: PropTypes.string,
    type: PropTypes.string,
    placeholder: PropTypes.string,
    icon: PropTypes.any,
};

InputBox.defaultProps = {
    variant: 'outline',
    type: 'text',
    placeholder: 'Placeholder',
    icon: FaUikit,
    color: 'yellow'
};
