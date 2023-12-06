import React from 'react';
import PropTypes from 'prop-types';
import { Button as ChakraButton } from '@chakra-ui/react';

/**
 * Primary UI component for user interaction
 */
export const Button = ({ primary, backgroundColor, label, ...props }) => {
  return (
    <ChakraButton
      //colorScheme={primary ? 'teal' : 'gray'} // Puedes ajustar los esquemas de colores según tus necesidades
      primary={primary}
      // color={theme.colors.black}
      backgroundColor={backgroundColor}
      // size={size}
      {...props}
    >
      {label}
    </ChakraButton>
  );
};

Button.propTypes = {
  primary: PropTypes.bool,
  backgroundColor: PropTypes.string,
  size: PropTypes.oneOf(['sm', 'lg']), // Ajusta según las opciones de tamaño de Chakra UI
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  label: 'Button',
  backgroundColor: '#000000',
  primary: true,
  onClick: undefined,
};
