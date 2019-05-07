import React, { ReactNode } from 'react';
import styled from 'styled-components';

export interface FlexItemProps {
  className?: string;
  children: ReactNode;
  height?: string;
  width?: string;
  background?: string;
  flex?: string;
  order?: number;
  grow?: number;
  shrink?: number;
  basis?: string;
  alignSelf?:
    | 'auto'
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'baseline'
    | 'stretch';
}

const FlexItem = (props: FlexItemProps) => {
  const { className, children } = props;

  return (
    <StyledFlexItem className={className} {...props}>
      {children}
    </StyledFlexItem>
  );
};

const StyledFlexItem = styled.div`
  ${(props: FlexItemProps) => props.flex && `flex: ${props.flex}`}
  ${(props: FlexItemProps) => props.height && `height: ${props.height}`}
  ${(props: FlexItemProps) => props.width && `width: ${props.width}`}
  ${(props: FlexItemProps) =>
    props.background && `background: ${props.background}`}
  ${(props: FlexItemProps) => props.order && `order: ${props.order}`}
  ${(props: FlexItemProps) => props.grow && `flex-grow: ${props.grow}`}
  ${(props: FlexItemProps) => props.shrink && `flex-shrink: ${props.shrink}`}
  ${(props: FlexItemProps) => props.basis && `flex-basis: ${props.basis}`}
  ${(props: FlexItemProps) =>
    props.alignSelf && `align-self: ${props.alignSelf}`}
`;

export default FlexItem;
