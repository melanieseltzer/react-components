import React, { ReactNode } from 'react';
import styled from 'styled-components';

export interface Label extends React.InputHTMLAttributes<HTMLLabelElement> {
  color?: string;
  width?: string;
}

interface Props {
  color?: string;
  border?: number;
  float?: boolean;
  width?: string;
}

const Label = (props: Label): ReactNode => {
  const { children } = props;
  return <StyledLabel {...props}>{children}</StyledLabel>;
};

export default Label;

const StyledLabel = styled.label`
  font-size: 1rem;
  transition: all 0.2s;
  color: ${(props: Props) => (props.color ? props.color : '#222')};
  /* Leverage props when used in context of floating label */
  ${(props: Props) =>
    props.float &&
    `
      position: absolute;
      top: 0;
      left: 0;
      &:hover {
        cursor: text;
      }
    `}
`;