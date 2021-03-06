import React, { ReactNode } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Flex from '../Flex';

export interface CardProps {
  /** Must pass it a child. */
  children: ReactNode;
  /** Pass it any class to extend styling. */
  className?: string;
  /**
   * Pass it a valid box-shadow, otherwise default will be used.
   * Default: `0 5px 35px rgba(64, 67, 109, 0.25)`
   */
  boxShadow?: string;
  /**
   * Pass it a valid border-radius, otherwise default will be used.
   * Default: `10px`
   */
  borderRadius?: string;
}

const Props = {
  /** Must pass it a child. */
  children: PropTypes.node.isRequired,
  /** Pass it any class to extend styling. */
  className: PropTypes.string,
  /**
   * Pass it a valid box-shadow, otherwise default will be used.
   * Default: `0 5px 35px rgba(64, 67, 109, 0.25)`
   */
  boxShadow: PropTypes.string,
  /**
   * Pass it a valid border-radius, otherwise default will be used.
   * Default: `10px`
   */
  borderRadius: PropTypes.string
};

const Card = (props: CardProps) => {
  const { children, className } = props;

  return (
    <CardWrapper className={className} {...props}>
      {children}
    </CardWrapper>
  );
};

const CardWrapper = styled(Flex.Item)`
  box-shadow: ${(props: CardProps) =>
    props.boxShadow ? props.boxShadow : `0 5px 35px rgba(64, 67, 109, 0.25)`};
  border-radius: ${(props: CardProps) =>
    props.borderRadius ? props.borderRadius : `10px`};
  padding: 1.25rem;
  margin: 1.25rem;
  transition: 0.2s all ease-out;
  transform: scale(1);
  &:hover {
    transform: scale(1.02);
  }
  @media (hover: none) {
    &:hover {
      transform: scale(1);
    }
  }
`;

Card.propTypes = Props;

export default Card;
