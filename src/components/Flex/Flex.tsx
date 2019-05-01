import React, { Component, ReactNode } from 'react';
import styled from 'styled-components';

import FlexItem from './FlexItem';

export interface Props {
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

class Flex extends Component<Props> {
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
  ${(props: Props) => props.height && `height: ${props.height}`}
  ${(props: Props) => props.width && `width: ${props.width}`}
  ${(props: Props) => props.background && `background: ${props.background}`}
  ${(props: Props) => props.direction && `flex-direction: ${props.direction}`}
  ${(props: Props) => props.wrap && `flex-wrap: ${props.wrap}`}
  ${(props: Props) =>
    props.justifyContent && `justify-content: ${props.justifyContent}`}
  ${(props: Props) => props.alignItems && `align-items: ${props.alignItems}`}
  ${(props: Props) =>
    props.alignContent && `align-content: ${props.alignContent}`}
`;

export default Flex;
