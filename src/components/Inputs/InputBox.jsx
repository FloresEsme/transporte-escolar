import React from "react";
import PropTypes from 'prop-types';
import { Input, InputGroup, InputLeftElement, InputRightElement, Stack } from "@chakra-ui/react";
import { Icon } from "@chakra-ui/icons";
import { FaUser } from "react-icons/fa";

export const InputBox = ({ variant, type, placeholder }) => {
    return (
        <Stack spacing={3}>
            <InputGroup variant={variant}>
                <InputLeftElement pointerEvents='none'>
                    <Icon as={FaUser} />
                </InputLeftElement>
                <Input type={type} placeholder={placeholder} />
            </InputGroup>
        </Stack>
    );
};

Input.propTypes = {
    variant: PropTypes.string,
    type: PropTypes.string,
    placeholder: PropTypes.string,
};

Input.defaultProps = {
    variant: 'outline',
    type: 'text',
    placeholder: 'label'
};
