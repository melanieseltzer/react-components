import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export interface LabelProps
  extends React.InputHTMLAttributes<HTMLLabelElement> {
  /** Pass it any class to extend styling. */
  className?: string;
  color?: string;
  htmlFor?: string;
  width?: string;
  /** Passed from Floating and not meant to be used explicitely. */
  float?: boolean;
}

const Props = {
  className: PropTypes.string,
  color: PropTypes.string,
  htmlFor: PropTypes.string,
  width: PropTypes.string,
  float: PropTypes.bool
};

const Label = (props: LabelProps) => {
  const { color = '#aaa', children, className } = props;

  return (
    <LabelWrapper color={color} className={className} {...props}>
      {children}
    </LabelWrapper>
  );
};

const LabelWrapper = styled.label`
  transition: all 0.2s;
  color: ${(props: LabelProps) => props.color};
  /* Leverage props when used in context of floating label */
  ${(props: LabelProps) =>
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

Label.propTypes = Props;

export default Label;
