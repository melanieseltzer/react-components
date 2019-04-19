import React, { ReactNode } from 'react';
import styled from 'styled-components';

export interface Input extends React.InputHTMLAttributes<HTMLInputElement> {
  border?: number;
  color?: string;
  width?: string;
}

interface Props {
  color?: string;
  border?: number;
  float?: boolean;
  width?: string;
}

const Input = (props: Input): ReactNode => <StyledInput {...props} />;

export default Input;

const StyledInput = styled.input`
  border: 0;
  border-bottom: ${(props: Props) => `${props.border ? props.border : 1}px solid
    ${props.color ? props.color : `#ccc`}`};
  font-size: 1rem;
  height: auto;
  transition: all 0.2s;
  padding: 0.8rem 0 0.5rem 0;
  ${(props: Props) => props.width && `width: ${props.width}`};
  ${(props: Props) =>
    props.float &&
    `
      /* normal label size (when placeholder is there but hidden aka not focused) */
      :placeholder-shown + label {
        transform-origin: left bottom;
        transform: translate(0, 0.4rem) scale(1);
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
        transform: translate(0, -0.7rem) scale(0.8);
      }
    `}
`;
