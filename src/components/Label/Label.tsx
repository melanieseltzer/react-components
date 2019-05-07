import React from 'react';
import styled from 'styled-components';

export interface Props extends React.InputHTMLAttributes<HTMLLabelElement> {
  /** Pass it any class to extend styling. */
  className?: string;
  color?: string;
  htmlFor?: string;
  width?: string;
  /** Passed from Floating and not meant to be used explicitely. */
  float?: boolean;
}

const Label = (props: Props) => {
  const { color = '#aaa', children, className } = props;

  return (
    <LabelWrapper color={color} className={className} {...props}>
      {children}
    </LabelWrapper>
  );
};

const LabelWrapper = styled.label`
  transition: all 0.2s;
  color: ${(props: Props) => props.color};
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

export default Label;
