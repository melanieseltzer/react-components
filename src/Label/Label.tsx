import React, { ReactNode } from 'react';
import styled from 'styled-components';

export interface Label extends React.InputHTMLAttributes<HTMLLabelElement> {
  border?: number;
  color?: string;
}

interface StyledProps {
  float?: boolean;
}

const Label = (props: Label): ReactNode => {
  const { children } = props;
  return <StyledLabel {...props}>{children}</StyledLabel>;
};

export default Label;

const StyledLabel = styled.label`
  font-size: 1rem;
  transition: all 0.2s;
  color: ${({ color }) => (color ? color : '#222')};
  /* Leverage props when used in context of floating label */
  ${({ float }: StyledProps) =>
    float &&
    `
      position: absolute;
      top: 0;
      left: 0;
      &:hover {
        cursor: text;
      }
    `}
`;
