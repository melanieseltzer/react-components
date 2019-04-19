import React, { ReactNode } from 'react';
import styled from 'styled-components';

export interface FlexItem {
  children: ReactNode;
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

const FlexItem = (props: FlexItem): ReactNode => (
  <StyledFlexItem {...props}>{props.children}</StyledFlexItem>
);

export default FlexItem;

const StyledFlexItem = styled.div`
  ${(props: FlexItem) => props.background && `background: ${props.background}`}
  ${(props: FlexItem) => props.order && `order: ${props.order}`}
  ${(props: FlexItem) => props.grow && `flex-grow: ${props.grow}`}
  ${(props: FlexItem) => props.shrink && `flex-shrink: ${props.shrink}`}
  ${(props: FlexItem) => props.basis && `flex-basis: ${props.basis}`}
  ${(props: FlexItem) => props.alignSelf && `align-self: ${props.alignSelf}`}
`;