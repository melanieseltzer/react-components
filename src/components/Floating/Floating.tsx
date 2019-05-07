import React, { Component, ReactNode } from 'react';
import styled from 'styled-components';

import Input from '../Input';
import Label from '../Label';

interface FloatingProps {
  /** Takes an Input and Label as children */
  children: ReactNode;
  /** Pass it any class to extend styling */
  className?: string;
}

class Floating extends Component<FloatingProps> {
  public static Input = Input;
  public static Label = Label;

  public render() {
    const { className, children } = this.props;

    const childrenWithProps = React.Children.map(
      children,
      (child: React.ReactElement<any>): ReactNode => {
        return React.cloneElement(child, {
          float: true
        });
      }
    );

    return (
      <FloatingWrapper className={className}>
        {childrenWithProps}
      </FloatingWrapper>
    );
  }
}

const FloatingWrapper = styled.div`
  position: relative;
`;

export default Floating;
