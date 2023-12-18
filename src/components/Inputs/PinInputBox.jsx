import React from "react";
import PropTypes from 'prop-types';
import { PinInput, HStack, PinInputField, Text } from "@chakra-ui/react";
import "../../styles/PinInputBox.css"

export const PinInputBox = ({ message }) => {
    return (
        <div className="input-container">
            <Text paddingBottom={"4px"}>
                {message}
            </Text>
            <HStack>
                <PinInput size="lg" mask>
                    <PinInputField />
                    <PinInputField />
                    <PinInputField />
                    <PinInputField />
                </PinInput>
            </HStack>
        </div>
    );
};

PinInputBox.propTypes = {
    message: PropTypes.string.isRequired,
}

PinInputBox.defaultProps = {
    message: 'Ingrese su PIN de seguridad',
}
