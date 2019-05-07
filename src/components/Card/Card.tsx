import React, { ReactNode } from 'react';
import styled from 'styled-components';

import Flex from '../Flex';

export interface Props {
  /** Takes any sort of children */
  children: ReactNode;
  /** Pass it any class to extend styling */
  className?: string;
  /** Pass it a full box-shadow value like `0 10px 40px 0 rgba(64, 67, 109, 0.25)`, otherwise it will use the default style */
  boxShadow?: string;
  borderRadius?: string;
}

const Card = (props: Props) => {
  const { children, className } = props;

  return (
    <CardWrapper className={className} {...props}>
      {children}
    </CardWrapper>
  );
};

const CardWrapper = styled(Flex.Item)`
  box-shadow: ${(props: Props) =>
    props.boxShadow ? props.boxShadow : `0 5px 35px rgba(64, 67, 109, 0.25)`};
  border-radius: ${(props: Props) =>
    props.borderRadius ? props.borderRadius : `10px`};
  padding: 1.25rem;
  margin: 1.25rem;
  transition: 0.2s all ease-out;
  @media (min-width: 1025px) {
    &:hover {
      transform: scale(1.02);
    }
  }
`;

export default Card;
