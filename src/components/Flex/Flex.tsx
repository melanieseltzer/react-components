import React, { ReactNode } from 'react';
import styled from 'styled-components';

export interface Flex {
  children: ReactNode;
  background?: string;
  direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
  wrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
  justifyContent?:
    | 'flex-start '
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

const Flex = (props: Flex): JSX.Element => {
  const { children } = props;

  return <StyledFlex {...props}>{children}</StyledFlex>;
};

export default Flex;

const StyledFlex = styled.div`
  display: flex;
  ${(props: Flex) => props.background && `background: ${props.background}`}
  ${(props: Flex) => props.direction && `flex-direction: ${props.direction}`}
  ${(props: Flex) => props.wrap && `flex-wrap: ${props.wrap}`}
  ${(props: Flex) =>
    props.justifyContent && `justify-content: ${props.justifyContent}`}
  ${(props: Flex) => props.alignItems && `align-items: ${props.alignItems}`}
  ${(props: Flex) =>
    props.alignContent && `align-content: ${props.alignContent}`}
`;
