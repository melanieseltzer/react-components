import React, { ReactNode } from 'react';
import styled from 'styled-components';

export interface Props {
  className?: string;
  children: ReactNode;
  height?: string;
  width?: string;
  background?: string;
  order?: number;
  grow?: number;
  shrink?: number;
  basis?: number | 'auto';
  alignSelf?:
    | 'auto'
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'baseline'
    | 'stretch';
}

const FlexItem = (props: Props) => {
  const { className, children } = props;

  return (
    <StyledFlexItem className={className} {...props}>
      {children}
    </StyledFlexItem>
  );
};

const StyledFlexItem = styled.div`
  ${(props: Props) => props.height && `height: ${props.height}`}
  ${(props: Props) => props.width && `width: ${props.width}`}
  ${(props: Props) => props.background && `background: ${props.background}`}
  ${(props: Props) => props.order && `order: ${props.order}`}
  ${(props: Props) => props.grow && `flex-grow: ${props.grow}`}
  ${(props: Props) => props.shrink && `flex-shrink: ${props.shrink}`}
  ${(props: Props) => props.basis && `flex-basis: ${props.basis}`}
  ${(props: Props) => props.alignSelf && `align-self: ${props.alignSelf}`}
`;

export default FlexItem;
