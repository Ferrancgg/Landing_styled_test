import React from 'react';
import styled from 'styled-components';

// Styled Button
const StyledButton = styled.button`
  background-color: ${({ theme, variant }) =>
    variant === 'secondary' ? theme.colors.secondary : theme.colors.primary};
  color: ${({ theme }) => theme.colors.background};
  border: none;
  padding: ${({ theme, size }) =>
    size === 'large'
      ? theme.spacing.lg
      : size === 'small'
      ? theme.spacing.sm
      : theme.spacing.md};
  font-size: ${({ theme, size }) =>
    size === 'large'
      ? theme.typography.sizes.large
      : size === 'small'
      ? theme.typography.sizes.small
      : theme.typography.sizes.medium};
  font-family: ${({ theme }) => theme.typography.fonts.primary};
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background-color: ${({ theme, variant }) =>
      variant === 'secondary' ? theme.colors.primary : theme.colors.secondary};
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }

  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'auto')};
`;

// Button Component
const Button = ({ text, variant = 'primary', size = 'medium', fullWidth = false, disabled = false, ...props }) => {
  return (
    <StyledButton
      variant={variant}
      size={size}
      fullWidth={fullWidth}
      disabled={disabled}
      {...props}
    >
      {text}
    </StyledButton>
  );
};

export default Button;