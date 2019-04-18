import React, { ReactNode } from 'react';
import styled from 'styled-components';

const Label = (props: LabelProps): ReactNode => {
  const { children } = props;
  return <StyledLabel {...props}>{children}</StyledLabel>;
};

const StyledLabel = styled.label`
  font-size: 1.2rem;
  padding: 0 1rem;
  transition: all 0.2s;
  color: #8e2de2;
  /* Leverage props when used in context of floating label */
  ${(props: StyledProps) =>
    props.float &&
    `
      position: absolute;
      top: 0;
      left: 0;
    `}
`;

export default Label;
