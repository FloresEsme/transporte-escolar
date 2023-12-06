import React, { useState } from "react";
import PropTypes from 'prop-types';
import { Button as ChakraButton } from '@chakra-ui/react';

/**
 * Primary UI component for user interaction
 */
export const Button = ({ primary, bg, hover, borderRadius, label, variant, ...props }) => {
  const [isHoverActive, setHoverActive] = useState(false);

  return (
    <ChakraButton
      primary={primary}
      variant={variant}
      bg={bg}
      _hover={hover}
      _active={{ transform: 'scale(.96)' }}
      borderRadius={borderRadius}
      px={primary ? '103px' : '24px'}
      color={isHoverActive ? '#FFFFFF' : null}
      fontSize='14px'
      letterSpacing={'4px'}
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
  size: PropTypes.oneOf(['sm', 'lg']),
  label: PropTypes.string.isRequired,
  variant: PropTypes.string,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  label: 'Button',
  bg: '#FFCA41',
  hover: { bg: '#EAA31B' },
  borderRadius: '20px',
  primary: true,
  onClick: undefined,
  variant: 'solid',
};
