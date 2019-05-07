import React, { Component, ReactNode } from 'react';
import styled from 'styled-components';

import FlexItem from './FlexItem';

export interface FlexProps {
  className?: string;
  children: ReactNode;
  height?: string;
  width?: string;
  background?: string;
  direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
  wrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
  justifyContent?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
  alignItems?: 'stretch' | 'flex-start' | 'flex-end' | 'center' | 'baseline';
  alignContent?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'stretch';
}

class Flex extends Component<FlexProps> {
  public static Item = FlexItem;

  public render() {
    const { props } = this;
    const { className, children } = props;

    return (
      <FlexWrapper className={className} {...props}>
        {children}
      </FlexWrapper>
    );
  }
}

const FlexWrapper = styled.div`
  display: flex;
  ${(props: FlexProps) => props.height && `height: ${props.height}`}
  ${(props: FlexProps) => props.width && `width: ${props.width}`}
  ${(props: FlexProps) => props.background && `background: ${props.background}`}
  ${(props: FlexProps) =>
    props.direction && `flex-direction: ${props.direction}`}
  ${(props: FlexProps) => props.wrap && `flex-wrap: ${props.wrap}`}
  ${(props: FlexProps) =>
    props.justifyContent && `justify-content: ${props.justifyContent}`}
  ${(props: FlexProps) =>
    props.alignItems && `align-items: ${props.alignItems}`}
  ${(props: FlexProps) =>
    props.alignContent && `align-content: ${props.alignContent}`}
`;

export default Flex;
