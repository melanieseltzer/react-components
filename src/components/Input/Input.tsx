import React from 'react';
import styled from 'styled-components';

export interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  /** Pass it any class to extend styling. */
  className?: string;
  background?: string;
  border?: number;
  borderBottom?: boolean;
  color?: string;
  width?: string;
  /** Passed from Floating and not meant to be used explicitely. */
  float?: boolean;
}

const Input = (props: Props) => {
  const { color = '#ccc', border = 0, className } = props;

  return (
    <InputWrapper
      border={border}
      color={color}
      className={className}
      {...props}
    />
  );
};

const InputWrapper = styled.input`
  background: ${(props: Props) =>
    props.background ? props.background : 'none'};
  border: 0;
  ${(props: Props) =>
    props.border &&
    props.border > 0 &&
    `border${props.borderBottom ? '-bottom' : ''}: ${props.border}px solid ${
      props.color
    }`};
  font-size: 1rem;
  height: 2rem;
  transition: all 0.2s;
  padding: ${(props: Props) =>
    props.float ? '1rem 0.5rem 0.5rem 0.5rem' : '0.5rem'};
  ${(props: Props) => props.width && `width: ${props.width}`};
  ${(props: Props) =>
    props.float &&
    `
      /* normal label size (when placeholder is there but hidden aka not focused) */
      :placeholder-shown + label {
        transform: translate(0.7rem, 1.2rem) scale(1.2);
      }
      /* when not focused, hide the placeholder */
      :placeholder-shown:not(:focus)::placeholder,
      :placeholder-shown:not(:focus)::-webkit-input-placeholder {
        opacity: 0;
        transition: inherit;
      }
      /* show the placeholder only when input is focused */
      :focus::placeholder,
      :focus::-webkit-input-placeholder {
        color: #626262;
        opacity: 1;
      }
      /* shrink the label when focused and also when text has been entered */
      :not(:placeholder-shown) + label,
      :focus + label {
        padding-top: 0.2rem;
        transform-origin: left top;
        transform: translate(0.5rem, 0rem) scale(1);
      }
    `}
`;

export default Input;
