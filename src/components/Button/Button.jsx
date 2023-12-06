import React, { useState } from "react";
import PropTypes from 'prop-types';
import { Button as ChakraButton } from '@chakra-ui/react';

/**
 * Primary UI component for user interaction
 */
export const Button = ({ primary, bg, hover, borderRadius, label, ...props }) => {
  const [isHoverActive, setHoverActive] = useState(false);

  return (
    <ChakraButton
      primary={primary}
      variant={primary ? 'solid' : 'outline'} // Puedes ajustar los esquemas de colores según tus necesidades
      bg={bg}
      _hover={primary ? hover : { bg: '#FFCA41' }}
      _active={{
        transform: 'scale(.91)',
      }}
      borderRadius={borderRadius}
      px='143px'
      color={isHoverActive ? '#FFFFFF' : null}
      onMouseEnter={primary ? () => setHoverActive(true) : null}
      onMouseLeave={() => setHoverActive(false)}
      // size={size}
      {...props}
    >
      {label}
    </ChakraButton>
  );
};

Button.propTypes = {
  primary: PropTypes.bool,
  bg: PropTypes.string,
  hover: PropTypes.any,
  borderRadius: PropTypes.string,
  size: PropTypes.oneOf(['sm', 'lg']), // Ajusta según las opciones de tamaño de Chakra UI
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  label: 'Button',
  bg: '#FFCA41',
  hover: { bg: '#EAA31B' },
  borderRadius: '20px',
  primary: true,
  onClick: undefined,
};
